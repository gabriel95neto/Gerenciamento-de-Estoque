import { httpClient } from "../httpClient";
import { ProductDto } from "./createProduct";

export async function getProductById(id: string) {
   const {data} = await httpClient.get<ProductDto>(`/product/${id}`)
   return data;
}
