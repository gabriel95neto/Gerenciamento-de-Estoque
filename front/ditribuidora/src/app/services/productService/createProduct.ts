import { httpClient } from "../httpClient";
import { Product } from "../../models/product";

export interface ProductDto {
   name: string
   categoryId: string
   description: string
   price: number
   quantityStock: number
   supplierId: string
 }
export async function createProduct(params: ProductDto) {
   const {data} = await httpClient.post<Product>("/product", params)
   return data;
}
