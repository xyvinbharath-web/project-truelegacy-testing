import Frameservice from "../assets/img/service/Frameservice.webp";
import ServicesAccent from "../assets/icon/Vectorlogo6904.webp";

const Header = ({ title, subtitle }) => {
  return (
    <header className="relative w-full">
      <div
        className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] xl:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(${Frameservice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle dark tint so text stays readable but image is clearly visible */}
        <div className="absolute inset-0 bg-[#132F2C]/45" />

        <div className="relative h-full max-w-[1300px] mx-auto px-4 md:px-10 flex flex-col justify-end pb-10 md:pb-14 lg:pb-16">
          {/* Title + yellow accent icon */}
          <div className="inline-flex items-center gap-3 mb-2">
            <h1
              className="font-[Urania] font-bold text-[#F4D57E]
                         text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[66px]
                         leading-[44px] sm:leading-[54px] lg:leading-[64px] xl:leading-[74px]"
            >
              {title}
            </h1>
            <img
              src={ServicesAccent}
              alt="Services accent icon"
              className="w-[18px] h-[19px] sm:w-[21px] sm:h-[22px] lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px]"
            />
          </div>

          <p className="font-[Urania] text-white/90 max-w-[540px]
                         text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]
                         leading-[20px] sm:leading-[24px] lg:leading-[26px] xl:leading-[29px]">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
