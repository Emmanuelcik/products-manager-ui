import {
  ActionFunctionArgs,
  Form,
  redirect,
  useFetcher,
  useNavigate,
} from "react-router-dom";
import { Product } from "../types";

import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetails = {
  product: Product;
};

export function action({ params }: ActionFunctionArgs) {
  deleteProduct(params.id);
  return redirect("/");
}
const ProductDetails = ({ product }: Product) => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailable = product.availability;
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method="POST">
          <button
            name="id"
            value={product.id}
            className={`${
              isAvailable ? "text-black" : "text-red-600"
            } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black hover:cursor-pointer `}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() =>
              navigate(`/products/${product.id}/edit`, { state: { product } })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs hover"
          >
            Edit
          </button>
          <Form
            method="POST"
            action={`products/${product.id}/remove`}
            onSubmit={(e) => {
              if (!confirm("Remov?")) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Remove"
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs hover"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
