const Navigation = () => {
  return (
    <div className="flex items-center">
      <ul className="hidden md:flex items-center text-white text-[15px] space-r-[30px] menu">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Video Tour</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <button
        className="font-bold text-[14px] leading-none tracking-[1px] 
        p-[13px_20px] bg-white rounded-[6px] 
        transition-transform duration-200 
        hover:scale-105"
      >
        GET IT FREE
      </button>
    </div>
  );
};

export default Navigation;
