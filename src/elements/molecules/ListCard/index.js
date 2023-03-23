import React from 'react'
import MusicCard from '../../atoms/MusicCard'

export default function index({ children}) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 pb-32">
        {children}
    </div>
  )
}
