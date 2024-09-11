import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex justify-between">
      <h2 className="text-4xl font-black text-slate-500">Products</h2>

      <Link to="/product/create">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </Link>

      {/* <div className="flex gap-x-4">
      <Link to="/products/1">
        <div className="p-4 bg-gray-100 hover:bg-gray-200 rounded">
          <h3 className="text-xl font-bold">Product 1</h3>
        </div>
      </Link>
      <Link to="/products/2">
        <div className="p-4 bg-gray-100 hover:bg-gray-200 rounded">
          <h3 className="text-xl font-bold">Product 2</h3>
        </div>
      </Link> */}
    </div>
  );
};

export default Products;
