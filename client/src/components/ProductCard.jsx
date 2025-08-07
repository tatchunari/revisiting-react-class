import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductCard(props) {
  const { imgSrc, productName, productPrice} = props;
  return (
    <div className="bg-white p-4 shadow-md">
      <img
        src={imgSrc}
        alt={productName}
        className="w-full mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">
        {productName}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{productPrice}</p>
        <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
