import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";
import axios from "axios";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      console.log(result);
      const { data } = await axios(url, {
        method: "POST",
        data: result.output,
      });
    } else {
      throw new Error("Invalid Product Data");
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
