import { Link } from "react-router-dom";

const SingleCard = ({ gadget }) => {
  const { product_title, price, product_image,product_id } = gadget || {};

  return (
    <div className="flex p-6">
      {
        <Link to={`/gadget/${product_id}`}>
          <div className="card card-compact bg-base-100 w-56 shadow-xl mb-12 gap-12 items-center">
            <figure className="w-full h-48 overflow-hidden p-4 mt-8">
              <img src={product_image} alt="Card Image" />
            </figure>
            <div className="card-body">
              <div className="grid grid-cols-1">
                 <h2 className="text-xl font-bold">{product_title}</h2>
                 
              </div>
              <div className="grid grid-cols-1">
                 
                 <h2 className="text-xl">{price}</h2>
              </div>
              <button className="btn btn-outline rounded-full"> View Detail</button>
            </div>
          </div>
          
        </Link>
        
      }
    </div>
  );
};

export default SingleCard;
