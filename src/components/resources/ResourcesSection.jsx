import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LegacyAccent from "../../assets/img/home/Frame legacybackground.webp";
import ShareIcon from "../../assets/icon/share-08.webp";
import { getBlogById, getBlogs } from "../../api/blogsApi";

const toBlocks = (markdown) => {
  const text = String(markdown || "");
  const lines = text.split("\n");
  const blocks = [];
  let paragraph = [];

  const flushParagraph = () => {
    const trimmed = paragraph.join(" ").trim();
    if (trimmed) blocks.push({ type: "p", text: trimmed });
    paragraph = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      flushParagraph();
      blocks.push({ type: "h", text: line.replace(/^#{1,6}\s+/, "") });
      continue;
    }

    if (/^(-|\*)\s+/.test(line)) {
      flushParagraph();
      blocks.push({ type: "li", text: line.replace(/^(-|\*)\s+/, "") });
      continue;
    }

    paragraph.push(line);
  }
  flushParagraph();

  const grouped = [];
  let currentList = null;
  for (const b of blocks) {
    if (b.type === "li") {
      if (!currentList) {
        currentList = { type: "ul", items: [] };
        grouped.push(currentList);
      }
      currentList.items.push(b.text);
      continue;
    }
    currentList = null;
    grouped.push(b);
  }
  return grouped;
};

// Extract second paragraph (or first fallback) from blog detail for list excerpt
const getExcerptFromBlogDetail = (blog) => {
  if (!blog) return "";
  const fields = [
    blog.dark_content,
    blog.faded_content,
    ...(blog.sub_sections || []).map((s) => s.content),
  ];
  const paragraphs = [];
  fields.forEach((field) => {
    if (typeof field === "string") {
      const split = field.split("\n").filter((p) => p.trim());
      paragraphs.push(...split);
    }
  });
  // Return second paragraph if available, else first
  return paragraphs[1] || paragraphs[0] || "";
};

// Extract first paragraph from blog detail for Related articles
const getFirstParagraphFromBlogDetail = (blog) => {
  if (!blog) return "";
  const fields = [
    blog.dark_content,
    blog.faded_content,
    ...(blog.sub_sections || []).map((s) => s.content),
  ];
  const paragraphs = [];
  fields.forEach((field) => {
    if (typeof field === "string") {
      const split = field.split("\n").filter((p) => p.trim());
      paragraphs.push(...split);
    }
  });
  // Return first paragraph
  return paragraphs[0] || "";
};

const ResourcesSection = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [latestWithExcerpts, setLatestWithExcerpts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const relatedScrollRef = useRef(null);
  const scrollDirRef = useRef(1); // 1 = right, -1 = left

  // Simple on-load entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let active = true;
    const run = async () => {
      try {
        setLoading(true);
        const listRes = await getBlogs({ status: "published" });
        const list = Array.isArray(listRes?.data) ? listRes.data : [];
        const matched = list.find((b) => b?.slug === slug);

        if (!matched?._id) {
          if (!active) return;
          setBlogData(null);
          setRelatedBlogs([]);
          setLatestBlogs([]);
          return;
        }

        const detailRes = await getBlogById(matched._id);
        const blog = detailRes?.data?.blog || null;
        const latest = Array.isArray(detailRes?.data?.latest_blogs)
          ? detailRes.data.latest_blogs
          : [];

        if (!active) return;
        setBlogData(blog);
        setRelatedBlogs(Array.isArray(blog?.relatedBlogs) ? blog.relatedBlogs : []);
        setLatestBlogs(latest);

        // Enrich latest blogs with second paragraph and formatted dates
        const enriched = await Promise.all(
          latest.map(async (b) => {
            try {
              const detailRes = await getBlogById(b._id);
              const blog = detailRes?.data?.blog;
              // Extract second paragraph (or first fallback)
              const excerpt = getExcerptFromBlogDetail(blog);
              return {
                ...b,
                excerpt: excerpt || b.description || "",
                formattedDate: blog?.createdAt
                  ? `Published: ${new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}`
                  : "",
              };
            } catch {
              return {
                ...b,
                excerpt: b.description || "",
                formattedDate: "",
              };
            }
          })
        );
        if (!active) return;
        setLatestWithExcerpts(enriched);
      } catch {
        if (!active) return;
        setBlogData(null);
        setRelatedBlogs([]);
        setLatestBlogs([]);
        setLatestWithExcerpts([]);
      } finally {
        if (!active) return;
        setLoading(false);
      }
    };

    if (!slug) {
      setBlogData(null);
      setRelatedBlogs([]);
      setLatestBlogs([]);
      setLatestWithExcerpts([]);
      setLoading(false);
      return;
    }

    run();
    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    const el = relatedScrollRef.current;
    if (!el) return;

    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    const tick = () => {
      const first = el.querySelector("[data-related-card='1']");
      if (!first) return;

      const cardWidth = first.getBoundingClientRect().width;
      const gap = 32;
      const step = cardWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;

      const current = el.scrollLeft;
      let next;
      if (scrollDirRef.current === 1) {
        if (current >= maxScroll - 2) {
          scrollDirRef.current = -1;
          next = Math.max(current - step, 0);
        } else {
          next = Math.min(current + step, maxScroll);
        }
      } else {
        if (current <= 2) {
          scrollDirRef.current = 1;
          next = Math.min(current + step, maxScroll);
        } else {
          next = Math.max(current - step, 0);
        }
      }
      if (next !== current) {
        el.scrollTo({ left: next, behavior: "smooth" });
      }
    };

    const id = window.setInterval(tick, 5000);
    return () => window.clearInterval(id);
  }, [latestBlogs.length]);

  const heroTitle = blogData?.title || "";
  const heroImage = blogData?.image || "";
  const heroMeta = blogData?.createdAt
    ? `Published: ${new Date(blogData.createdAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`
    : "";

  const handleBlogClick = (blog) => {
    if (!blog?.slug) return;
    navigate(`/resources/${blog.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-[#F6FFFF] pt-10 pb-0 md:py-16 ${isVisible ? "animate-fade-in" : ""
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        {/* ================= HERO SECTION (RESPONSIVE OVERLAP) ================= */}
        <div className="relative mb-20 md:mb-24">

          {/* Image wrapper - mobile right-aligned, tablet wider */}
          <div className={`relative w-full max-w-[324px] h-[300px] sm:h-[380px] md:h-[380px]
                  ml-auto mr-[-26px]
                  md:max-w-[640px] md:mr-0
                  lg:max-w-[840px] lg:h-[460px]
                  xl:max-w-none xl:w-[968px] xl:h-[540px] rounded-xl overflow-hidden
                  lg:mr-0 xl:ml-auto xl:mr-[-180px] ${isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: '200ms' }}>
            {heroImage ? (
              <img
                src={heroImage}
                alt={heroTitle}
                className="w-full h-full object-cover object-[10%_50%] lg:object-center"
              />
            ) : null}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#132F2C]/45" />

            {/* Legacy accent image in place of triangle */}
            <img
              src={LegacyAccent}
              alt="Legacy accent"
              className="absolute bottom-0 right-0 w-[200px] h-auto"
            />
          </div>

          {/* Yellow card */}
          <div
            className={`bg-[#F4D57E] text-[#132F2C] rounded-[6px]
               w-[315px] max-w-[90%] px-6 py-4 ml-3 -mt-10 relative z-20
               md:w-[420px] md:ml-8 md:-mt-14
               lg:w-[560px] lg:px-10 lg:py-8 lg:-mt-16
               xl:absolute xl:mt-0 xl:ml-0 xl:left-[-175px] xl:px-[69px] xl:py-[66px] xl:w-[640px]
               xl:top-1/2 xl:-translate-y-1/2 ${isVisible ? "animate-fade-in" : ""
              }`}
            style={{ animationDelay: '400ms' }}
          >
            {/* Meta */}
            <p
              className="flex items-center gap-2 font-[Urania] font-normal text-[14px] leading-[14px] mb-[16px]"
            >
              <span>
                Blog
                {blogData?.read_time && ` • ${blogData.read_time}`}
                {heroMeta && (
                  <>
                    <span className="hidden md:inline"> • {heroMeta}</span>
                  </>
                )}
                {" • Share"}
              </span>
              <img
                src={ShareIcon}
                alt="Share"
                className="w-5 h-5"
              />
            </p>
            <h1
              className="font-[Urania] font-bold text-[26px] leading-[31px]
                 md:text-[26px] md:leading-[31px]
                 lg:text-[46px] lg:leading-[46px]"
            >
              {heroTitle}
            </h1>
          </div>
        </div>


        {/* ================= MAIN ARTICLE CONTENT ================= */}
        <article className={`max-w-[820px] mx-auto text-[#132F2C] font-[Urania] ${isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: '600ms' }}>
          {loading ? null : null}

          {!loading && !blogData ? null : null}

          {toBlocks(blogData?.dark_content).map((b, idx) => {
            if (b.type === "h") {
              return (
                <h2 key={`h-${idx}`} className="text-[24px] leading-[24px] font-medium mb-3">
                  {b.text}
                </h2>
              );
            }
            if (b.type === "ul") {
              return (
                <ul
                  key={`ul-${idx}`}
                  className="list-disc list-inside space-y-2 text-[16px] leading-[26px] font-normal mb-6"
                >
                  {b.items.map((it, i) => (
                    <li key={`li-${idx}-${i}`}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={`p-${idx}`} className="text-[16px] leading-[26px] font-normal mb-6">
                {b.text}
              </p>
            );
          })}

          {toBlocks(blogData?.faded_content).map((b, idx) => {
            if (b.type === "h") {
              return (
                <h2 key={`fh-${idx}`} className="text-[24px] leading-[24px] font-medium mb-3">
                  {b.text}
                </h2>
              );
            }
            if (b.type === "ul") {
              return (
                <ul
                  key={`ful-${idx}`}
                  className="list-disc list-inside space-y-2 text-[16px] leading-[26px] font-normal mb-6"
                >
                  {b.items.map((it, i) => (
                    <li key={`fli-${idx}-${i}`}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={`fp-${idx}`} className="text-[16px] leading-[26px] font-normal mb-6">
                {b.text}
              </p>
            );
          })}

          {Array.isArray(blogData?.sub_sections)
            ? blogData.sub_sections.map((s, idx) => (
              <div key={`ss-${idx}`} className="mb-10">
                {s?.title ? (
                  <h2 className="text-[24px] leading-[24px] font-medium mb-3">
                    {s.title}
                  </h2>
                ) : null}

                {toBlocks(s?.content).map((b, i) => {
                  if (b.type === "h") {
                    return (
                      <h2
                        key={`ssh-${idx}-${i}`}
                        className="text-[24px] leading-[24px] font-medium mb-3"
                      >
                        {b.text}
                      </h2>
                    );
                  }
                  if (b.type === "ul") {
                    return (
                      <ul
                        key={`ssul-${idx}-${i}`}
                        className="list-disc list-inside space-y-2 text-[16px] leading-[26px] font-normal mb-6"
                      >
                        {b.items.map((it, j) => (
                          <li key={`ssli-${idx}-${i}-${j}`}>{it}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={`ssp-${idx}-${i}`}
                      className="text-[16px] leading-[26px] font-normal mb-6"
                    >
                      {b.text}
                    </p>
                  );
                })}
              </div>
            ))
            : null}
        </article>

        {latestWithExcerpts.length ? (
          <section className="bg-white mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10 pt-10 pb-0 md:py-10">
              <h3 className="font-[Urania] text-[#132F2C] text-[28px] md:text-[32px] font-semibold mb-8">
                Related articles
              </h3>

              <div
                ref={relatedScrollRef}
                className="overflow-x-auto overflow-y-hidden"
                style={{ direction: "ltr" }}
              >
                <div className="flex gap-8 snap-x snap-mandatory">
                  {latestWithExcerpts.map((b, idx) => (
                    <article
                      key={b._id}
                      data-related-card={idx === 0 ? "1" : undefined}
                      className="bg-white rounded-md overflow-hidden cursor-pointer snap-start flex-shrink-0 w-[82%] sm:w-[70%] md:w-[calc((100%-64px)/3)]"
                      onClick={() => handleBlogClick(b)}
                    >
                      <div className="w-full h-[180px] md:h-[200px] overflow-hidden">
                        <img
                          src={b.image}
                          alt={b.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="pt-4">
                        <p className="font-[Urania] text-[14px] leading-[14px] text-[#868989] mb-2">
                          Blog
                          {b.formattedDate && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{b.formattedDate}</span>
                            </>
                          )}
                        </p>

                        <h4 className="font-[Urania] text-[#132F2C] text-[18px] md:text-[20px] font-medium mb-2">
                          {b.title}
                        </h4>

                        <p className="font-[Urania] text-[14px] leading-[20px] text-[#868989]">
                          {b.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
};

export default ResourcesSection;
