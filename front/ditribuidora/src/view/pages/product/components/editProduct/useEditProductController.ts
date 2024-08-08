import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "../../../../../app/services/categoryService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productService } from "../../../../../app/services/productService";
import toast from "react-hot-toast";
import { ProductDto } from "../../../../../app/services/productService/createProduct";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useSuppliers } from "../../../../../hooks/useCategoriesAndSuppliers";

export function useEditProductController() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    const schema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        categoryId: z.string({message: "Categoria é obrigatório"}).uuid("Id inválido"),
        description: z.string().min(1, 'A descrição é obrigatória'),
        price: z.preprocess(val => Number(val), z.number({message: "Só é permitido números"}).positive("O preço tem que ser um número positivo")),
        quantityStock: z.preprocess(val => Number(val), z.number().positive("O estoque tem que ser um número positivo")),
        supplierId: z.string().uuid("Id inválido")
    })

    type FormData = z.infer<typeof schema>

    const { handleSubmit: hookFormHandleSubmit, register, control, reset, setValue, formState: { errors} } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const { data: dataCategory} = useQuery({
        queryKey: ["category", "getAll"],
        staleTime: Infinity,
        queryFn: () => categoryService.getAll()
    })

    function useProductById() {
        return useQuery({
            queryKey: ["product", "byId", id],
            queryFn: () => {
                if (id) {
                    return productService.getProductById(id);
                } else {
                    return Promise.reject("ID is undefined");
                }
            }, 
            enabled: !!id
        });
    }

    const { mutateAsync: mutatePutProduct} = useMutation({
        mutationFn: async (id: string) => { return productService.getProductById(id)},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["all", "products"] })
            toast.success("Produto atualizado com sucesso")
        }
    })

    async function updateProductById(id: string) {
        await mutatePutProduct(id)
    }

    const { data: dataSupplier} = useSuppliers();

    const { mutateAsync} = useMutation({
        mutationFn: async ({id, params}: {id:string, params:ProductDto}) => { return productService.updateProduct(id, params)},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["all", "products"] })
        }
    })

    const handleSubmit = hookFormHandleSubmit(async(data) => {
        try {
            if (!id) {
                toast.error("Id do produto não encotrado")
                return;
            }
            await mutateAsync({ id, params: data });
            toast.success("Produto editado com sucesso")
            navigate("/")
        } catch {
        toast.error("Error ao editar produto");
        }
    })

    return {
        errors,
        handleSubmit,
        register,
        control,
        dataCategory,
        dataSupplier,
        updateProductById,
        useProductById,
        reset,
        setValue
    }
}
