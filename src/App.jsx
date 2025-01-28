import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import MainLayout from "./layoutes/MainLayout";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";

import GadgetCards from "./components/GadgetCards";
import ProductDetail from "./components/ProductDetail";
 


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
              loader:()=>fetch('../category.json'),
              children:[
                {
                  path:'/',
                  element:<GadgetCards/>,
                  loader:()=>fetch('../gadgetData.json'),
                },
                {
                  path:'/category/:category',
                  element:<GadgetCards/>,
                  loader:()=>fetch('../gadgetData.json'),
                },

              ]
              
            },
            
            {
              path: "/gadget/:product_id",
              element:<ProductDetail/>,
              loader:()=>fetch('../gadgetData.json'),
            },
            {
              path: "/dashboard",
              element: <Dashboard/>,
              loader:()=>fetch('../gadgetData.json'),
            },
            {
              path: "/statistics",
              element: <Statistics/>,
              loader:()=>fetch('../productSelsData.json'),
            },
          ]
       } ,


      
    ]);
    return <RouterProvider router={router}/>;
  };



export default App;
