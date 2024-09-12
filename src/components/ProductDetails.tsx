import { useNavigate } from "react-router-dom";
import { Product } from "../types";

import { formatCurrency } from "../utils";

type ProductDetails = {
  product: Product;
};
const ProductDetails = ({ product }: Product) => {
  const navigate = useNavigate();
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {isAvailable ? "Available" : "Unavailable"}
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() =>
              navigate(`/products/${product.id}/edit`, { state: { product } })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs"
          >
            Edit
          </button>
          <button className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs">
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
