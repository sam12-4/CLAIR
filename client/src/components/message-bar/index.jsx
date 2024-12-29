import React, { useEffect, useRef, useState } from 'react'
import { GrAttachment } from "react-icons/gr"
import { RiEmojiStickerLine } from "react-icons/ri"
import { IoSend } from "react-icons/io5"
import EmojiPicker from 'emoji-picker-react';

const MessageBar = () => {
  const [message, setMessage] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)
  const emojiRef = useRef()

  useEffect(() => {
    function handleClickOutside(event){
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowEmoji(false)
      }}
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
  },[emojiRef])

  const handleAddEmoji = (emoji) =>{
    setMessage((prev) => prev + emoji.emoji)
  }

  const handleSendmessage = async() => {

  }

  return (
    <div className='h-[10vh] bg-[#1c1d25]  flex justify-center items-center px-8 mb-6 gap-6'>
      <div className="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-5 pr-5">
        <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} name="message" placeholder='Enter Message' id="message" className='flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none focus:text-white duration-300 transition-all' />
        <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'>
          <GrAttachment className='text-2xl' />
        </button>
        <div className="relative">
          <button onClick={()=>{setShowEmoji(true)}} className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'>
            <RiEmojiStickerLine  className='text-2xl' />
          </button>
          <div className="absolute bottom-16 right-0"  ref={emojiRef} >
            {/* <EmojiPicker ref={emojiRef} onEmojiClick={handleAddEmoji} show={showEmoji} /> */}
            <EmojiPicker 
            onEmojiClick={handleAddEmoji} 
            open={showEmoji}
            theme='dark'
            autoFocusSearch={false} 
            />
          </div>
        </div>
      </div>
        <div className="relative">
          <button onClick={handleSendmessage} className='bg-[#8417ff] rounded-md flex items-center justify-center p-5 hover:bg-[#741bda] focus:bg-[#741bda] text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'>
            <IoSend className='text-2xl'/>
          </button>
          </div>
    </div>
  )
}

export default MessageBar
