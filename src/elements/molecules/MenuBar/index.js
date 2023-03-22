import React from 'react'
import Logo from '../../atoms/Logo'
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div className="w-[330px] h-full p-10 bg-secondary fixed">
        <Logo />
        <h2 className="text-white  mt-5 text-subheading-02">Mi Librería</h2>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/"  className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Recientes</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/artist" className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Artistas</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Albums</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Canciones</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Estaciones</NavLink></li>

        <h2 className="text-white mt-5 text-subheading-02">Paylist</h2>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Metal</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Para bailar</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Rock 90s</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Baladas</NavLink></li>
    </div>
  )
}
