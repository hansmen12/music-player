import React from 'react'

export default function index({data}) {
  return (
      <div className="w-[160px] cursor-pointer">
          <div className="w-full h-[160px]">
            <img src={data.album.cover_medium} className="w-full h-full"/>
          </div>
          <h3 className="text-black text-paragraph-02">{data.title}</h3>
          <h4 className="text-gray text-paragraph-03">{data.artist.name}</h4>
      </div>
  )
}
