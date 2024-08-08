import { httpClient } from "../httpClient";
import { Product } from "../../models/product";

export async function getAll() {
   const {data} = await httpClient.get<Product[]>("/product")
   return data;
}
