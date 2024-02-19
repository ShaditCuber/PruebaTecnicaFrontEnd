// App.jsx
import React, { useState } from 'react';
import ComboBox from './components/ComboBox';
import DispositivosGrid from './components/Grid';
import { useFetchModelos } from './queries/QueryModelos';
import { useFetchMarcas } from './queries/QueryMarcas';
import { useFetchBodegas } from './queries/QueryBodegas';
import { useFetchDispositivos } from './queries/QueryDispositivos';
import Loader from './components/Loader';

export default function App() {

  const [selectedBodega, setSelectedBodega] = useState(0);
  const [selectedMarca, setSelectedMarca] = useState(0);
  const [selectedModelo, setSelectedModelo] = useState(0);

  const { data: bodegas, isLoading: isLoadingBodegas } = useFetchBodegas();
  const { data: marcas, isLoading: isLoadingMarcas } = useFetchMarcas();
  const { data: modelos, isLoading } = useFetchModelos(selectedMarca);
  const { data: dispositivos, isLoading: isLoadingDispositivos } = useFetchDispositivos(selectedBodega, selectedMarca, selectedModelo);


  const handleBodegaChange = (e) => {
    setSelectedMarca(0);
    setSelectedModelo(0);
    setSelectedBodega(e.target.value);
  };

  const handleMarcaChange = (e) => {
    setSelectedBodega(0);
    setSelectedModelo(0);
    setSelectedMarca(e.target.value);
  };

  const handleModeloChange = (e) => {
    setSelectedBodega(0);
    setSelectedModelo(e.target.value);
  };

  if (isLoadingMarcas || isLoadingBodegas || isLoadingDispositivos || isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-8">
      <ComboBox label="Bodegas" items={bodegas} onChange={handleBodegaChange} displayValue='nombre' keyValue='bodega_id' selectedValue={selectedBodega} />
      <ComboBox label="Marcas" items={marcas} onChange={handleMarcaChange} displayValue='nombre' keyValue='marca_id' selectedValue={selectedMarca} />
      <ComboBox label="Modelos" items={modelos} onChange={handleModeloChange} displayValue='modelo_nombre' keyValue='modelo_id' selectedValue={selectedModelo} />
      <DispositivosGrid dispositivos={dispositivos} />
    </div>
  );
}


