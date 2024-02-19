import clienteAxios from "../util/clientAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const fetchBodegas = async () => {
    const { data } = await clienteAxios.get(`/bodegas/all`);
    return data;
}


export const useFetchBodegas = () => {
    return useQuery({
        queryKey: ["bodegas"],
        queryFn: fetchBodegas,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}
