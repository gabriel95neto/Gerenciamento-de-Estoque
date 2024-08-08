import { Category } from "./category"
import { Supplier } from "./supplier"

export interface Product {
    id: string
    name: string
    category: Category
    description: string
    price: number
    quantityStock: number
    supplier: Supplier
}