import React from 'react'
import { IoMdClose } from "react-icons/io";


const ChatHeader = () => {
  return (
    <div className='h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-center'>
        <div className="flex gp-3 items-center justify-center"></div>
        <div className="flex items-center justify-center gap-5">
            <button className="text-neutral-500 focus:border-none focus:outline-none duration-300 transition-all focus:text-white">
                <IoMdClose className='text-3xl'/>
            </button>
        </div>
    </div>
  )
}

export default ChatHeader
