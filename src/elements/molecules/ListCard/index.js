import React from 'react'
import MusicCard from '../../atoms/MusicCard'

export default function index({ children}) {
  return (
    <div className="grid col-5 grid-cols-5 gap-5">
        {children}
    </div>
  )
}
