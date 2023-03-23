import React, { useEffect, useState } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import StationCard from '../../elements/atoms/StationCard/StationCard'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'

import axios from 'axios';

export default function Stations() {
  const [artists, setArtists] = useState([]);
  const [textValue, setTextValue] = useState(''); 

  const value = useDebouncedValue(textValue, 300)

  const getArtist = async ()=>{
    try {
        const {data} = await axios.get(`https://api.deezer.com/radio`);
        setArtists(data.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    getArtist();
  },[value])
  return (
      <div className="w-full lg:w-[calc(100%-330px)]">
      <HeaderBar textValue={textValue} setTextValue={setTextValue} isVisibleSearch={false}/>
      <h3 className="text-paragraph-01 text-primary mb-5 font-bold">Estaciones</h3>
      
      {artists && artists.length < 1 ? 
        <span className="">No se encontro resultado para {value}</span> :
        <ListCard>
            {artists.map((artist)=>(
                <StationCard key={artist.id} data={artist}/>
            ))}
        </ListCard>
        }
      </div>
  )
}
