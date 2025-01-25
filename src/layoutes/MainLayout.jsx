import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <div className="h-16">
        <NavBar />
      </div>

      <div className="min-h-[calc(100vh-170px)] py-12 container mx-auto">
        {/* Dynamic Section */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
