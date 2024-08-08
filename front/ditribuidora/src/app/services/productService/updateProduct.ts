import { httpClient } from "../httpClient";
import { Product } from "../../models/product";
import { ProductDto } from "./createProduct";


export async function updateProduct(id:string, params: ProductDto) {
   const {data} = await httpClient.put<Product>(`/product/${id}`, params)
   return data;
}
