import { httpClient } from "../httpClient";

export async function deleteProduct(id: string) {
   await httpClient.delete<void>(`/product/${id}`)
}
