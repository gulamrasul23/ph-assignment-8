import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import { Outlet, useLocation } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import useAllData from "../Hooks/useAllData";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import ScrollToTop from "../Components/ScrollToTop";

const RootLayout = () => {
  const { loading, error: errorData } = useAllData();
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => setPageLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    
    <div className="max-w-[1600px] mx-auto">
      <ScrollToTop></ScrollToTop>
      <NavBar></NavBar>
      <main className="min-h-[calc(100vh-372px)] bg-[#F5F5F5]">
        {loading || pageLoading ? (
          <div className="flex items-center justify-center pt-[130px] md:pt-[150px] lg:pt-[175px] xl:pt-[200px]">
            <Atom
              className=""
              color="#2700fa"
              size="large"
              text=""
              textColor=""
            />
          </div>
        ) : errorData ? (
          <ErrorPage error={errorData} />
        ) : (
          <Outlet />
        )}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
