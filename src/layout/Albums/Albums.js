import React, { useEffect, useState } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import MusicCard from '../../elements/atoms/MusicCard'
import {useDebouncedValue} from '../../hooks/useDebouncedValue'

import axios from 'axios';

export default function Albums() {
  const [tracks, setTracks] = useState([]);
  const [textValue, setTextValue] = useState(''); 

  const value = useDebouncedValue(textValue, 200)

  const getMusic = async ()=>{
    try {
        const {data} = await axios.get(`https://api.deezer.com/search?q=${value.length > 0 ? value : 'albums'}`);
        setTracks(data.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    getMusic();
  },[value])

  return (
    
      <div className="w-full lg:w-[calc(100%-330px)]">
      <HeaderBar textValue={textValue} setTextValue={setTextValue} isVisibleSearch={false}/>
      <h3 className="text-paragraph-01 text-primary mb-5 font-bold">Albums</h3>
      {tracks.length < 1 ? 
        <span className="">No se encontro resultado para {value}</span> :
      <ListCard>
      { tracks.map((track)=>(
            <MusicCard key={track.id} data={track}/>
        ))}
      </ListCard>
      }
      </div>
  )
}
