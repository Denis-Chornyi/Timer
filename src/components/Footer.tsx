const Footer = () => {
  return (
    <div className="flex justify-between items-center p-[0_1.5%] xl:p-[0_9.38%] min-h-[110px] bg-[#fff]">
      <h1 className="text-[20px] font-[800]">Timers App</h1>
      <div className="hidden text-[11px] text-[#676c75] text-center md:block">
        <p className="flex items-center text-[#999EA8]">
          Created with
          <img src="/images/HeartIcon.png" alt="Heart" className="w-[12px] h-[11px] m-[0_3px]" />
          by <b className="ml-[4px]">Sergey Azovskiy</b>
        </p>
        <p className="mt-[10px] text-[#999EA8]">© Timers App, 2025</p>
      </div>
      <div className="flex justify-between">
        <figure className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300 border-r-0 rounded-l-md">
          <img src="/images/Twitter.png" alt="Twitter" />
        </figure>
        <figure className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300">
          <img src="/images/Facebook.png" alt="Facebook" />
        </figure>
        <figure className="w-[40px] h-[40px] flex justify-center items-center border border-gray-300 border-l-0 rounded-r-md">
          <img src="/images/Instagram.png" alt="Instagram" />
        </figure>
      </div>
    </div>
  );
};
export default Footer;
