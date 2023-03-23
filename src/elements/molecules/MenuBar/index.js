import React from 'react'
import Logo from '../../atoms/Logo'
import { NavLink } from 'react-router-dom'
import useMusic from '../../../hooks/useMusic'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MenuBar() {
  const {isVisibleMenu, setIsVisbleMenu} = useMusic();
  return (
    <div className={`w-[330px] h-full p-10 bg-secondary fixed z-10 -translate-x-full lg:translate-x-0 transition-all	 lg:block ${isVisibleMenu && 'translate-x-0'}`}>
        <AiOutlineCloseCircle size={25} className="absolute text-white top-5 right-10 cursor-pointer block lg:hidden" onClick={()=>setIsVisbleMenu(!isVisibleMenu)}/>
        <Logo />
        <h2 className="text-white  mt-5 text-subheading-02">Mi Librería</h2>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/"  className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Recientes</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/artist" className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Artistas</NavLink></li>
         <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/albums" className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Albums</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink to="/stations" className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-primary" : ""
        }>Estaciones</NavLink></li>

        <h2 className="text-white mt-5 text-subheading-02">Paylist</h2>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Metal</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Para bailar</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Rock 90s</NavLink></li>
        <li className="text-softGray list-none py-1 text-paragraph-02"><NavLink>Baladas</NavLink></li>
    </div>
  )
}
