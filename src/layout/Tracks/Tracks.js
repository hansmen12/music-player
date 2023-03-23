import React, { useEffect, useState, useContext } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import useMusic from '../../hooks/useMusic';
import { AiOutlinePlayCircle } from "react-icons/ai";
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function Tracks() {
  const [listTrack, setListTrack] = useState();
  const {id,type} = useParams();
  const {music, setMusic} = useMusic();

  let url;
  console.log(type)
  const getMusic = async ()=>{
    if (type === 'artist'){
      url = `https://api.deezer.com/${type}/${id}/top?limit=50`
    } else if (type === 'album'){
      url = `https://api.deezer.com/${type}/${id}/tracks`
    } else if (type === 'radio'){
      url = `https://api.deezer.com/${type}/${id}/tracks`
    }
    
    try {
      const {data} = await axios.get(url);
      setListTrack(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getMusic();
    console.log(music)
  },[])

  const handlePlayer = (track) => {
    setMusic(track)
  }

  return (
      <div className="w-full lg:w-[calc(100%-330px)]">
      <HeaderBar isVisibleSearch={false}/>
      <h3 className="text-paragraph-01 text-primary mb-5 font-bold">Lista de canciones</h3>
        <ListCard>
          {listTrack && listTrack.map((track)=>(
            <div 
              className="w-full h-full relative bg-softGray rounded-md p-2 flex items-center justify-center cursor-pointer"
              onClick={()=>handlePlayer(track)}
            >
              {track.title}
              <AiOutlinePlayCircle className="text-white absolute opacity-50" size={30}/>
            </div>
          ))
          }
        </ListCard>
      </div>
  )
}
