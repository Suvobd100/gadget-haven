import { useLoaderData,useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    // onClick go new page
    

  const { category } = useParams();
  // load gadget data
  const data = useLoaderData();
  //   filtered category wise data
  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByGadget = [...data].filter(
        (gadget) => gadget.category == category
      );
      setGadget(filterByGadget);
    } else {
      setGadget(data.slice(0,6));
    }
  }, [category, data]);

//   console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 p-4
     justify-center items-center">
      {gadget.map((item) => (
        <SingleCard key={item.product_id} gadget={item} />
      ))}
      
    </div>
    
  );
};

export default GadgetCards;
