import React from 'react'
import SearchInput from '../../atoms/SearchInput' 
import User from '../../atoms/User' 

export default function index({textValue, setTextValue}) {
  return (
    <div className="w-full mb-5 flex justify-between">
        <SearchInput textValue={textValue} setTextValue={setTextValue}/>
        <User />
    </div>
  )
}
