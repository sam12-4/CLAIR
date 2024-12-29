// import React, { useState } from 'react'
// import { Search, ChevronDown, ChevronRight, Sparkles, Camera, Bot, Bell, Battery, Trash2, RotateCw, X } from 'lucide-react'
// import ProfileInfo from './components/profile-info'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { motion, AnimatePresence } from 'framer-motion'
// import WebcamPopup from '../webcam/webcam'

// export default function ContactsContainer({ onClose }) {
//   const [openSections, setOpenSections] = useState({
//     'Room Monitoring': true,
//     'Cleaning Tasks': true,
//     'Notifications': true,
//     'System Status': true
//   })
//   const [isWebcamOpen, setIsWebcamOpen] = useState(false)

//   const toggleSection = (title) => {
//     setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
//   }

//   return (
//     <div className='bg-gradient-to-b from-[#1b1c24] to-[#2a2b33] border-r border-[#2f303b] w-full h-screen flex flex-col text-white'>
//       <div className="pt-3 flex justify-between items-center px-4">
//         <Logo />
//         {onClose && (
//           <Button
//             variant="ghost"
//             size="icon"
//             className="text-white md:hidden"
//             onClick={onClose}
//           >
//             <X className="h-6 w-6" />
//           </Button>
//         )}
//       </div>
//       <div className="px-4 py-2">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <Input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-[#2f303b] border-none text-white placeholder-gray-400 pl-10 focus:ring-2 focus:ring-[#8338ec] focus:border-transparent transition-all duration-300"
//           />
//         </div>
//       </div>
//       <ScrollArea className="flex-grow px-2">
//         <div className="p-2">
//           <Section title="Cleaning Tasks" isOpen={openSections['Cleaning Tasks']} onToggle={() => toggleSection('Cleaning Tasks')}>
//             <TaskItem name="Vacuum floors" progress={75} />
//             <TaskItem name="Dust surfaces" progress={30} />
//             <TaskItem name="Mop kitchen" progress={0} />
//           </Section>
//           <Section title="Notifications" isOpen={openSections['Notifications']} onToggle={() => toggleSection('Notifications')}>
//             <NotificationItem name="Battery low" notification={true} color="red" icon={Battery} />
//             <NotificationItem name="Cleaning complete" notification={true} color="green" icon={Trash2} />
//             <NotificationItem name="Software update" notification={false} color="blue" icon={RotateCw} />
//           </Section>
//           <Section title="System Status" isOpen={openSections['System Status']} onToggle={() => toggleSection('System Status')}>
//             <StatusItem name="Battery" value="75%" />
//             <StatusItem name="Dust Bin" value="50% full" />
//             <StatusItem name="Water Tank" value="25% full" />
//           </Section>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="absolute bottom-4 right-4 bg-[#2f303b] hover:bg-[#3a3b47] text-white rounded-full p-2 shadow-lg"
//           onClick={() => setIsWebcamOpen(true)}
//         >
//           <Camera className="h-6 w-6" />
//         </Button>
//       </ScrollArea>
//       <ProfileInfo />
//       {isWebcamOpen && <WebcamPopup onClose={() => setIsWebcamOpen(false)} />}
//     </div>
//   )
// }

// function Logo() {
//   return (
//     <motion.div 
//       className="flex p-3 md:p-5 justify-start items-center gap-2 md:gap-4"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="relative w-8 h-8 md:w-10 md:h-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8338ec] to-[#3a86ff] rounded-lg transform rotate-3"></div>
//         <div className="absolute inset-0 bg-[#1b1c24] rounded-lg flex items-center justify-center transform -rotate-3">
//           <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-[#8338ec]" />
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <span className="text-base md:text-lg lg:text-2xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">CLAIR</span>
//         <span className="text-[10px] md:text-xs font-semibold text-[#8338ec] pt-0.5 md:pt-1">AI</span>
//       </div>
//     </motion.div>
//   )
// }

// function Section({ title, children, isOpen, onToggle }) {
//   return (
//     <div className="mb-4 md:mb-6">
//       <motion.div 
//         className="flex items-center justify-between mb-2 cursor-pointer" 
//         onClick={onToggle}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <h6 className='uppercase tracking-widest text-neutral-400 font-medium text-opacity-90 text-[10px] md:text-xs'>{title}</h6>
//         <Button variant="ghost" size="icon" className="h-6 w-6 text-neutral-400 hover:text-white hover:bg-[#2f303b] transition-colors duration-300">
//           {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
//         </Button>
//       </motion.div>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// function TaskItem({ name, progress }) {
//   return (
//     <motion.div 
//       className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
//       whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <Bot className="w-4 h-4 text-gray-400" />
//       <div className="flex-grow">
//         <span className="text-xs md:text-sm">{name}</span>
//         <div className="w-full bg-gray-700 rounded-full h-1 md:h-2 mt-1">
//           <div 
//             className="bg-gradient-to-r from-[#8338ec] to-[#3a86ff] h-1 md:h-2 rounded-full" 
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// function NotificationItem({ name, notification, color, icon: Icon }) {
//   return (
//     <motion.div 
//       className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
//       whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <div className={notification ? `animate-pulse` : ''}>
//         <Icon className={`w-4 h-4 text-${color}-400`} />
//       </div>
//       <span className="text-xs md:text-sm flex-grow">{name}</span>
//       {notification && (
//         <div className={`bg-${color}-400 text-white text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-full`}>
//           New
//         </div>
//       )}
//     </motion.div>
//   )
// }

// function StatusItem({ name, value }) {
//   return (
//     <motion.div 
//       className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
//       whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <span className="text-xs md:text-sm">{name}</span>
//       <span className="text-xs md:text-sm font-medium text-[#8338ec]">{value}</span>
//     </motion.div>
//   )
// }

import React, { useState, lazy, Suspense } from 'react'
import { Search, ChevronDown, ChevronRight, Sparkles, Camera, Bot, Battery, Trash2, RotateCw, X } from 'lucide-react'
import ProfileInfo from './components/profile-info'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from 'framer-motion'

const WebcamPopup = lazy(() => import('../webcam/webcam'))

export default function ContactsContainer({ onClose }) {
  const [openSections, setOpenSections] = useState({
    'Room Monitoring': true,
    'Cleaning Tasks': true,
    'Notifications': true,
    'System Status': true
  })
  const [isWebcamOpen, setIsWebcamOpen] = useState(false)

  const toggleSection = (title) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <div className='bg-gradient-to-b from-[#1b1c24] to-[#2a2b33] border-r border-[#2f303b] w-full h-screen flex flex-col text-white'>
      <div className="pt-3 flex justify-between items-center px-4">
        <Logo />
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#2f303b] border-none text-white placeholder-gray-400 pl-10 focus:ring-2 focus:ring-[#8338ec] focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>
      <ScrollArea className="flex-grow px-2">
        <div className="p-2">
          <Section title="Cleaning Tasks" isOpen={openSections['Cleaning Tasks']} onToggle={() => toggleSection('Cleaning Tasks')}>
            <TaskItem name="Vacuum floors" progress={75} />
            <TaskItem name="Dust surfaces" progress={30} />
            <TaskItem name="Mop kitchen" progress={0} />
          </Section>
          <Section title="Notifications" isOpen={openSections['Notifications']} onToggle={() => toggleSection('Notifications')}>
            <NotificationItem name="Battery low" notification={true} color="red" icon={Battery} />
            <NotificationItem name="Cleaning complete" notification={true} color="green" icon={Trash2} />
            <NotificationItem name="Software update" notification={false} color="blue" icon={RotateCw} />
          </Section>
          <Section title="System Status" isOpen={openSections['System Status']} onToggle={() => toggleSection('System Status')}>
            <StatusItem name="Battery" value="75%" />
            <StatusItem name="Dust Bin" value="50% full" />
            <StatusItem name="Water Tank" value="25% full" />
          </Section>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 bg-[#2f303b] hover:bg-[#3a3b47] text-white rounded-full p-2 shadow-lg"
          onClick={() => setIsWebcamOpen(true)}
        >
          <Camera className="h-6 w-6" />
        </Button>
      </ScrollArea>
      <ProfileInfo />
      {isWebcamOpen && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">Loading...</div>}>
          <WebcamPopup onClose={() => setIsWebcamOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}

function Logo() {
  return (
    <motion.div 
      className="flex p-3 md:p-5 justify-start items-center gap-2 md:gap-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8338ec] to-[#3a86ff] rounded-lg transform rotate-3"></div>
        <div className="absolute inset-0 bg-[#1b1c24] rounded-lg flex items-center justify-center transform -rotate-3">
          <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-[#8338ec]" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-base md:text-lg lg:text-2xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">CLAIR</span>
        <span className="text-[10px] md:text-xs font-semibold text-[#8338ec] pt-0.5 md:pt-1">AI</span>
      </div>
    </motion.div>
  )
}

function Section({ title, children, isOpen, onToggle }) {
  return (
    <div className="mb-4 md:mb-6">
      <motion.div 
        className="flex items-center justify-between mb-2 cursor-pointer" 
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h6 className='uppercase tracking-widest text-neutral-400 font-medium text-opacity-90 text-[10px] md:text-xs'>{title}</h6>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-neutral-400 hover:text-white hover:bg-[#2f303b] transition-colors duration-300">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function TaskItem({ name, progress }) {
  return (
    <motion.div 
      className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
      whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
      whileTap={{ scale: 0.95 }}
    >
      <Bot className="w-4 h-4 text-gray-400" />
      <div className="flex-grow">
        <span className="text-xs md:text-sm">{name}</span>
        <div className="w-full bg-gray-700 rounded-full h-1 md:h-2 mt-1">
          <div 
            className="bg-gradient-to-r from-[#8338ec] to-[#3a86ff] h-1 md:h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  )
}

function NotificationItem({ name, notification, color, icon: Icon }) {
  return (
    <motion.div 
      className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
      whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={notification ? `animate-pulse` : ''}>
        <Icon className={`w-4 h-4 text-${color}-400`} />
      </div>
      <span className="text-xs md:text-sm flex-grow">{name}</span>
      {notification && (
        <div className={`bg-${color}-400 text-white text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-full`}>
          New
        </div>
      )}
    </motion.div>
  )
}

function StatusItem({ name, value }) {
  return (
    <motion.div 
      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#2f303b] cursor-pointer transition-colors duration-200"
      whileHover={{ scale: 1.05, backgroundColor: '#2f303b' }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xs md:text-sm">{name}</span>
      <span className="text-xs md:text-sm font-medium text-[#8338ec]">{value}</span>
    </motion.div>
  )
}

