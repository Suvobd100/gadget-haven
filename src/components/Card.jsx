import PropTypes from "prop-types";
import cancelIcon from "../assets/image/icons8-cancel-50.png"

const Card = ({ cartData }) => {
  const { product_image, product_title, description, price } = cartData;

  return (
    <div>
      {
        <div className="card card-compact bg-base-100 w-[800px] h-[250px] shadow-xl rounded-2xl">
            <img className="absolute w-6 right-[20px] top-[20px]" src={cancelIcon} alt="" />
          <div className="flex p-4 items-center justify-center">
            <figure className="w-[200px] h-[124px] -mt-4">
              <img
                className="bg-stone-100 p-2 rounded-2xl"
                src={product_image}
                alt="product_image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product_title}</h2>
              
              <div className="flex gap-2">
                <p className="font-bold">Description:</p>
                
                <p>{description}</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Price: <span>$</span></span>
                 <p>{price}</p>
              </div>
              <div className="card-actions justify-start">
                <button className="btn bg-purple-400 rounded-3xl text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
Card.propTypes = {
  cartData: PropTypes.object,
};
export default Card;
