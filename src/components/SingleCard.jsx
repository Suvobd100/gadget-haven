const SingleCard = ({ gadget }) => {
  const { product_title, price, product_image } = gadget || {};



  return (
    <div>
      <h2>{product_title}</h2>
    </div>
  );
};

export default SingleCard;
