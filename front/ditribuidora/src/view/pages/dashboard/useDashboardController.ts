import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { productService } from "../../../app/services/productService"
import { useNavigate } from "react-router-dom"
import { useSuppliers } from "../../../hooks/useCategoriesAndSuppliers";
import { useState } from "react";
import toast from "react-hot-toast";

export function useDashBoardController() {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const handleClickOpen = (id: string) => {
        setSelectedProductId(id);
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    const navigate = useNavigate();

    const handleNewProduct = () => {
        navigate("produto/novo")
    }

    const {data, isFetching} = useQuery({
        queryKey: ["all", "products"],
        queryFn: async () => { return productService.getAll()},
        staleTime: Infinity
    })

    const { mutateAsync} = useMutation({
        mutationFn: async (id : string) => { return productService.deleteProduct(id)},
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["all", "products"]
            })
        }
    })

    async function removeProduct() {
        if (selectedProductId) {
            await mutateAsync(selectedProductId)
        }
        toast.success("Produto removido com sucesso")
        handleClose();
    }

    const { data: dataSupplier} = useSuppliers();

    return {
        handleNewProduct,
        data,
        isFetching,
        dataSupplier,
        handleClickOpen,
        open,
        handleClose,
        removeProduct
    }
}

