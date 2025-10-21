

const Reviews = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white ">
      <div className=" p-[20px_10px] sm:p-[20px_40px] md:p-[30px_60px] lg:p-[40px_100px] xl:p-[80px_200px] 2xl:p-[80px_300px]">
        <div className="text-center">
          <h1 className="font-bold text-[34px] md:text-[36px] lg:text-[40px] xl:text-[48px]">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="text-center flex  flex-col sm:flex-row sm:justify-between gap-8 sm:gap-6 pt-[30px] md:pt-[30px] lg:pt-[40px] ">
          <div>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">Total Downloads</p>
            <h1 className="font-extrabold text-[34px] md:text-[42px] lg:text-[52px] xl:text-[64px]">29.6M</h1>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">21% more than last month</p>
          </div>
          <div>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">Total Reviews</p>
            <h1 className="font-extrabold text-[34px] md:text-[42px] lg:text-[52px] xl:text-[64px]">906K</h1>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">46% more than last month</p>
          </div>
          <div>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">Active Apps</p>
            <h1 className="font-extrabold text-[34px] md:text-[42px] lg:text-[52px] xl:text-[64px]">132+</h1>
            <p className="opacity-[0.8] text-[14px] lg:text-[16px]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
