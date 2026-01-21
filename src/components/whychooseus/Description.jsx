import Framedescription from "../../assets/img/whychooseus/Framedescription.webp";
import legacyBg from "../../assets/img/home/Frame legacybackground.webp";

const Description = () => {
  return (
    <section className="w-full bg-[#F6FFFF] py-16 lg:py-27 relative overflow-hidden">
      {/* Top background graphic */}
      <img
        src={legacyBg}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute opacity-100 pointer-events-none lg:hidden"
        style={{
          width: '150px',
          height: '130px',
          top: '15px',
          left: '8px',
          transform: 'rotate(0deg)'
        }}
      />
      
      {/* Desktop background graphic */}
      <img
        src={legacyBg}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute opacity-100 pointer-events-none hidden lg:block"
        style={{
          width: '440.1653747558594px',
          height: '373.3304443359375px',
          top: '200px',
          left: '610px',
          transform: 'rotate(0deg)'
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-20">

          {/* LEFT TEXT */}
          <div className="lg:col-span-7 max-w-[750px] -mt-8 lg:-mt-58">
            <p className="font-[Urania] font-bold text-[24px] sm:text-[28px] lg:text-[42px] leading-[30px] sm:leading-[35px] lg:leading-[48px] text-[#132F2C]">
              We're not here to hand you a document and send you on your way.
              We're here to understand your story, your struggles, and your
              wishes—then make sure they're honoured exactly as you intended.
            </p>
          </div>

          {/* RIGHT IMAGE STACK */}
          <div className="lg:col-span-5 relative flex justify-end lg:justify-end ml-auto lg:ml-0">

            {/* Thin line graphic */}
            <img
              src={legacyBg}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="hidden lg:block absolute -right-16 -bottom-16 w-[420px] opacity-70 pointer-events-none"
            />

            {/* Main image */}
            <div className="relative z-10 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[444px] lg:h-[442px] rounded-[8px] ml-auto lg:ml-0">
              <img
                src={Framedescription}
                alt="Client consultation"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Description;
