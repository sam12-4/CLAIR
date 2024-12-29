// import React, { useState } from 'react'
// import Victory from "../../assets/victory.svg"
// import loginImage from "../../assets/login2.png"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
// import { Input } from '@/components/ui/input'
// import { toast } from 'sonner'
// import { apiClient } from '@/lib/api-client'
// import { SIGNUP_ROUTE } from '@/utils/constants'
// import { useNavigate } from 'react-router-dom'
// import { useAppStore } from '@/store'
// import { Button } from '@/components/ui/button'
// // import {FaCircleArrow} from "react-icons"
// import {ArrowUpRightFromCircleIcon} from "lucide-react"

// const Auth = () => {
//     const navigate = useNavigate()
//     const { setUserInfo } = useAppStore()

//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     })

//     const [signupForm, setSignupForm] = useState({
//         email: '',
//         password: '',
//         confirmPassword: ''
//     })


//     const validateLogin = () => {
//         if (!form.email || !form.password) {
//             toast.error("All fields are required")
//             return false
//         }
//         return true
//     }

//     const validateSignUp = () => {
//         if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
//             toast.error("All fields are required")
//             return false
//         }
//         else if (signupForm.password !== signupForm.confirmPassword) {
//             toast.error("Passwords and confirm password do not match")
//             return false
//         }
//         return true
//     }

//     const handleForm = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//     }

//     const handleLogin = async () => {
//         if (validateLogin()) {
//             try {
//                 console.log(form);
//                 const response = await apiClient.post('/api/auth/login', form, { withCredentials: true })
//                 console.log("status", response.status);
//                 if (response.status === 200) {
//                     toast.success("User logged in successfully")
//                     setUserInfo(response.data.user)
//                     if (response.data.user.profileSetup === false) {
//                         navigate("/profile-setup")
//                     }
//                     else {
//                         navigate("/chat")
//                     }
//                     console.log(response.data.user.profileSetup);
//                 } else {
//                     toast.error("An internal server error occured")
//                 }
//                 console.log("response", response);
//             } catch (err) {
//                 console.log(err);
//                 if (err && err.response && (err.response.status === 403 || 401)) {
//                     toast.error(err.response.data || err.message ||"An internal server error occured" )
//                 }
//             }
//         }
//     }

//     const handleSignUp = async () => {
//         if (validateSignUp()) {
//             try {
//                 console.log(SIGNUP_ROUTE);
//                 const response = await apiClient.post(SIGNUP_ROUTE, { email: signupForm.email, password: signupForm.password }, { withCredentials: true })
//                 console.log("status", response.status);
//                 console.log("response", response);
//                 if (response.status === 201) {
//                     toast.success("User created successfully")
//                     setUserInfo(response.data.user)
//                 }
//                 else {
//                     toast.error("An internal server error occured")
//                 }
//             } catch (err) {
//                 console.log(err);
//                 if (err && err.response && err.response.status === 403) {
//                     toast.error(err.response.data)
//                 }
//                 else {
//                     toast.error("An internal server error occured")
//                 }
//             }
//         }
//     }

//     return (
//         <div className='h-[100vh] flex  justify-center bg-gradient-to-br from-purple-500 to-pink-500'>
//             <div className="box blurbox bg-white backdrop-filter backdrop-blur-lg p-3 w-[90vw] my-[30%] xl:h-[70vh] lg:h-[88vh]  md:h-[60vh] h-[70vh] md:w-[60vw] lg:w-[50vw] border-2 shadow-lg md:my-[15%] lg:my-[5%] xl:w-[35vw] flex justify-center flex-col rounded-lg xl:pb-8 ">
//                 <div className='flex flex-row justify-center items-center'>
//                     <h1 className='text-center font-bold xl:text-4xl text-2xl'>Welcome</h1> <img className='w-20' src={Victory} />
//                 </div>
//                 <h1 className='text-center font-medium text-xs md:text-base mb-2'>Get started by accessing your automated cleaning assistant now.</h1>

//                 <Tabs defaultValue="login" className="flex flex-col justify-center items-center mt-5" >
//                     <TabsList className='w-[80%] text-center'>
//                         <TabsTrigger value="login" className='pb-2 data-[state=active]:font-bold data-[state=active]:bg-transparent border-b-2 text-center w-[50%] border-gray-300 data-[state=active]:border-purple-400 font-semibold opacity-90 data-[state=active]:opacity-100'>Log in</TabsTrigger>
//                         <TabsTrigger value="signup" className='data-[state=active]:bg-transparent border-b-2 border-gray-300 w-[50%] data-[state=active]:border-purple-400 transition-all duration-300 pb-2  data-[state=active]:font-bold font-semibold opacity-90 data-[state=active]:opacity-100'>Sign Up</TabsTrigger>
//                         <TabsContent value="login" className='w-[100%] mt-8 rounded-lg flex flex-col gap-6'>
//                             <Input placeholder='Email' name="email" className="text-gray-400 font-bold text-sm md:text-md p-5 shadow-lg" value={form.email} onChange={handleForm} type="email" />
//                             <Input placeholder='Password' name="password" className="text-gray-400 font-bold text-sm md:text-md p-5 shadow-lg" value={form.password} onChange={handleForm} type="password" />
//                             <button className="bg-purple-500 text-white font-bold text-sm md:text-md p-3  disabled:bg-purple-400 disabled:cursor-not-allowed rounded-full hover:bg-slate-800" onClick={handleLogin}>Log in</button>
//                         </TabsContent>
//                         <TabsContent value="signup" className='w-[100%] flex flex-col gap-5 items-center'>
//                             <Input placeholder='Email' name="email" className="text-gray-400 font-bold text-sm md:text-md p-5 shadow-lg" value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="email" />
//                             <Input placeholder='Password' name="password" className="text-gray-400 font-bold text-sm md:text-md p-5 shadow-lg" value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="password" />
//                             <Input placeholder='Confirm Password' name="confirmPassword" className="text-gray-400 font-bold text-sm md:text-md p-5 shadow-lg" value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="password" />
//                             <button className="bg-purple-500 text-white font-bold text-sm md:text-md p-3 rounded-full disabled:bg-purple-400 lg:disabled:cursor-not-allowed w-full hover:bg-slate-800" onClick={handleSignUp}>Sign Up</button>
//                         </TabsContent>
//                     </TabsList>
//                 </Tabs>

//             </div>

//             <div className="absolute right-0 m-5">
//                 <Button className="" onClick={() => navigate("/admin")}>Admin Panel <ArrowUpRightFromCircleIcon /></Button>
//             </div>
//         </div>
//     )
// }


// export default Auth


import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { apiClient } from '@/lib/api-client'
import { SIGNUP_ROUTE } from '@/utils/constants'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store'
import { ArrowUpRightFromCircle, Mail, Lock, User } from 'lucide-react'
import { motion } from 'framer-motion'

const Auth = () => {
    const navigate = useNavigate()
    const { setUserInfo } = useAppStore()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const validateLogin = () => {
        if (!form.email || !form.password) {
            toast.error("All fields are required")
            return false
        }
        return true
    }

    const validateSignUp = () => {
        if (!signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
            toast.error("All fields are required")
            return false
        }
        else if (signupForm.password !== signupForm.confirmPassword) {
            toast.error("Passwords do not match")
            return false
        }
        return true
    }

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        if (validateLogin()) {
            try {
                const response = await apiClient.post('/api/auth/login', form, { withCredentials: true })
                if (response.status === 200) {
                    toast.success("Logged in successfully")
                    setUserInfo(response.data.user)
                    navigate(response.data.user.profileSetup ? "/CLAIR" : "/profile-setup")
                } else {
                    toast.error("An error occurred")
                }
            } catch (err) {
                toast.error(err.response?.data || err.message || "An error occurred")
            }
        }
    }

    const handleSignUp = async () => {
        if (validateSignUp()) {
            try {
                const response = await apiClient.post(SIGNUP_ROUTE, { email: signupForm.email, password: signupForm.password }, { withCredentials: true })
                if (response.status === 201) {
                    toast.success("Account created successfully")
                    setUserInfo(response.data.user)
                    navigate("/profile-setup")
                } else {
                    toast.error("An error occurred")
                }
            } catch (err) {
                toast.error(err.response?.data || "An error occurred")
            }
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4'>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white border-opacity-20">
                    <div className="p-8 sm:p-12">
                        <motion.div 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col items-center mb-8'
                        >
                            <div className="bg-purple-500 rounded-full p-3 mb-4">
                                <User className="h-8 w-8 text-white" />
                            </div>
                            <h1 className='text-4xl font-bold text-white mb-2'>Welcome</h1>
                            <p className='text-purple-200 text-center'>Access your automated cleaning assistant</p>
                        </motion.div>

                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8 bg-purple-800 bg-opacity-50 rounded-full p-1">
                                <TabsTrigger value="login" className="rounded-full text-sm text-gray-300 font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-lg">Log in</TabsTrigger>
                                <TabsTrigger value="signup" className="rounded-full text-gray-300 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-lg">Sign Up</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className='space-y-4'>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                                    <Input placeholder='Email' name="email" className="pl-10 bg-purple-800 bg-opacity-50 border-0 text-white placeholder-gray-400 placeholder-sidebar-border focus:ring-2 focus:ring-purple-500" value={form.email} onChange={handleForm} type="email" />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                                    <Input placeholder='Password' name="password" className="pl-10 bg-purple-800 bg-opacity-50 border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" value={form.password} onChange={handleForm} type="password" />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={handleLogin}>Log in</Button>
                            </TabsContent>
                            <TabsContent value="signup" className='space-y-4'>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                                    <Input placeholder='Email' name="email" className="pl-10 bg-purple-800 bg-opacity-50 border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" value={signupForm.email} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="email" />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                                    <Input placeholder='Password' name="password" className="pl-10 bg-purple-800 bg-opacity-50 border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" value={signupForm.password} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="password" />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-300" />
                                    <Input placeholder='Confirm Password' name="confirmPassword" className="pl-10 bg-purple-800 bg-opacity-50 border-0 text-white placeholder-gray-300 !important focus:ring-2 focus:border-none focus:ring-purple-500" value={signupForm.confirmPassword} onChange={(e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value })} type="password" />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105" onClick={handleSignUp}>Sign Up</Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="fixed top-4 right-4"
            >
                <Button variant="outline" className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white border-white border-opacity-20 hover:bg-white hover:bg-opacity-30 transition-all duration-300" onClick={() => navigate("/admin")}>
                    Admin Panel <ArrowUpRightFromCircle className="ml-2 h-4 w-4" />
                </Button>
            </motion.div>
        </div>
    )
}

export default Auth