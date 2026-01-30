import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogById, getBlogs } from "../../api/blogsApi";

const getSecondParagraphFromMarkdown = (markdown) => {
  const text = String(markdown || "");
  const paragraphs = text
    .split(/\n\s*\n+/)
    .map((p) =>
      p
        .replace(/^#{1,6}\s+/gm, "")
        .replace(/^(-|\*)\s+/gm, "")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/_([^_]+)_/g, "$1")
        .trim()
    )
    .filter(Boolean);

  return paragraphs[1] || "";
};

const getExcerptFromBlogDetail = (blog) => {
  const a = getSecondParagraphFromMarkdown(blog?.dark_content);
  if (a) return a;
  const b = getSecondParagraphFromMarkdown(blog?.faded_content);
  if (b) return b;
  const fromSections = Array.isArray(blog?.sub_sections)
    ? blog.sub_sections
      .map((s) => getSecondParagraphFromMarkdown(s?.content))
      .find(Boolean)
    : "";
  return fromSections || "";
};

const AllResources = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getBlogs({ status: "published" })
      .then(async (res) => {
        if (!active) return;
        const list = Array.isArray(res?.data) ? res.data : [];
        const mapped = list.map((b) => ({
          id: b._id,
          slug: b.slug,
          type: "Blog",
          meta: b.createdAt
            ? `Published: ${new Date(b.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}`
            : "",
          title: b.title,
          desc: b.description,
          image: b.image,
          excerpt: "",
        }));

        const withExcerpt = await Promise.all(
          mapped.map(async (item) => {
            try {
              const detailRes = await getBlogById(item.id);
              const blog = detailRes?.data?.blog;
              const excerpt = getExcerptFromBlogDetail(blog);
              return { ...item, excerpt: excerpt || item.desc || "" };
            } catch {
              return { ...item, excerpt: item.desc || "" };
            }
          })
        );

        if (!active) return;
        setBlogs(withExcerpt);
      })
      .catch(() => {
        if (!active) return;
        setBlogs([]);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const featured = blogs[0];
  const others = blogs.slice(1);

  const handleArticleClick = (article) => {
    if (!article?.slug) return;
    navigate(`/resources/${article.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-white px-4 md:px-16 py-12 md:py-16 lg:pb-32 resources-section ${isVisible ? "resources-section-visible" : ""
        }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <h2 className="font-[Urania] font-bold text-[#132F2C] text-[32px] leading-[32px] md:text-[42px] md:leading-[49px] mb-6 md:mb-8 resources-heading">
          Insights
        </h2>

        {loading ? null : null}

        {!loading && !featured ? null : null}

        <div className="grid grid-cols-1 xl:grid-cols-[614px_650px] gap-8 lg:gap-8 items-start">
          {/* Featured article - desktop column 1 */}
          {featured && (
            <article
              className="cursor-pointer resources-featured w-full xl:w-[614px]"
              onClick={() => handleArticleClick(featured)}
            >
              <div className="w-full overflow-hidden rounded-md mb-8">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[382px] xl:w-[614px] object-cover"
                />
              </div>

              <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal not-italic mb-4">
                <span>{featured.type}</span>
                <span className="mx-2">•</span>
                <span>{featured.meta}</span>
              </div>

              <h3 className="font-[Urania] text-[#132F2C] text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] mb-3 max-w-[660px]" style={{ fontWeight: 500 }}>
                {featured.title}
              </h3>

              <p className="font-[Urania] text-[#132F2C] text-[16px] leading-[24px] md:text-[18px] md:leading-[29px] font-normal max-w-[550px] line-clamp-2">
                {featured.excerpt || featured.desc}
              </p>
            </article>
          )}

          {/* Other articles */}
          <div className="space-y-6 resources-sidebar w-full">
            {/* Mobile / tablet: stacked full-width cards */}
            <div className="block xl:hidden space-y-6">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="w-full cursor-pointer resources-article"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="w-full overflow-hidden rounded-md mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-2">
                    <span>{item.type}</span>
                    <span className="mx-2">•</span>
                    <span>{item.meta}</span>
                  </div>

                  <h4 className="font-[Urania] text-[#132F2C] text-[18px] leading-[22px] font-medium mb-1">
                    {item.title}
                  </h4>

                  <p className="font-[Urania] text-[#2F4F4A] text-[14px] leading-[20px] line-clamp-2">
                    {item.excerpt || item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Desktop: compact side list */}
            <div className="hidden xl:block space-y-5">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-[#E3E7E6] pb-4 last:border-b-0 last:pb-0 cursor-pointer resources-article"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="w-[240px] h-[180px] overflow-hidden rounded-md flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal not-italic mb-3" style={{ fontWeight: 400 }}>
                      <span>{item.type}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta}</span>
                    </div>

                    <h4 className="font-[Urania] text-[#132F2C] text-[24px] leading-snug font-medium mb-2" >
                      {item.title}
                    </h4>

                    <p className="font-[Urania] text-[#868989] text-[16px] leading-[20px] line-clamp-2" style={{ fontWeight: 400 }}>
                      {item.excerpt || item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* New Section - Additional Resources */}
        <div className="mt-16 md:mt-20 hidden md:block">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer hover:opacity-90 transition-opacity resources-article"
                onClick={() => handleArticleClick(item)}
              >
                <div className="w-full overflow-hidden rounded-md mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
                  />
                </div>
                <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-3">
                  <span>{item.type}</span>
                  <span className="mx-2">•</span>
                  <span>{item.meta}</span>
                </div>
                <h3 className="font-[Urania] text-[#132F2C] text-[20px] leading-[20px] md:text-[24px] md:leading-[24px] font-medium mb-3 max-w-[95%]">
                  {item.title}
                </h3>
                {(item.excerpt || item.desc) && (
                  <p className="font-[Urania] text-[#868989] text-[14px] leading-[20px] md:text-[14px] md:leading-[24px] font-normal line-clamp-2">
                    {item.excerpt || item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllResources;
