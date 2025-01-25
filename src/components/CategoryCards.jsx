import { useLoaderData } from "react-router-dom";

const CategoryCards = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      CategoryCards
      <div className="flex justify-center items-center">
        <h2>This is category Show Here</h2>
        <div className="grid grid-cols-1 gap-2">
          
         {
            data.map(c=><button className="btn" 
                key={c.category_id}>{c.category}
                </button>)
         }
        </div>
        <div className="grid grid-cols-3 gap-4"></div>
        <div>
          <h2>card1</h2>
        </div>
        <div>
          <h2>card2</h2>
        </div>
        <div>
          <h2>card3</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
