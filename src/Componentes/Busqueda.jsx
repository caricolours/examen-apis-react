import React, { useState } from 'react'
import { Button, Navbar } from 'react-bootstrap';
import imagenPrincipal from "../assets/navv2.jpg";
import imagenLogo from "../assets/harry-potter-logo.png";


const Busqueda = ({ personajes, setListaFiltrada, listaFiltrada }) => {


// filtra elementos en busqueda input
  const filtrarElementos = (valorCaja) => {
    const nuevoArreglo = personajes.filter((personaje) => {
      if (personaje) {
        return personaje.personaje.toLowerCase().includes(valorCaja) || personaje.casaDeHogwarts.toLowerCase().includes(valorCaja) || personaje.interpretado_por.toLowerCase().includes(valorCaja)
      } else {
        return personajes
      }

    })
    setListaFiltrada(nuevoArreglo);
  }
//ordenar pesonjes en el select
  const ordenarPersonajes = (tipoOrden) => {
    let listaOrdenada = '';
    if (tipoOrden === 'az') {
      listaOrdenada = listaFiltrada.sort((itemA, itemB) => {
        return itemA.personaje.localeCompare(itemB.personaje);
      });
      setListaFiltrada([...listaOrdenada]);
    } else if(tipoOrden === 'oo') {
setListaFiltrada([...personajes])
console.log(personajes);
    }

  }

  return (
    <div>
      <img src={imagenPrincipal} alt="" style={{ width: '1500px' }} />
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <img style={{ width: '150px' }} src={imagenLogo} />
          <a className="text-white navbar-brand">Personajes Saga Harry Potter</a>
          <form className="d-flex">
            <input onChange={(e) => filtrarElementos(e.target.value)} className="form-control me-2" type="search" placeholder="Buscar Personaje" aria-label="Buscar" />
            <button className="btn btn-light" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      <div>
        <select defaultValue={''} onChange={(e) => ordenarPersonajes(e.target.value)} name="select">
          <option value=''>Selecciona una opción</option>
          <option value="az">Ordenar A-Z</option>
          <option value="oo">Orden original</option>
        </select>
      </div>

    </div>
  )
}

export default Busqueda