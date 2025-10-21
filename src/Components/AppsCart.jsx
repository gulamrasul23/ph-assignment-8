import { Download } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const AppsCart = ({ appData }) => {
  const data = appData;
  return (
    <Link to={`/app/${data.id}`} className="cursor-pointer">
      <div className="p-4 rounded-[8px] bg-white shadow-xl  transform transition duration-400 hover:scale-102 hover:shadow-lg ">
        <div className="pb-4">
          <img className="rounded-[30px] max-h-[330px] pb-4" src={data.image} />
          <h2 className="text-[20px] text-[#001931] font-medium ">
            {data.title}
          </h2>
        </div>
        <div className="flex justify-between font-medium">
          <span className="flex gap-2 p-[6px_10px] bg-[#F1F5E8] rounded-[5px] text-[#00D390]">
            <Download className="w-4"></Download> {data.downloads} M
          </span>
          <span className="bg-[#FFF0E1] text-[#FF8811] p-[6px_10px] rounded-[5px]">
            <FontAwesomeIcon icon={faStar} className="pr-2" />
            {data.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCart;
