import React from 'react'
import SearchInput from '../../atoms/SearchInput' 
import User from '../../atoms/User' 
import { BiMenuAltLeft } from "react-icons/bi";
import useMusic from '../../../hooks/useMusic';

export default function HeaderBar({textValue = '', setTextValue, isVisibleSearch = true}) {
  const {isVisibleMenu, setIsVisbleMenu} = useMusic();

  return (
    <div className={`w-full h-5 mb-5 flex justify-between items-center`}>
        <BiMenuAltLeft size={25} className="text-primary block lg:hidden" onClick={()=>setIsVisbleMenu(!isVisibleMenu)}/>
        {isVisibleSearch && <SearchInput textValue={textValue} setTextValue={setTextValue}/>}
        <User />
    </div>
  )
}
