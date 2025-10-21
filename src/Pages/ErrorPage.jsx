import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-[0px_30px] md:py-[30px] xl:py-[40px] mx-[10px]">
      <div className="w-[225px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
        <img  src="/image/error-404.png" />
      </div>
      <div className="pt-4">
        <h1 className="text-[30px] sm:text-[35px] md:text-[42px] xl:text-[48px] font-bold text-[#001931] text-center pb-4">
          Oops, page not found!
        </h1>
        <p className="text-[16px] md:text-[18px] xl:text-[20px] text-[#627382] text-center pb-[20px] md:pb-[30px] xl:pb-[40px]">
          The page you are looking for is not available.
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

export default ErrorPage;
