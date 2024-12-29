import ChatContainer from '@/components/chat-container'
import ContactsContainer from '@/components/contacts-container'
import EmptyChatContainer from '@/components/empty-chat-container'
import { useAppStore } from '@/store'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Chat = () => {

  const {userInfo} = useAppStore()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!userInfo){
      toast.error("Please login to access chat")
      navigate("/auth")
    }
    if (userInfo && !userInfo.profileSetup){
      toast.info("Please setup your profile")
      navigate("/profile-setup")
    }

  }, [])
  

  return (
    <div className='flex h-screen'>
      {/* <ContactsContainer /> */}
      {/* <MessageContainer /> */}
      <EmptyChatContainer />
      {/* <ChatContainer /> */}
    </div>
  )
}

export default Chat
