import Navigation from '../Navigation';

const Header = () => {
  return (
    <section className="bg-[url('/images/header-img.png')] bg-cover">
      <div className="m-[0_17.5px] xl:p-[0_135px]">
        <div className="flex justify-between items-center p-[25px_0_75px_0]">
          <h1 className="text-white font-extrabold text-[20px] leading-[100%]">Timers App</h1>
          <Navigation />
        </div>
        <div className="flex justify-center xl:justify-start">
          <div className="pb-[100px] text-center xl:p-[90px_0_180px_0] xl:text-left">
            <img
              className="inline-block xl:block xl:mb-[16px]"
              src="/images/app-icon.png"
              alt="Logo"
            />
            <p className="max-w-[535px] mb-[35.5px] text-white text-[35px] font-light leading-[50px] tracking-[1px]">
              <span className="font-[800]">Timers App.</span> Best landing page for web and mobile
              apps
            </p>
            <div className="flex justify-center xl:justify-start gap-[20px]">
              <button className="btn">Download Now</button>
              <button className="btn btn-secondary">Watch Video</button>
            </div>
          </div>
          <div>
            <img
              className="absolute top-[137px] right-[196.5px] hidden xl:block"
              src="/images/Tablet.png"
              alt="tablet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
