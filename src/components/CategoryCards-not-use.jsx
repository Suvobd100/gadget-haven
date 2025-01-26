import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryCards = () => {
  const { categoryData, gadgetData } = useLoaderData();
  //   console.log(data);
  //   console.log(gadgetData);

  //   clicked category store
  const [category, setCategory] = useState("");
  const handelCategory = (cat) => {
    // console.log(cat);
    setCategory(cat);
  };
  //   console.log(category);

  //   category wise data filter

  const [gadGet, setGadget] = useState([]);

  useEffect(() => {
    const categoryGadget = [...gadgetData].filter(
      (gadGet) => gadGet.category === category
    );

    setGadget(categoryGadget);
  }, [gadgetData, category]);
  console.log(gadGet);

  return (
    <div>
      <div className="flex justify-center items-center">
        <h2>This is category Show Here</h2>
         {/* side start */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              
              <li className="gap-4">
                {categoryData.map((c) => (
                  <button
                    onClick={() => handelCategory(c.category)}
                    className="btn"
                    key={c.category_id}
                  >
                    {c.slug}
                  </button>
                        
                ))}
              </li>
              {/* <div>
            {gadGet.map((item, index) => {
              console.log("Rendering item:", item.product_title); // Logs each product title to the console
              return <div key={index}>{item.product_title}</div>;
            })}
          </div> */}
             
            </ul>
          </div>
        </div>
        {/* side end */}
        {/* card grid shown */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            {gadGet.map((item, index) => {
              console.log("Rendering item:", item.product_title); // Logs each product title to the console
              return <div key={index}>{item.product_title}</div>;
            })}
          </div>
          <div>
            <h2>card2</h2>
          </div>
          <div>
            <h2>card3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
