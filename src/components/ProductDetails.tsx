import { Product } from "../types";

import { formatCurrency } from "../utils";

type ProductDetails = {
  product: Product;
};
const ProductDetails = ({ product }: Product) => {
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
      <td className="p-3 text-lg text-gray-800 "></td>
    </tr>
  );
};

export default ProductDetails;
