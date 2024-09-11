import { Link } from "react-router-dom";

const NewProduct = () => {
  return (
    <div className="flex justify-between">
      <h2 className="text-4xl font-black text-slate-500">
        Create a new Product
      </h2>

      <Link to="/">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Poducts
        </button>
      </Link>
    </div>
  );
};

export default NewProduct;
