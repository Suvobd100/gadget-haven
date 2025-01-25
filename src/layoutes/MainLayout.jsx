import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const MainLayout = () => {
  return (
    <div className="">
      
      {/* navbar */}
      <div className="h-16">
        <NavBar />
      </div>
      
      <div className="min-h-[calc(100vh-420px)] py-12 container mx-auto">
        {/* Dynamic Section */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
