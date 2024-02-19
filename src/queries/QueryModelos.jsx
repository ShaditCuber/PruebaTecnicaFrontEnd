import clienteAxios from "../util/clientAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const fetchModelos = async (marca_id = 1) => {
    if (marca_id == 0) {
        return [];
    }
    const { data } = await clienteAxios.get(`/modelos/byMarca?marca_id=${marca_id}`);
    return data;
}



export const useFetchModelos = (marca_id = 1) => {
    return useQuery({
        queryKey: ["modelos", marca_id],
        queryFn: () => fetchModelos(marca_id),
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}

