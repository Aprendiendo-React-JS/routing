import { NavLink, Outlet } from "react-router-dom"

export const PanelControl = () => {
    return (
      <div>
          <h1>Panel de Control</h1>
          <p>Elige una de estas opciones:</p>
          <nav>
            <ul>
                <li>
                    <NavLink to="/panel/Inicio" className={({isActive}) => isActive ? " activadoPanel" : "" }>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/Acerca" className={({isActive}) => isActive ? " activadoPanel" : "" }>Acerca</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/Gestion" className={({isActive}) => isActive ? " activadoPanel" : "" }>Gestion</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/Crear" className={({isActive}) => isActive ? " activadoPanel" : "" }>Crear</NavLink>
                </li>
            </ul>
          </nav>

          <div>
            {/* Aqui se cargaran los componentes de las sub-rutas */}
            <Outlet />
          </div>
      </div>
    )
  }