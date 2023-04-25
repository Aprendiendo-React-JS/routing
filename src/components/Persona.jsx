import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    const parametros = useParams()

    console.log(parametros)

    // Hook useNavigate
    const navigate = useNavigate()

    const enviarDatos = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value
        let apellido = e.target.apellido.value;

        navigate(`/persona/${nombre}/${apellido}`)
    }

  return (
    <div>
        <h1>Pagina de Persona</h1>
        <p>Esta es la pagina de Persona {parametros.nombre}</p>

        <form onSubmit={enviarDatos}>
            <input type="text" name='nombre' placeholder="Nombre" />
            <input type="text" name="apellido" placeholder="Apellido" />
            <input type="submit" name='enviar' value="Enviar" />
        </form>
    </div>

  )
}
