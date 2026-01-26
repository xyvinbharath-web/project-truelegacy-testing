import FrameMobile from "../assets/img/service/Frame 2147224829.webp";
import FrameDesktop from "../assets/img/service/Frame 1.webp";
import ServicesAccent from "../assets/icon/Vectorlogo6904.webp";

const Header = ({ title, subtitle }) => {
  return (
    <header className="relative w-full">
      <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] xl:h-[400px] overflow-hidden">
        {/* Mobile background image */}
        <div 
          className="absolute inset-0 sm:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${FrameMobile})` }}
        />
        
        {/* Desktop background image */}
        <div 
          className="absolute inset-0 hidden sm:block bg-cover bg-center"
          style={{ backgroundImage: `url(${FrameDesktop})` }}
        />
        <div className="relative h-full max-w-[1450px] mx-auto px-4 md:px-10 flex flex-col justify-end pb-10 md:pb-14 lg:pb-16 animate-fade-up">
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
              className="w-[18px] h-[19px] sm:w-[21px] sm:h-[22px] lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] animate-fade-in"
            />
          </div>

          <p className="font-[Urania] text-white/90 max-w-[540px]
                         text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]
                         leading-[20px] sm:leading-[24px] lg:leading-[26px] xl:leading-[29px] animate-fade-in" style={{ animationDelay: '120ms' }}>
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
