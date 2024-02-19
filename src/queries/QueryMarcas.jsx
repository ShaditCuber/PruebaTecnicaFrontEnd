import clienteAxios from "../util/clientAxios";
import { useQuery } from "@tanstack/react-query";



const fetchMarcas = async () => {
    const { data } = await clienteAxios.get(`/marcas/all`);
    return data;
}

export const useFetchMarcas = () => {
    return useQuery({
        queryKey: ["marcas"],
        queryFn: fetchMarcas,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}   