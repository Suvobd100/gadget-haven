import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { product_id } = useParams();
  const allProductData = useLoaderData();
  console.log(allProductData);

  return (
    <div>
      ProductDetail
      <h2>Product id is:</h2>
      {product_id}
    </div>
  );
};

export default ProductDetail;
