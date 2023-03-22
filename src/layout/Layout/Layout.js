import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuBar from '../../elements/molecules/MenuBar'
import Player from '../../elements/molecules/Player/Player'
import useMusic from '../../hooks/useMusic'


export default function Layout() {
  const {music} = useMusic();

  return (
    <div className="w-full h-full flex">
      <MenuBar />
      {music && <Player />}
      
      <Outlet />
    </div>
  )
}
