import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Download } from "lucide-react";
import { useState } from "react";
import { loadStoredApps } from "../utils/localStorage";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Installation = () => {
  const [installAppsList, setInstallAppsList] = useState(() =>
    loadStoredApps()
  );
  const [sortOrder, setSortOrder] = useState("none");

  const sortItems = (() => {
    if (sortOrder === "download-asc") {
      return [...installAppsList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...installAppsList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installAppsList;
    }
  })();

  const uninstallHandle = (app) => {
    const storedApps = JSON.parse(localStorage.getItem("app"));
    let remainUninstallApps = storedApps.filter((apps) => apps.id !== app.id);
    setInstallAppsList(remainUninstallApps);
    localStorage.setItem("app", JSON.stringify(remainUninstallApps));
    toast(`🗑️ ${app.title} Un-installed from your Device`, {
      position: "top-center",
      pauseOnHover: true,
    });
  };

  return (
    <div className="px-[10px] sm:px-[20px] lg:px-[40px] xl:px-[80px]">
      <div className="pt-[10px] sm:pt-[20px] lg:pt-[40px] xl:pt-[80px]">
        <div>
          <h1 className="text-[36px] sm:text-[38px] md:text-[42px] xl:text-[48px] font-bold text-[#001931] text-center pb-4">
            Your Installed Apps
          </h1>
          <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#627382] text-center pb-[20px] md:pb-[30px] xl:pb-[40px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center pb-4 ">
          <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#001931]">
            ({installAppsList.length})Apps Found
          </p>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select w-[145px]"
          >
            <option value="none" disabled={true}>
              Sort By Size
            </option>
            <option value="download-asc">Low-High</option>
            <option value="download-desc">High-Low</option>
          </select>
        </div>
        <div>
          {installAppsList.length > 0 ? (
            sortItems.map((app) => (
              <div key={app.id} className=" pb-4">
                <div className="p-[10px] sm:p-[14px] lg:p-[16px] bg-white flex justify-between items-center rounded-[5px]">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      className=" w-[60px] sm:w-[70px] lg:w-[80px] rounded-[10px] "
                      src={app.image}
                    />
                    <div>
                      <h2 className="text-[#001931] font-medium text-[16px] sm:text-[18px] lg:text-[20px] pb-[10px] sm:pb-[14px] lg:pb-[16px]">
                        {app.title}
                      </h2>
                      <div className="flex items-center gap-[14px] sm:gap-[16px]">
                        <span className="flex gap-1 sm:gap-2 text-[#00D390] font-medium text-[14px] sm:text-[16px]">
                          <Download className=" w-[14px] sm:w-4"></Download>
                          {app.downloads} M
                        </span>
                        <span className=" text-[#FF8811] font-medium text-[14px] sm:text-[16px]">
                          <FontAwesomeIcon icon={faStar} className=" text-[14px] sm:text-[16px] pr-1 sm:pr-2" />
                          {app.ratingAvg}
                        </span>
                        <span className="font-regular text-[#627382] text-[14px] sm:text-[16px]">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => uninstallHandle(app)}
                      className="bg-[#00D390] text-white font-semibold text-[14px] sm:text-[16px] p-[8px_12px] sm:p-[12px_16px] rounded-[5px] cursor-pointer transform transition duration-350 hover:scale-103 hover:bg-[#00b97f]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-[10px] sm:p-[20px] lg:p-[40px] xl:p-[80px]">
              <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] text-center pb-1 text-gray-600">
                NO DATA
              </h1>
              <p className="text-[18px] text-[#627382] text-center pb-[25px] sm:pb-[30px] lg:pb-[35px] xl:pb-[40px]">
                There in no install data here.
              </p>
              <div className="text-center">
                <Link
                  to="/apps"
                  className="btn px-8 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"
                >
                  Go Back
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
