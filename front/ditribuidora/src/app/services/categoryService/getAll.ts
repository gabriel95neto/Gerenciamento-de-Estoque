import { httpClient } from "../httpClient";
import { Category } from "../../models/category";

export async function getAll() {
   const {data} = await httpClient.get<Category[]>("/categories")
   return data;
}
