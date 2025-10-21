import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="flex flex-col md:gap-4 justify-center items-center py-[0px_30px] md:py-[30px] xl:py-[40px]">
      <div>
        <img src="/image/App-Error.png" />
      </div>
      <div className="pt-4">
        <h1 className="text-[36px] sm:text-[38px] md:text-[42px] xl:text-[48px] font-bold text-[#001931] text-center pb-4">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#627382] text-center pb-[20px] md:pb-[30px] xl:pb-[40px]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="text-center">
          <Link
            to="/"
            className="btn px-8 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppError;
