import React, { useEffect, useState } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import ArtistCard from '../../elements/atoms/ArtistCard/ArtistCard'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'

import axios from 'axios';

export default function Artist() {
  const [artists, setArtists] = useState([]);
  const [textValue, setTextValue] = useState(''); 

  const value = useDebouncedValue(textValue, 300)

  const getArtist = async ()=>{
    const {data} = await axios.get(`https://api.deezer.com/search/artist?q=${value.length > 0 ? value : 'all'}`);
    setArtists(data.data)
  }
  useEffect(()=>{
    getArtist();
  },[value])
  return (
    <div className="w-full p-5 px-10 flex">
      <div className="w-[330px]"></div>
      <div className="w-[calc(100%-330px)]">
      <HeaderBar textValue={textValue} setTextValue={setTextValue}/>
      <h3 className="text-paragraph-01 text-primary mb-5 font-bold">Artistas top</h3>
      
      {artists && artists.length < 1 ? 
        <span className="">No se encontro resultado para {value}</span> :
        <ListCard>
            {artists.map((artist)=>(
                <ArtistCard key={artist.id} data={artist}/>
            ))}
        </ListCard>
        }
      </div>
    </div>
  )
}
