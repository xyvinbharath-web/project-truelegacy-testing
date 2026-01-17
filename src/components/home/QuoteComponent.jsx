import StyledButton from "../../ui/StyledButton";
import secureYourLegacyImage from "../../assets/img/home/Framesecureyourlegacy.webp";
import legacyBackground from "../../assets/img/home/Frame legacybackground.webp";

const QuoteComponent = () => {
  const handleRequestCallback = () => {
    // future action
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-24 relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-12 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT — unchanged */}
        <div className="text-left relative z-20">
          <h1 className="font-[Urania] font-bold text-[42px] leading-[49px] text-[#132F2C]">
            Want to Secure
            <br />
            your Legacy?
          </h1>

          <p className="mt-6 max-w-xl font-[Urania] text-[18px] leading-[26px] text-[#132F2C]">
            "Tomorrow is promised to none. Planning is a gift you can give today. With True Legacy,
            estate and wealth planning becomes more than a financial act; it becomes an act of
            love. The greatest inheritance you can give is peace of mind."
          </p>

          {/* Desktop button */}
          <div className="mt-10 hidden md:block">
            <StyledButton
              name="Request a Call Back"
              onClick={handleRequestCallback}
              variant="primary"
              minWidth="auto"
              className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E]"
            />
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative mt-8 md:mt-0 flex justify-end">

          {/* 🔸 DESKTOP decorative background — unchanged */}
          <img
            src={legacyBackground}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute z-10 left-[-230px] bottom-[-1px] w-[360px] pointer-events-none"
          />

          {/* 🔸 MOBILE decorative background */}
          <img
            src={legacyBackground}
            alt=""
            aria-hidden="true"
            className="
              md:hidden
              absolute
              z-10
              left-[-40px]
              bottom-[-30px]
              w-[220px]
              pointer-events-none
            "
          />

          {/* 🔹 Image card — unchanged */}
          <div className="relative z-20 w-[285px] h-[284px] md:w-[430px] md:h-[430px] bg-white rounded-[6px] overflow-hidden">
            <img
              src={secureYourLegacyImage}
              alt="Secure your legacy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MOBILE BUTTON — unchanged */}
        <div className="mt-8 md:hidden flex justify-start w-full relative z-20">
          <StyledButton
            name="Request a Call Back"
            onClick={handleRequestCallback}
            variant="primary"
            minWidth="auto"
            className="inline-flex items-center justify-center rounded-full !bg-[#132F2C] px-8 py-3 font-[Urania] text-[18px] font-bold !text-white shadow-[0_10px_25px_rgba(10,47,36,0.35)] hover:!bg-[#0D241E]"
          />
        </div>

      </div>
    </section>
  );
};

export default QuoteComponent;
