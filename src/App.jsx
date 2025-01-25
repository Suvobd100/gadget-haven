import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layoutes/MainLayout";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
import CategoryCards from "./components/CategoryCards";
 


  const App = () => {
    const router = createBrowserRouter([

       {
          path:'/',
          element:<MainLayout/>,
          errorElement:<Error/>,
          children:[
            {
              path: "/",
              element: <Home />,
              children:[
                {
                  path:'/',
                  element:<CategoryCards/>,
                  loader:()=>fetch('../public/category.json')
                }
              ]
            },
            {
              path: "/product",
              element: <ProductDetail />,
            },
            {
              path: "/dashboard",
              element: <Dashboard/>
            },
            {
              path: "/statistics",
              element: <Statistics/>
            },
          ]
       } ,


      
    ]);
    return <RouterProvider router={router}/>;
  };



export default App;
