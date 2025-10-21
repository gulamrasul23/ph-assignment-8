import { useEffect, useState } from "react";
import AppsCart from "../Components/AppsCart";
import AppError from "./AppError";
import useAllData from "../Hooks/useAllData";
import { Atom } from "react-loading-indicators";

const Apps = () => {
  const { appsData } = useAllData();

  const [showApps, setShowApps] = useState([]);
  const [appCount, setAppCount] = useState(0);
  const [appName, setAppName] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    if (!appsData) return;
    setSearchLoading(true);
    const timer = setTimeout(() => {
      const result = appsData.filter((apps) =>
        apps.title.toLowerCase().includes(appName.trim().toLowerCase())
      );
      setShowApps(result);
      setSearchLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [appName, appsData]);
  useEffect(() => {
    setAppCount(showApps.length);
  }, [showApps]);
  return (
    <div className="px-[80px]">
      <div className="pt-[80px]">
        <div>
          <h1 className="text-[48px] font-bold text-[#001931] text-center pb-4">
            Our All Applications
          </h1>
          <p className="text-[20px] text-[#627382] text-center pb-[40px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center pb-4 ">
          <p className="text-[24px] font-semibold text-[#001931]">
            ({appCount})Apps Found
          </p>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search Apps"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
            />
          </label>
        </div>
        {searchLoading ? (
          <div className="flex items-center justify-center pt-[100px]">
            <Atom
              className=""
              color="#2700fa"
              size="large"
              text=""
              textColor=""
            />
          </div>
        ) : appCount > 0 ? (
          <div className="grid grid-cols-4 gap-4 place-items-center pb-[40px]">
            {showApps.map((appData) => (
              <AppsCart
                key={appData.id}
                appData={appData}
                appCount={appCount}
              ></AppsCart>
            ))}
          </div>
        ) : (
          <AppError></AppError>
        )}
      </div>
    </div>
  );
};

export default Apps;
