import React from 'react'
import { FaUser } from "react-icons/fa";

export default function index() {
  return (
    <div className="flex justify-center content-center h-full">
        <FaUser className="text-primary"/>
        <div className="text-gray text-paragraph-02 ml-2">
            Hans M.
        </div>
    </div>
  )
}
