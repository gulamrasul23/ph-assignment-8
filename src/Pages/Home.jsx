import { Link } from "react-router";
import Banner from "../Components/Banner";
import Reviews from "../Components/Reviews";
import AppsCart from "../Components/AppsCart";
import useAllData from "../Hooks/useAllData";

const Home = () => {
  const { appsData } = useAllData();
  const apps1 = appsData.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <Reviews></Reviews>
      <div className="p-[10px] sm:p-[20px] lg:p-[40px] xl:p-[80px]">
        <h1 className="font-bold text-[36px] sm:text-[38px] md:text-[42px] xl:text-[48px] text-center pb-4">
          Trending Apps
        </h1>
        <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#627382] text-center pb-[20px] md:pb-[30px] xl:pb-[40px]">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center pb-[40px]">
          {apps1.map((appData) => (
            <AppsCart key={appData.id} appData={appData}></AppsCart>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/apps"
            className="btn px-8 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
