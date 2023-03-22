import React, { useEffect, useState, useContext } from 'react'
import HeaderBar from '../../elements/molecules/HeaderBar'
import ListCard from '../../elements/molecules/ListCard'
import useMusic from '../../hooks/useMusic';
import { AiOutlinePlayCircle } from "react-icons/ai";
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function Tracks() {
  const [listTrack, setListTrack] = useState();
  const {id} = useParams();
  const {music, setMusic} = useMusic();

  const getMusic = async ()=>{
    const {data} = await axios.get(`https://api.deezer.com/artist/${id}/top?limit=50`);
    console.log(data)
    setListTrack(data.data)
  }
  useEffect(()=>{
    getMusic();
    console.log(music)
  },[])

  const handlePlayer = (track) => {
    setMusic(track)
  }

  return (
    <div className="w-full p-5 px-10 flex">
      <div className="w-[330px]"></div>
      <div className="w-[calc(100%-330px)]">
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
    </div>
  )
}
