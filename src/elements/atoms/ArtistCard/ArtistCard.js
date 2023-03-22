import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtistCard({data}) {

  return (
    <Link to={`/artist/${data.id}`}>
      <div className="w-[160px] cursor-pointer">
          <div className="w-full h-[160px]">
            <img src={data.picture_medium} className="w-full h-full"/>
          </div>
          <h3 className="text-black text-paragraph-02">{data.name}</h3>
          <h4 className="text-gray text-paragraph-03">{data.nb_album}</h4>
      </div>
    </Link>
  )
}
