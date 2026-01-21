import { useNavigate } from "react-router-dom";
import BlogMain from "../../assets/img/resource/Blog1 1.webp";
import Blog2 from "../../assets/img/resource/blog2.webp";
import Blog3 from "../../assets/img/resource/blog3.webp";
import Blog4 from "../../assets/img/resource/blog4.webp";

const articles = [
  {
    id: 1,
    type: "Blog",
    meta: "2 min read",
    title: "Everything you need to know about wills",
    desc:
      "Explore guides, articles, and tools to understand succession laws and estate planning in India. This article helps simplify inheritance and personal laws.",
    image: BlogMain,
    featured: true,
  },
  {
    id: 2,
    type: "Blog",
    meta: "Published: 01 Oct 2024",
    title: "Understanding Legal Heirship Certificate and Succession Certificate",
    desc:
      "The succession laws prevailing in India often involve severe complexities surrounding inheritance and documentation.",
    image: Blog2,
  },
  { 
    id: 3,
    type: "Blog",
    meta: "Published: 01 Oct 2024",
    title: "Securing Your Legacy: How to Protect Your Assets in the Event of Your Unexpected Demise",
    desc:
      "Learn how proper planning can safeguard your estate and provide financial security for your loved ones.",
    image: Blog3,
  },
  {
    id: 4,
    type: "Blog",
    meta: "Published: 01 Oct 2024",
    title: "Understanding Legal Heirship Certificate and Succession Certificate",
    desc:
      "A closer look at the documents required to validate legal heirs and manage succession smoothly.",
    image: Blog4,
  },
];

const AllResources = () => {
  const featured = articles[0];
  const others = articles.slice(1);
  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    navigate(`/resources/${article.id}`, {
      state: {
        id: article.id,
        title: article.title,
        image: article.image,
        meta: article.meta,
        type: article.type,
      },
    });
  };

  return (
    <section className="bg-white px-4 md:px-16 py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Section heading */}
        <h2 className="font-[Urania] font-bold text-[#132F2C] text-[32px] leading-[32px] md:text-[42px] md:leading-[49px] mb-6 md:mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Featured article - spans two columns on desktop */}
          <article
            className="lg:col-span-2 cursor-pointer"
            onClick={() => handleArticleClick(featured)}
          >
            <div className="w-full overflow-hidden rounded-md mb-5">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover"
              />
            </div>

            <div className="font-[Urania] text-[14px] leading-[14px] text-[#868989] font-normal mb-3">
              <span>{featured.type}</span>
              <span className="mx-2">•</span>
              <span>{featured.meta}</span>
            </div>

            <h3 className="font-[Urania] text-[#132F2C] text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] font-medium mb-3 max-w-[660px]">
              {featured.title}
            </h3>

            <p className="font-[Urania] text-[#132F2C] text-[16px] leading-[24px] md:text-[18px] md:leading-[29px] font-normal max-w-[550px]">
              {featured.desc}
            </p>
          </article>

          {/* Other articles */}
          <div className="space-y-6">
            {/* Mobile / tablet: stacked full-width cards */}
            <div className="block lg:hidden space-y-6">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="w-full cursor-pointer"
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

                  <p className="font-[Urania] text-[#2F4F4A] text-[14px] leading-[20px]">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Desktop: compact side list */}
            <div className="hidden lg:block space-y-6">
              {others.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-[#E3E7E6] pb-4 last:border-b-0 last:pb-0 cursor-pointer"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="w-[130px] h-[90px] overflow-hidden rounded-md flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-[Urania] text-[12px] leading-[14px] text-[#868989] mb-1.5">
                      <span>{item.type}</span>
                      <span className="mx-2">•</span>
                      <span>{item.meta}</span>
                    </div>

                    <h4 className="font-[Urania] text-[#132F2C] text-[16px] leading-snug font-medium mb-1">
                      {item.title}
                    </h4>

                    <p className="font-[Urania] text-[#2F4F4A] text-[13px] leading-[18px] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllResources;
