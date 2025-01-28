import { useLoaderData } from "react-router-dom"
import { Area, AreaChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
  const data =useLoaderData();
//   [
//     {
//         "month": "January",
//         "product1_sales": 1200,
//         "product2_sales": 800
//     },
 
// ]
  console.log(data);
  return (
    <div>Statistics
     <AreaChart width={500} height={400} data={data.sales_data}>

     </AreaChart>


    </div>
  )
}

export default Statistics