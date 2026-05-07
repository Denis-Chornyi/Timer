const Footer = () => {
  return (
    <section className="flex items-center px-[16px] xl:px-[135px] min-h-[110px] bg-[#fff]">
      <div className="flex justify-between items-center w-[1440px] m-[0_auto]">
        <h1 className="text-[20px] font-[800]">Timers App</h1>
        <div className="hidden ml-[12px] text-[11px] text-[#676c75] text-center tracking-[0.17px] md:block">
          <p className="flex items-center text-[#999EA8]">
            Created with
            <img src="/images/HeartIcon.png" alt="Heart" className="w-[12px] h-[11px] m-[0_3px]" />
            by <b className="ml-[4px]">Sergey Azovskiy</b>
          </p>
          <p className="mt-[8px] text-[#999EA8]">© Timers App, 2025</p>
        </div>
        <div className="flex justify-between">
          <figure className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300 border-[0.5px] border-r-0 rounded-l-md">
            <img src="/images/Twitter.png" alt="Twitter" />
          </figure>
          <figure className="social-icon">
            <img src="/images/Facebook.png" alt="Facebook" />
          </figure>
          <figure className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300 border-[0.5px] border-l-0 rounded-r-md">
            <img src="/images/Instagram.png" alt="Instagram" />
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Footer;
