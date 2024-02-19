function DispositivosGrid({ dispositivos }) {
    return (
        <div className="mt-8 overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Marca
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Modelo
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bodega
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dispositivos.map((dispositivo) => (
                                <tr key={dispositivo.dispositivo_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dispositivo.dispositivo_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispositivo.nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispositivo.marca_nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispositivo.modelo_nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispositivo.bodega_nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DispositivosGrid;
