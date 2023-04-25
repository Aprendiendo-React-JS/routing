import { Link } from "react-router-dom"

export const Error = () => {
    return (
      <div>
          <h1>Error 404</h1>
          <p>Esta es la pagina de Error</p>
          <Link to="/inicio">Volver al inicio</Link>
      </div>
    )
  }