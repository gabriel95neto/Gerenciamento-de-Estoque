import { httpClient } from "../httpClient";
import { Supplier } from "../../models/supplier";

export async function getAllSupplier() {
   const {data} = await httpClient.get<Supplier[]>("/supplier")
   return data;
}
