import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Persona } from '../components/Persona'
import { Error } from '../components/Error'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel} from '../components/panel/Inicio'
import { Acerca } from '../components/panel/Acerca'
import { Gestion } from '../components/panel/Gestion'
import { Crear } from '../components/panel/Crear'

// Impostar imagen
import bravo from '../assets/bravo.png'

export const RouterPrincipal = () => {
  return (
    <Router>
        <div className="layout">
        <img src={bravo} alt="bravo" width="300px" />
        <hr />

        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/inicio"
                        className={({isActive}) => isActive ? " activado" : "" }
                        >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articulos"
                        className={({isActive}) => isActive ? " activado" : "" }
                        >
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/panel"
                        className={({isActive}) => isActive ? " activado" : "" }
                        >
                        Panel de Control
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacto"
                        className={({isActive}) => isActive ? " activado" : "" }
                        >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
        <hr />

        <section>
            {/* Se cargan componentes cuando hay uan coincidencia con el path */}
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/articulos" element={<Articulos/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/persona/:nombre" element={<Persona/>}/>
                <Route path="/persona/:nombre/:apellido" element={<Persona/>}/>
                <Route path="/redirigir" element={<Navigate to="/persona/alfredo/cuero"/>}/>
                {/* Sub-rutas */}
                <Route path="/panel/*" element={<PanelControl/>}>
                    <Route path="Inicio" element={<InicioPanel/>}/>
                    <Route path="Acerca" element={<Acerca/>}/>
                    <Route path="Gestion" element={<Gestion/>}/>
                    <Route path="Crear" element={<Crear/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </section>

        <hr />
        <footer>Este es el footer</footer>
       
        </div>
    </Router>
  )
}
