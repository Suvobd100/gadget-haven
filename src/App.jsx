import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layoutes/MainLayout";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
import CategoryCards from "./components/CategoryCards";
import CardContainer from "./components/CardContainer";
 


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
                  element:<CardContainer/>,
                  loader: ()=> fetch('../gadgetData.json'),
                  // loader: async () => {
                  //   const categoryResponse = await fetch('../public/category.json');
                  //   const gadgetResponse = await fetch('../public/gadgetData.json');
                    
                  //   const categoryData = await categoryResponse.json();
                  //   const gadgetData = await gadgetResponse.json();
            
                  //   return { categoryData, gadgetData };
                  // },
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
