import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getProductById, updateProduct } from "../services/ProductService";
import { Product } from "../types";

const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  let error = "";

  if (Object.values(data).includes("")) {
    error = "All fields are required";
  }

  if (error) {
    return error;
  }

  if (params?.id) {
    await updateProduct(data, params?.id);
    return redirect("/");
  }
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (params?.id) {
    const product = await getProductById(params.id);

    if (!product) {
      throw new Response("", { status: 404, statusText: "Product not found" });
    }
    return product;
  }
}

const EditProduct = () => {
  const error = useActionData() as string;

  const product = useLoaderData() as Product;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Edit Product</h2>

        <Link to="/">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Poducts
          </button>
        </Link>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
            defaultValue={product.price}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Disponibilidad:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product?.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
};

export default EditProduct;
