import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layoutes/MainLayout";


  const App = () => {
    const router = createBrowserRouter([

       {
          path:'/',
          element:<MainLayout/>,
          children:[
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/product",
              element: <ProductDetail />,
            },
            {
              path: "/dashboard",
              element: <Dashboard/>
            },
          ]
       } ,


      
    ]);
    return <RouterProvider router={router}/>;
  };



export default App;
