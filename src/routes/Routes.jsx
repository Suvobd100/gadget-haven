import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
// import ProductCard from "../components/ProductCard";

const routes = createBrowserRouter([
  {
    path: "/",
    Element: <MainLayout />,
    
  },
]);

export default routes;