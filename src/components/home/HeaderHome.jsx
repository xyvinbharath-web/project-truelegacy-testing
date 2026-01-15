import heroBg from "../../assets/img/Group 1.webp";

const HeaderHome = () => {
  return (
    <section
      className="relative w-full h-[420px] md:h-[520px] lg:h-[660px] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "75% center",
      }}
    >
      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center h-full">
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Left vertical line accent */}
          <div className="hidden sm:block h-[160px] lg:h-[200px] border-l-[4px] border-[#F4D57E]" />

          {/* Text block */}
          <div className="max-w-2xl text-left text-white">
            
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-tight font-semibold">
              Are you comfortable with the law deciding
              <br className="hidden sm:block" />
              <span className="text-[#F4D57E]">your family&apos;s future for you?</span>
            </h1>
            <p className="mt-5 text-sm md:text-base text-slate-100/80 max-w-xl">
              If you leave it to the law, your family&apos;s future may unfold
              differently than you expect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
