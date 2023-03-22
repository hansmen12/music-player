import React, { useState, useEffect, useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiOutlineFastForward } from "react-icons/ai";
import { AiFillFastBackward } from "react-icons/ai";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";

import useMusic from '../../../hooks/useMusic';

export default function Player() {
    const [volumen, setVolumen] = useState(100);
    const [muted, setMuted] = useState(false);
    const [pause, setPause] = useState(false)
    const refMusic = useRef();

    const {music} = useMusic();
    
    const handlePlay = () => {
        if(refMusic.current.paused){
            refMusic.current.play();
            setPause(false);
        }else {
            refMusic.current.pause();
            setPause(true);
        }
    }

    useEffect(()=>{
        if(music){
            refMusic.current.src = music.preview;
            refMusic.current.play();
            setPause(false);
        }
    },[music])


    useEffect(()=>{
        if(music){
            refMusic.current.volume  = volumen  / 100;
            refMusic.current.muted  = muted;
        }
    },[volumen, muted ])

    
    return (
        <div className="w-full fixed bg-primary bottom-0 h-[100px] flex justify-between items-center pr-2 z-10">
            <div className="w-[33%] h-full flex items-center">
                <div className="h-full mr-5">
                    <img src={music.album.cover_medium} className="h-full "/>
                </div>
                <div>
                    <h2 className="text-white">{music.title}</h2>
                    <h3 className="text-white text-paragraph-04">{music.artist.name + ' - ' +music.album.title}</h3>
                </div>
            </div>
            <div className="flex items-center w-[33%]">
                <div>
                    <AiFillFastBackward className="text-white cursor-pointer" size={30}/>
                </div>
                <div className="w-14 h-14 p-2 bg-[rgba(255,255,255,0.4)] rounded-full flex items-center justify-center mx-5 cursor-pointer" onClick={handlePlay}>
                    {pause ? 
                        <FaPlay className="text-white" />
                        :
                        <FaPause className="text-white" />
                    }
                </div>
                <div>
                    <AiOutlineFastForward className="text-white text-big cursor-pointer" size={30} />
                </div>
            </div>
            <div className="flex ">
                <div class="flex justify-center items-center">
                    <input 
                        type="range" name="" min="0" max="100" 
                        value={volumen} 
                        className="w-full h-2 rounded bg-white appearance-none mr-2" 
                        onChange={(e)=>setVolumen(e.target.value)} 
                    />
                    {muted ?
                        <BsFillVolumeMuteFill className="text-white text-big cursor-pointer" size={30} onClick={()=>setMuted(false)}/>    
                        :
                        <BsFillVolumeUpFill className="text-white text-big cursor-pointer" size={30} onClick={()=>setMuted(true)}/> 
                    }
                    
                </div>
            </div>
                {/* // <ReactAudioPlayer
                //     src={music.preview}
                //     autoPlay={true}
                //     volume={volumen / 100}
                //     muted={muted}
                //     ref={refMusic}
                //     paused={true}
                // /> */}
               { music && <audio id="myAudio" controls autoplay ref={refMusic} className="hidden">
                    <source src={music.preview}  type="audio/mpeg" autoplay/>
                </audio>}
            
        </div>
  )
}
