import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAllData from "../Hooks/useAllData";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import AppError from "./AppError";
import { toast } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { appsData } = useAllData();
  const [install, setInstall] = useState(false);

  const appDetails = appsData?.find((data) => String(data.id) === id);

  useEffect(() => {
    if (!appDetails) return;
    const storedItems = JSON.parse(localStorage.getItem("app")) || [];
    const isDuplicate = storedItems.some((item) => item.id === appDetails.id);
    setInstall(isDuplicate);
  }, [appDetails]);

  if (!appDetails) return <AppError></AppError>;

  const onClickHandle = () => {
    const storedItems = JSON.parse(localStorage.getItem("app"));
    let newStoredItems = [];
    if (storedItems) {
      const isDuplicate = storedItems.some((item) => item.id === appDetails.id);
      if (isDuplicate) {
        // toast("Duplicate", {
        //   position: "top-center",
        //   pauseOnHover: true,
        // });
        setInstall(true);
        return;
      }

      newStoredItems = [...storedItems, appDetails];
    } else {
      newStoredItems.push(appDetails);
    }

    localStorage.setItem("app", JSON.stringify(newStoredItems));
    setInstall(true);

    {
      if (!install) {
        toast.success(`Yahoo..!! ${appDetails.title} Installed Successfully`, {
          position: "top-center",
          pauseOnHover: true,
        });
      }
    }
  };

  return (
    <div className="p-[80px]">
      <div className="flex gap-12 border-b-1 border-[#a7adb457] pb-[40px]">
        <img className="max-h-[360px] shadow-md" src={appDetails?.image} />
        <div className="w-full">
          <div className="border-b-2 border-[#a7adb457] pb-[30px] ">
            <h1 className="text-[32px] font-bold text-[#001931] pb-[8px]">
              {appDetails?.title}
            </h1>
            <p className="text-[20px]">
              Developed by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-semibold">
                {appDetails?.companyName}
              </span>
            </p>
          </div>
          <div className="py-[30px] flex items-center gap-16">
            <div>
              <img src="/image/icon-downloads.png" alt="" />
              <p className="text-[#001931] pt-[8px]">Downloads</p>
              <h2 className="text-[40px] font-extrabold text-[#001931]  leading-12">
                {appDetails?.downloads} M
              </h2>
            </div>
            <div>
              <img src="/image/icon-ratings.png" alt="" />
              <p className="text-[#001931] pt-[8px]">Average Ratings</p>
              <h2 className="text-[40px] font-extrabold text-[#001931]  leading-12">
                {appDetails?.ratingAvg}{" "}
              </h2>
            </div>
            <div>
              <img src="/image/icon-review.png" alt="" />
              <p className="text-[#001931] pt-[8px]">Total Reviews</p>
              <h2 className="text-[40px] font-extrabold text-[#001931]  leading-12">
                {appDetails?.reviews} K
              </h2>
            </div>
          </div>
          <button
            onClick={onClickHandle}
            className={
              install
                ? "bg-[#00D390] text-white text-[20px] font-semibold p-[14px_20px] rounded-[5px]"
                : "bg-[#00D390] text-white text-[20px] font-semibold p-[14px_20px] rounded-[5px] cursor-pointer transform transition duration-350 hover:scale-103 hover:bg-[#00b97f]"
            }
          >
            {install ? "Installed" : `Install Now (${appDetails?.size} MB)`}
          </button>
        </div>
      </div>
      <div className="py-[40px] border-b-1 border-[#a7adb457]">
        <h1 className="text-[24px] font-semibold text-[#001931]">Ratings</h1>
        <div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart layout="vertical" data={appDetails?.ratings}>
              <XAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                type="number"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={20}
                type="category"
                dataKey="name"
                reversed
              />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="py-[40px] border-b-1 border-[#a7adb457]">
        <h1 className="text-[24px] font-semibold text-[#001931] pb-[24px]">
          Description
        </h1>
        <p>{appDetails?.description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
