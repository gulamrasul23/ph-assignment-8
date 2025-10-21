const Banner = () => {
  return (
    <div className="p-[80px_80px_0_80px]">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-[72px] font-bold text-center leading-[95px]">
            We Build <br />{" "}
            <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[20px] text-[#627382] text-center py-[16px_40px]">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-4 mb-[40px]">
            <div
              onClick={() => window.open("https://play.google.com")}
              className="flex justify-center items-center shadow-sm transform transition duration-400 hover:scale-102 "
            >
              <button className="flex justify-center items-center p-[10px_21.5px] border-1 border-[#e5e5e5] rounded-[5px] cursor-pointer hover:bg-gray-200">
                <img
                  className="w-[25px] mr-2"
                  src="./image/play-logo-png.png"
                  alt=""
                />
                <h2 className=" text-[20px] font-semibold text-[#001931] border-[#e5e5e5]">
                  Google Play
                </h2>
              </button>
            </div>
            <div
              onClick={() => window.open("https://www.apple.com/app-store")}
              className="flex justify-center items-center shadow-sm transform transition duration-400 hover:scale-102"
            >
              <button className="flex justify-center items-center p-[10px_21.5px] border-1 border-[#e5e5e5] rounded-[5px] cursor-pointer hover:bg-gray-200">
                <img
                  className="w-[25px] mr-2"
                  src="./image/app-store-logo.png"
                  alt=""
                />
                <h2 className=" text-[20px] font-semibold text-[#001931] border-[#e5e5e5]">
                  App Store
                </h2>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="./image/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
