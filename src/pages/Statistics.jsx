import { useLoaderData } from "react-router-dom";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const { month, product1_sales } = data.sales_data;
  //   [
  //     {
  //         "month": "January",
  //         "product1_sales": 1200,
  //         "product2_sales": 800
  //     },

  // ]
  // console.log(data);
  return (
    <div className="flex justify-center items-center bg-stone-200">
      {/* Statistics */}
      {/* <ResponsiveContainer width={"50%"} height={"50%"}> */}

      <div className="grid grid-cols-1">
        <div className="flex justify-center items-center">
          <h2 className="text-purple-500 font-bold mb-6 underline">
            Sample Line Chart By Fake jsonData
          </h2>
        </div>

        <AreaChart width={500} height={400} data={data.sales_data}>
          <YAxis />
          <XAxis dataKey={"name"} />
          <CartesianGrid strokeDasharray={"5 5"} />
          <Tooltip />
          <Legend />

          <Area
            type={"monotone"}
            dataKey={"product1_sales"}
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={"1"}
          />

          <Area
            type={"monotone"}
            dataKey={"product2_sales"}
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId={"1"}
          />
        </AreaChart>
      </div>
      {/* </ResponsiveContainer> */}
    </div>
  );
  // const CustomTooltip =({active, payload,label})=>{
  //   if(active && payload && payload.length){
  //     return(
  //       <div className="p-4 bg-slate-600 flex flex-col gap-4 rounded-md">
  //         <p className="text-medium text-lg">
  //           <P className="text-sm text-blue-400">
  //           product1_sales
  //           </P>
  //         </p>

  //       </div>
  //     )
  //   }
  // }
};

export default Statistics;
