import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';

import Busqueda from './Componentes/Busqueda.jsx';
import Cards from './Componentes/Cards.jsx';



function App() {
  const [personajes, setPersonajes] = useState([])
  const [listaFiltrada, setListaFiltrada] = useState([])

  return (
    <div className="App">
      <Busqueda personajes={personajes} setListaFiltrada={setListaFiltrada} listaFiltrada={listaFiltrada}></Busqueda>
      <Cards personajes={personajes} setPersonajes={setPersonajes} listaFiltrada={listaFiltrada} setListaFiltrada={setListaFiltrada}></Cards>

    </div>
  );
}

export default App;
