import React from 'react'
import {BsSearch} from 'react-icons/bs'

export default function index({textValue, setTextValue}) {
  return (
    <div className='w-[50%] relative'>
        <input placeholder='Buscar' className="w-full border border-gray rounded-full p-1 pl-5" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
        <BsSearch className="absolute right-3 top-2 text-gray"/>
    </div>
  )
}
