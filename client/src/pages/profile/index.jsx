import { useAppStore } from '@/store'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { IoArrowBack } from 'react-icons/io5';
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Input } from '@/components/ui/input'
import { colors, getColors } from '@/lib/utils';
import { apiClient } from '@/lib/api-client'
import { DELETE_PROFILE_IMAGE_ROUTE, HOST, PROFILE_IMAGE_ROUTE, UPDATE_USER_INFO } from '@/utils/constants'

const Profile = () => {

  const { userInfo, setUserInfo } = useAppStore()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [image, setImage] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [selectedcolor, setSelectedColor] = useState(0)
  const fileRefInput = useRef(null)

  useEffect(() => {
    console.log({ userInfo });
    if (!userInfo || userInfo===undefined) {
      navigate("/auth")
      toast.error("Please login to access chat")  
    }

  }, [])

  useEffect(() => {
    if(userInfo && userInfo.profileSetup){
      setFirstName(userInfo.firstName)
      setLastName(userInfo.lastName)
      setSelectedColor(userInfo.color)
    }
    if (userInfo && userInfo.image) {
      setImage(`${HOST}/${userInfo.image}`)
    }
  },[userInfo])

  const validateForm=()=>{
    if (!firstName){
      toast.error("First Name is required")
      return false
    }
    if (!lastName){
      toast.error("Last Name is required")
      return false
    }
    return true
  }

  const saveChanges = async () => {
    if (validateForm()){
      try {
        const response = await apiClient.post(
          'api/auth/update-user-info',
          { firstName, lastName, color: Number(selectedcolor)},
          { withCredentials: true }
        );
        if (response.status === 200) {
          toast.success("Profile updated successfully")
        }
        console.log("data",response.data.user.colors);
        setUserInfo(response.data.user)
        navigate("/CLAIR")
          // const response = await apiClient.get('api/auth/update-user-info', {firstName, lastName, color: selectedcolor}, {withCredentials: true})
        console.log(response.status);
      } catch (error) {
        toast.error(error.message)
      }
    }

  }

  const handleNavigate =()=>{
    if (userInfo.profileSetup){
      navigate("/CLAIR")
    }else{
      toast.error("Please Complete your profile setup")
    }

  }

  useEffect(()=>{console.log(selectedcolor)},[selectedcolor])

  const handleImage =async (e) => {
    const file = e.target.files[0]
    console.log(file);
    if (file){
      const formData = new FormData()
      formData.append('profile-image', file)
      const response = await apiClient.post(PROFILE_IMAGE_ROUTE, formData, { withCredentials: true })
      console.log(response);
      if (response.status === 200 && response.data.image) {
        setUserInfo({...userInfo, image: response.data.image})
        toast.success("Image uploaded successfully")
      }
    }

    
    // const reader = new FileReader()
    // console.log("reader",reader);
    // reader.onloadend = () => {
    //   setImage(reader.result)
    //   console.log("reader",reader.result);
    // }
    // reader.readAsDataURL(file)
    // console.log("change");
  }

  const deleteImage = async () => {
    try {
      const response = await apiClient.delete(DELETE_PROFILE_IMAGE_ROUTE, { withCredentials: true })
      if (response.status === 200) {
        setUserInfo({ ...userInfo, image: null })
        console.log("response",response);
        toast.success("Image removed successfully")
        setImage(null)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
    <div className="bg-[#1b1c24] h-screen flex justify-center items-center relative">
      <div className=''>
        <div className="box flex gap-10 w-[80vw] relative">
          <div onClick={handleNavigate} className="arrow absolute top-[-50px] sm:relative w-fit h-fit">
            <IoArrowBack  className='text-4xl lg:text-5xl text-white hover:cursor-pointer' />
          </div>
          <div className="">
            <div className={`avatar h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden cursor-pointer relative ${getColors(selectedcolor==0 ? 0 : selectedcolor||userInfo.colors)}`} onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
            
              <Avatar>
                {image ? <img src={image} alt='profile' className='w-full h-full bg-black object-cover object-top' /> :
                  
                  <div className='uppercase w-32 h-32 md:h-48 md:w-48 text-5xl border-[1px] flex items-center justify-center rounded-full'>
                    {!image && <input type="file" ref={fileRefInput} onChange={handleImage} name='profile-image'  className='opacity-0  top-5 -left-96 md:top-20 md:-left-96 absolute inset-0 w-fit h-fit cursor-pointer z-20' accept='.png, .jpg, .webp, .svg, .jpeg'/>}
                    {firstName ? firstName.split('').shift() : userInfo.email.split('').shift()}
                  </div>}
              </Avatar>
              
              {hovered && <div className='absolute inset-0 flex items-center justify-center bg-black/50 ring-fuchsia-50 transition-all duration-300'>{image ?
              <div onClick={deleteImage}><FaTrash className='text-white text-3xl cursor-pointer' /> </div> :
                <FaPlus className='text-white text-3xl cursor-pointer' />}
                </div>}
            </div>
          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
            <div className="w-full">
              <Input placeholder="Your Email" type="email" value={userInfo.email} disabled className="rounded-lg p-6 bg-[#2c2e3b] border-none " />
            </div>
            <div className="w-full">
              <Input placeholder="First Name" type="email" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
            </div>
            <div className="w-full">
              <Input placeholder="Last Name" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
            </div>
            <div className="flex justify-center gap-6 w-full">
              {colors.map((color, index) => {
                return <div className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${(selectedcolor ||userInfo?.colors )=== index  ? "outline outline-white/80 outline-2" : ""}`} onClick={() => { setSelectedColor(Number(index)) }} key={index}></div>
              })}
            </div>
          </div>

        </div>
      </div>
      <div className="w-[70%] lg:w-[40%] absolute bottom-40 left-[14%]">
        <Button className="h-12 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300" onClick={saveChanges}>
          Save Changes
        </Button>
      </div>
      </div>
    </>
  )
}

export default Profile


