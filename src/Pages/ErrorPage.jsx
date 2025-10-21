import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-[40px]">
      <div>
        <img src="/image/error-404.png" />
      </div>
      <div className="pt-4">
        <h1 className="text-[48px] font-bold text-[#001931] text-center pb-4">
          Oops, page not found!
        </h1>
        <p className="text-[20px] text-[#627382] text-center pb-[40px]">
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
