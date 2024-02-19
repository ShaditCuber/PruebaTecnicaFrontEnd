import clienteAxios from "../util/clientAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";



const fetchDispositivosBy = async (bodega_id = 0, marca_id = 0, modelo_id = 0) => {
    let query = `/dispositivos/by?`;

    if (bodega_id != 0) {
        query += `bodega_id=${bodega_id}&`;
    } else if (modelo_id != 0) {
        query += `modelo_id=${modelo_id}&`;
    } else if (marca_id != 0) {
        query += `marca_id=${marca_id}&`;
    }

    const { data } = await clienteAxios.get(query);
    return data;
}


export const useFetchDispositivos = (bodega_id = 0, marca_id = 0, modelo_id = 0) => {
    return useQuery({
        queryKey: ["dispositivos", bodega_id, marca_id, modelo_id],
        queryFn: () => fetchDispositivosBy(bodega_id, marca_id, modelo_id),
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}

