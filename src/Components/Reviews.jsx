

const Reviews = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white ">
      <div className="p-[80px_300px]">
        <div className="text-center">
          <h1 className="font-bold text-[48px]">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="text-center flex justify-between gap-6 pt-[40px] ">
          <div className="">
            <p className="opacity-[0.8]">Total Downloads</p>
            <h1 className="font-extrabold text-[64px]">29.6M</h1>
            <p className="opacity-[0.8]">21% more than last month</p>
          </div>
          <div>
            <p className="opacity-[0.8]">Total Reviews</p>
            <h1 className="font-extrabold text-[64px]">906K</h1>
            <p className="opacity-[0.8]">46% more than last month</p>
          </div>
          <div>
            <p className="opacity-[0.8]">Active Apps</p>
            <h1 className="font-extrabold text-[64px]">132+</h1>
            <p className="opacity-[0.8]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
