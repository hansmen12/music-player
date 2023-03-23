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
      <div className="w-full h-[100vh] p-5 px-10 flex">
      <div className="lg:w-[330px]"></div>
      <Outlet />
      </div>
    </div>
  )
}
