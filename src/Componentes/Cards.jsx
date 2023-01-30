import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({setPersonajes, listaFiltrada, setListaFiltrada}) => {
  

  async function consultarDatosApi() {
    const res = await fetch("https://harry-potter-api.onrender.com/personajes")
    const data = await res.json()
    setPersonajes(data)
    setListaFiltrada(data)


  }

  useEffect(() => {
    consultarDatosApi();
  }, [])


  return (
    <div className='row container mx-auto gap-3 my-5 justify-content-center'>
      {
        listaFiltrada.map(personaje => (
          <Card key={personaje.id} id='fondoTarjeta' className='col-12 col-sm-6 col-md-4 col-xl-3' >
            <Card.Img className='p-2 container rounded-4 border border-dark' style={{ width: '250px' }} variant="top" src={personaje.imagen} />
            <Card.Body>
              <Card.Title className='text-secondary'><small>Nombre:</small> <br /> {personaje.personaje} </Card.Title>
              <Card.Text className='text-secondary'>
                <br />
                <small>Casa De Hogwarts:</small> <br /> <strong>{personaje.casaDeHogwarts}</strong>
                <br />
                <br />
                <small>Actor:</small> <br /> <strong>{personaje.interpretado_por}</strong>
              </Card.Text>

            </Card.Body>
          </Card>

        ))
      }

    </div>
  )
}

export default Cards