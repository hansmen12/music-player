import React, { useEffect, useState } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import MusicCard from '../../elements/atoms/MusicCard'
import {useDebouncedValue} from '../../hooks/useDebouncedValue'

import axios from 'axios';

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);
  const [textValue, setTextValue] = useState(''); 

  const value = useDebouncedValue(textValue, 200)

  const getMusic = async ()=>{
    const {data} = await axios.get(`https://api.deezer.com/search?q=${value.length > 0 ? value : 'all'}`);
    setTracks(data.data)
  }
  useEffect(()=>{
    getMusic();
  },[value])

  return (
    <div className="w-full p-5 px-10 flex">
      <div className="w-[330px]"></div>
      <div className="w-[calc(100%-330px)]">
      <HeaderBar textValue={textValue} setTextValue={setTextValue}/>
      <h3 className="text-paragraph-01 text-primary mb-5 font-bold">Más recientes</h3>
      {tracks.length < 1 ? 
        <span className="">No se encontro resultado para {value}</span> :
      <ListCard>
      { tracks.map((track)=>(
            <MusicCard key={track.id} data={track}/>
        ))}
      </ListCard>
      }
      </div>
    </div>
  )
}
