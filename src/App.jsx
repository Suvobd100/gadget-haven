import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layoutes/MainLayout";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
import CategoryCards from "./components/CategoryCards-not-use";
import CardContainer from "./components/CardContainer-not-use";
import GadgetCards from "./components/GadgetCards";
 


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
