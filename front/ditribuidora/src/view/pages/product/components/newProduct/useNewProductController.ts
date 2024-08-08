import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "../../../../../app/services/categoryService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productService } from "../../../../../app/services/productService";
import toast from "react-hot-toast";
import { ProductDto } from "../../../../../app/services/productService/createProduct";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSuppliers } from "../../../../../hooks/useCategoriesAndSuppliers";

export function useNewProductController() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const schema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        categoryId: z.string({message: "Categoria é obrigatório"}).uuid("Id inválido"),
        description: z.string().min(1, 'A descrição é obrigatória'),
        price: z.preprocess(val => Number(val), z.number({message: "Só é permitido números"}).positive("O preço tem que ser um número positivo")),
        quantityStock: z.preprocess(val => Number(val), z.number().positive("O estoque tem que ser um número positivo")),
        supplierId: z.string().uuid("Id inválido")
    })

    type FormData = z.infer<typeof schema>

    const { handleSubmit: hookFormHandleSubmit, register, control, formState: { errors} } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const { data: dataCategory} = useQuery({
        queryKey: ["category", "getAll"],
        staleTime: Infinity,
        queryFn: () => categoryService.getAll()
    })

    const { data: dataSupplier} = useSuppliers();

    const { mutateAsync} = useMutation({
        mutationFn: async (data: ProductDto) => { return productService.createProduct(data)},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["all", "products"] })
        }
    })

    const handleSubmit = hookFormHandleSubmit(async(data) => {
        try {
        await mutateAsync(data);
        toast.success("Produto criado com sucesso")
        navigate("/")
        } catch {
        toast.error("Error ao criar produto");
        }
    })

    return {
        errors,
        handleSubmit,
        register,
        control,
        dataCategory,
        dataSupplier
    }
}
