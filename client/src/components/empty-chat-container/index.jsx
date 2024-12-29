// import { animationDefaultOptions } from '@/lib/utils'
// import React from 'react'
// import Lottie from 'react-lottie'

// const EmptyChatContainer = () => {
//   return (
//     <div className='flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all'>
//       <Lottie
//       isClickToPauseDisabled={true}
//       height={200}
//       width={200}
//       options={animationDefaultOptions}
//       />
//       <div className="text-opacity-80 text-white flex flex-col duration-300 text-center transition-all text-3xl lg:text-4xl ">
//         <h3 className="poppins-medium">
//         Hi<span className='text-purple-500'>! </span>
//         Welcome to  <span className='text-purple-500'>Clean Sweep </span>
//         AI
//         <span className='text-purple-500'>.</span>
//         </h3>
//       </div>
//     </div>
//   )
// }

// export default EmptyChatContainer

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { Calendar } from "@/components/ui/calendar"
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, MessageSquare, CalendarIcon } from "lucide-react";
// import { Button } from "../ui/button";
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils";

// const EmptyChatContainer = () => {
//   const [opeNewContactModal, setOpeNewContactModal] = useState(false);
//   const [openscheduleModal, setOpenscheduleModal] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("");
//   const [date, setDate] = useState(new Date())


//   const options = [
//     {
//       value: "quick",
//       label: "Quick Clean",
//     },
//     {
//       value: "deep",
//       label: "Deep Clean",
//     },
//     {
//       value: "custom",
//       label: "Custom Mode",
//     },
//   ];

//   const handleConnectDevice = () => {};
//   return (
//     <div className="flex-1 bg-gradient-to-br from-[#1c1d25] to-[#2a2b36] flex flex-col justify-center items-center p-8">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative mb-8"
//       >
//         <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
//         <div className="relative bg-[#2f303b] p-6 rounded-full">
//           <Sparkles className="w-16 h-16 text-purple-500" />
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-center"
//       >
//         <h3 className="text-3xl font-bold text-white mb-4">
//           Welcome to <span className="text-purple-500">Clean Sweep AI</span>
//         </h3>
//         <p className="text-lg text-gray-300 mb-8">
//           Your Intelligent Cleaning Assistant is ready to help.
//         </p>
//       </motion.div>
//       <div className="flex gap-4">
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="flex items-center justify-center bg-[#2f303b] p-4 rounded-lg shadow-lg cursor-pointer"
//         onClick={() => {
//           setOpeNewContactModal(true);
//         }}
//       >
//         {/* <MessageSquare className="w-6 h-6 text-purple-500 mr-3" /> */}
//         <span className="text-white">Start a task to begin</span>
//       </motion.div>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="flex items-center justify-center bg-[#2f303b] p-4 rounded-lg shadow-lg cursor-pointer"
//         onClick={() => {
//           setOpenscheduleModal(true);
//         }}
//       >
//         {/* <MessageSquare className="w-6 h-6 text-purple-500 mr-3" /> */}
//         <span className="text-white">Schedule a task</span>
//       </motion.div>
//       </div>
//      <Dialog open={opeNewContactModal|| openscheduleModal} onOpenChange={opeNewContactModal ? setOpeNewContactModal : setOpenscheduleModal }>
//         <DialogContent className="bg-[#181920] border-none text-white w-[90%] max-w-[400px] p-6 rounded-lg flex flex-col gap-4">
//           <DialogHeader>
//             <DialogTitle className="text-center text-purple-500 text-xl font-semibold pb-4">
//               Connect to Your Device
//             </DialogTitle>
//             <div className={`${openscheduleModal && "h-[50vh]  overflow-y-auto"}`}>
//             <DialogDescription className="flex flex-col gap-6">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="deviceCode" className="md:text-base text-left text-sm text-gray-400">
//                   Device Code
//                 </label>
//                 <input
//                   type="text"
//                   id="deviceCode"
//                   className="bg-[#2f303b] border-none text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="Enter your device code"
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="taskName" className="md:text-base text-sm text-left text-gray-400">
//                   Task Name
//                 </label>
//                 <input
//                   type="text"
//                   id="taskName"
//                   className="bg-[#2f303b] border-none text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="E.g., Living Room Cleanup"
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="cleaningMode" className="md:text-base text-sm text-left text-gray-400">
//                   Cleaning Mode
//                 </label>
//                 <select
//                   id="cleaningMode"
//                   className="bg-[#2f303b] border-none text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 >
//                   <option value="quick">Quick Clean</option>
//                   <option value="deep">Deep Clean</option>
//                   <option value="custom">Custom Mode</option>
//                 </select>
//               </div>
//               {openscheduleModal &&
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="cleaningMode" className="md:text-base text-sm text-left text-gray-400">
//                   Schedule Date
//                 </label>
//                 <Calendar
//                   value={date}
//                   onChange={setDate}
//                   className="bg-[#2f303b] border-none text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
//               </div>
              
//               }
//               {/* {openscheduleModal && 
//                 // console.log(useState<Date>())
//               } */}
              
//               {/* <Popover open={open} onOpenChange={setOpen}>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className=" justify-between"
//                   >
//                     {value
//                       ? options.find(
//                           (option) => option.value === value
//                         )?.label
//                       : "Select framework..."}
//                     <ChevronsUpDown className="opacity-50" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="p-0">
//                   <Command>
//                     <CommandInput placeholder="Search framework..." />
//                     <CommandList>
//                       <CommandEmpty>No framework found.</CommandEmpty>
//                       <CommandGroup>
//                         {options.map((option) => (
//                           <CommandItem
//                             key={option.value}
//                             value={option.value}
//                             onSelect={(currentValue) => {
//                               setValue(
//                                 currentValue === value ? "" : currentValue
//                               );
//                               // setOpen(false);
//                             }}
//                           >
//                             {option.label}
//                             <Check
//                               className={cn(
//                                 "ml-auto",
//                                 value === option.value
//                                   ? "opacity-100"
//                                   : "opacity-0"
//                               )}
//                             />
//                           </CommandItem>
//                         ))}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                 </PopoverContent>
//               </Popover> */}
//              </DialogDescription>
//              </div>
//           </DialogHeader>
//           <div className="mt-6 flex justify-end gap-4">
//             <button
//               onClick={() => {setOpeNewContactModal(false),setOpenscheduleModal(false)}}
//               className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => {
//                 handleConnectDevice, setOpeNewContactModal(false), setOpenscheduleModal(false);
//               }}
//               className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
//             >
//               Connect Device
//             </button>
//           </div>
//         </DialogContent>
//       </Dialog>

//     </div>
//   );
// };

// export default EmptyChatContainer;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles, MessageSquare, CalendarIcon, Settings, Zap } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";

// const EmptyChatContainer = (props) => {
//   const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
//   const [openScheduleModal, setOpenScheduleModal] = useState(false);
//   const [date, setDate] = useState(new Date());

//   const handleConnectDevice = () => {
//     // Implement device connection logic
//   };

//   return (
//     <div className="flex-1 bg-gradient-to-br from-[#1c1d25] to-[#2a2b36] flex flex-col justify-center items-center p-8 relative overflow-hidden">
//       {/* Glossy background effect */}
//       <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-5 mix-blend-overlay"></div>
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>

//       {/* <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative mb-12 z-10"
//       >
//         <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
//         <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-full shadow-lg">
//           <Sparkles className="w-20 h-20 text-white" />
//         </div>
//       </motion.div> */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative mb-8"
//       >
//         <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
//         <div className="relative bg-[#2f303b] p-6 rounded-full">
//           <Sparkles className="w-16 h-16 text-purple-500" />
//         </div>
//       </motion.div>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-center mb-12 z-10"
//       >
//         <h3 className="text-4xl font-bold text-white mb-4">
//           Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">CLAIR</span>
//         </h3>
//         <p className="text-xl text-gray-300 mb-8">
//           Your Intelligent Cleaning Assistant is ready to transform your space.
//         </p>
//       </motion.div>

//       <div className="flex gap-6 z-10">
//         <ActionButton
//           icon={<Zap className="w-6 h-6" />}
//           text="Start a task"
//           onClick={() => setOpenNewTaskModal(true)}
//         />
//         <ActionButton
//           icon={<CalendarIcon className="w-6 h-6" />}
//           text="Schedule a task"
//           onClick={() => setOpenScheduleModal(true)}
//         />
//       </div>

//       <TaskModal
//         isOpen={openNewTaskModal || openScheduleModal}
//         onClose={() => {
//           setOpenNewTaskModal(false);
//           setOpenScheduleModal(false);
//         }}
//         isScheduling={openScheduleModal}
//         date={date}
//         setDate={setDate}
//         onConnect={handleConnectDevice}
//       />
//     </div>
//   );
// };

// const ActionButton = ({ icon, text, onClick }) => (
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 group"
//     onClick={onClick}
//   >
//     <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3 group-hover:bg-opacity-30 transition-all duration-300">
//       {icon}
//     </div>
//     <span className="text-white font-semibold">{text}</span>
//   </motion.button>
// );

// const TaskModal = ({ isOpen, onClose, isScheduling, date, setDate, onConnect }) => (
//   <Dialog open={isOpen} onOpenChange={onClose}>
//     <DialogContent className="bg-gradient-to-br from-[#2a2b36] to-[#1c1d25] border-none text-white max-w-md p-6 rounded-xl">
//       <DialogHeader>
//         <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 pb-4">
//           {isScheduling ? "Schedule a Cleaning Task" : "Start a New Cleaning Task"}
//         </DialogTitle>
//       </DialogHeader>
//       <DialogDescription className="space-y-6">
//         <Input
//           type="text"
//           placeholder="Enter your device code"
//           className="bg-[#2f303b] border-none text-white placeholder-gray-400"
//         />
//         <Input
//           type="text"
//           placeholder="Task name (e.g., Living Room Cleanup)"
//           className="bg-[#2f303b] border-none text-white placeholder-gray-400"
//         />
//         <Select
//           options={[
//             { value: "quick", label: "Quick Clean" },
//             { value: "deep", label: "Deep Clean" },
//             { value: "custom", label: "Custom Mode" },
//           ]}
//           placeholder="Select cleaning mode"
//           className="bg-[#2f303b] border-none text-white"
//         />
//         {isScheduling && (
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-400 mb-2">Schedule Date</label>
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//               className="bg-[#2f303b] rounded-lg p-3 border-none"
//             />
//           </div>
//         )}
//       </DialogDescription>
//       <div className="mt-6 flex justify-end gap-4">
//         <Button onClick={onClose} variant="secondary">
//           Cancel
//         </Button>
//         <Button onClick={onConnect} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//           {isScheduling ? "Schedule Task" : "Start Task"}
//         </Button>
//       </div>
//     </DialogContent>
//   </Dialog>
// );

// export default EmptyChatContainer;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles, Zap, CalendarIcon } from 'lucide-react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";

// const EmptyChatContainer = () => {
//   const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
//   const [openScheduleModal, setOpenScheduleModal] = useState(false);
//   const [date, setDate] = useState(new Date());

//   const handleConnectDevice = () => {
//     // Implement device connection logic
//   };

//   return (
//     <div className="flex-1 bg-gradient-to-br from-[#1c1d25] to-[#2a2b36] flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden">
//       {/* Glossy background effect */}
//       <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-5 mix-blend-overlay"></div>
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>

//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative mb-8"
//       >
//         <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
//         <div className="relative bg-[#2f303b] p-6 rounded-full">
//           <Sparkles className="w-16 h-16 text-purple-500" />
//         </div>
//       </motion.div>
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-center mb-12 z-10"
//       >
//         <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
//           Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">CLAIR</span>
//         </h3>
//         <p className="text-base md:text-xl text-gray-300 mb-8">
//           Your Intelligent Cleaning Assistant is ready to transform your space.
//         </p>
//       </motion.div>

//       <div className="flex flex-col md:flex-row gap-4 md:gap-6 z-10">
//         <ActionButton
//           icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
//           text="Start a task"
//           onClick={() => setOpenNewTaskModal(true)}
//         />
//         <ActionButton
//           icon={<CalendarIcon className="w-5 h-5 md:w-6 md:h-6" />}
//           text="Schedule a task"
//           onClick={() => setOpenScheduleModal(true)}
//         />
//       </div>

//       <TaskModal
//         isOpen={openNewTaskModal || openScheduleModal}
//         onClose={() => {
//           setOpenNewTaskModal(false);
//           setOpenScheduleModal(false);
//         }}
//         isScheduling={openScheduleModal}
//         date={date}
//         setDate={setDate}
//         onConnect={handleConnectDevice}
//       />
//     </div>
//   );
// };

// const ActionButton = ({ icon, text, onClick }) => (
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-3 md:p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 group w-full md:w-auto"
//     onClick={onClick}
//   >
//     <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3 group-hover:bg-opacity-30 transition-all duration-300">
//       {icon}
//     </div>
//     <span className="text-white font-semibold text-sm md:text-base">{text}</span>
//   </motion.button>
// );

// const TaskModal = ({ isOpen, onClose, isScheduling, date, setDate, onConnect }) => (
//   <Dialog open={isOpen} onOpenChange={onClose}>
//     <DialogContent className="bg-gradient-to-br from-[#2a2b36] to-[#1c1d25] border-none text-white max-w-md p-4 md:p-6 rounded-xl">
//       <DialogHeader>
//         <DialogTitle className="text-center text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 pb-4">
//           {isScheduling ? "Schedule a Cleaning Task" : "Start a New Cleaning Task"}
//         </DialogTitle>
//       </DialogHeader>
//       <DialogDescription className="space-y-4 md:space-y-6">
//         <Input
//           type="text"
//           placeholder="Enter your device code"
//           className="bg-[#2f303b] border-none text-white placeholder-gray-400 text-sm md:text-base"
//         />
//         <Input
//           type="text"
//           placeholder="Task name (e.g., Living Room Cleanup)"
//           className="bg-[#2f303b] border-none text-white placeholder-gray-400 text-sm md:text-base"
//         />
//         <Select
//           options={[
//             { value: "quick", label: "Quick Clean" },
//             { value: "deep", label: "Deep Clean" },
//             { value: "custom", label: "Custom Mode" },
//           ]}
//           placeholder="Select cleaning mode"
//           className="bg-[#2f303b] border-none text-white text-sm md:text-base"
//         />
//         {isScheduling && (
//           <div className="mt-4">
//             <label className="block text-sm font-medium text-gray-400 mb-2">Schedule Date</label>
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//               className="bg-[#2f303b] rounded-lg p-3 border-none text-sm md:text-base"
//             />
//           </div>
//         )}
//       </DialogDescription>
//       <div className="mt-6 flex justify-end gap-4">
//         <Button onClick={onClose} variant="secondary" className="text-sm md:text-base">
//           Cancel
//         </Button>
//         <Button onClick={onConnect} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base">
//           {isScheduling ? "Schedule Task" : "Start Task"}
//         </Button>
//       </div>
//     </DialogContent>
//   </Dialog>
// );

// export default EmptyChatContainer;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import Layout from "../layout/layout";

const EmptyChatContainer = () => {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleConnectDevice = () => {
    // Implement device connection logic
  };

  return (
    <Layout>
      <div className="flex-1 bg-gradient-to-br from-[#1c1d25] to-[#2a2b36] flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden min-h-[calc(100vh-4rem)] md:w-[77.2vw] md:min-h-screen">
        {/* Glossy background effect */}
        <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-3xl"></div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          <div className="relative bg-[#2f303b] p-6 rounded-full">
            <Sparkles className="w-16 h-16 text-purple-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 z-10"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">CLAIR</span>
          </h3>
          <p className="text-base md:text-xl text-gray-300 mb-8">
            Your Intelligent Cleaning Assistant is ready to transform your space.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 z-10">
          <ActionButton
            icon={<Zap className="w-5 h-5 md:w-6 md:h-6" />}
            text="Start a task"
            onClick={() => setOpenNewTaskModal(true)}
          />
          <ActionButton
            icon={<CalendarIcon className="w-5 h-5 md:w-6 md:h-6" />}
            text="Schedule a task"
            onClick={() => setOpenScheduleModal(true)}
          />
        </div>

        <TaskModal
          isOpen={openNewTaskModal || openScheduleModal}
          onClose={() => {
            setOpenNewTaskModal(false);
            setOpenScheduleModal(false);
          }}
          isScheduling={openScheduleModal}
          date={date}
          setDate={setDate}
          onConnect={handleConnectDevice}
        />
      </div>
    </Layout>
  );
};

const ActionButton = ({ icon, text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-3 md:p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 group w-full md:w-auto"
    onClick={onClick}
  >
    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3 group-hover:bg-opacity-30 transition-all duration-300">
      {icon}
    </div>
    <span className="text-white font-semibold text-sm md:text-base">{text}</span>
  </motion.button>
);

const TaskModal = ({ isOpen, onClose, isScheduling, date, setDate, onConnect }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-gradient-to-br from-[#2a2b36] to-[#1c1d25] border-none text-white max-w-md p-4 md:p-6 rounded-xl">
      <DialogHeader>
        <DialogTitle className="text-center text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 pb-4">
          {isScheduling ? "Schedule a Cleaning Task" : "Start a New Cleaning Task"}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="space-y-4 md:space-y-6">
        <Input
          type="text"
          placeholder="Enter your device code"
          className="bg-[#2f303b] border-none text-white placeholder-gray-400 text-sm md:text-base"
        />
        <Input
          type="text"
          placeholder="Task name (e.g., Living Room Cleanup)"
          className="bg-[#2f303b] border-none text-white placeholder-gray-400 text-sm md:text-base"
        />
        <Select
          options={[
            { value: "quick", label: "Quick Clean" },
            { value: "deep", label: "Deep Clean" },
            { value: "custom", label: "Custom Mode" },
          ]}
          placeholder="Select cleaning mode"
          className="bg-[#2f303b] border-none text-white text-sm md:text-base"
        />
        {isScheduling && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">Schedule Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-[#2f303b] rounded-lg p-3 border-none text-sm md:text-base"
            />
          </div>
        )}
      </DialogDescription>
      <div className="mt-6 flex justify-end gap-4">
        <Button onClick={onClose} variant="secondary" className="text-sm md:text-base">
          Cancel
        </Button>
        <Button onClick={onConnect} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base">
          {isScheduling ? "Schedule Task" : "Start Task"}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default EmptyChatContainer;





