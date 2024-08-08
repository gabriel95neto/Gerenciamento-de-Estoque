import { useQuery } from "@tanstack/react-query";
import { supplierService } from "../app/services/supplierService";


export function useSuppliers() {

  const { data, error, isFetching } = useQuery({
    queryKey: ["supplier", "getAll"],
    queryFn: () => supplierService.getAllSupplier(),
    staleTime: 1000 * 60 * 30,
  });

  return {
    data,
    isFetching,
    error
  };
}
