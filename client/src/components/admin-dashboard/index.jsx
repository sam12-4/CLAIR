import React, { useEffect, useState } from 'react'
import { ThemeProvider, CssBaseline, Box, GlobalStyles } from '@mui/material'
import  {Sidebar} from '../side-bar'
import  {Header} from './header'
import  {Overview} from '../overview'
import  {CustomerList} from '../customer-list'
import  {PropertyList} from '../property-list'
import  {CameraGrid} from '../camera-grid'
import  {ScheduleCalendar} from '../schedule-calendar'
import  {MessageCenter} from '../message-center'
import { AnimatePresence, motion } from 'framer-motion'
import { lightTheme, darkTheme } from '@/styles/themes'
import { useAppStore } from '@/store'
import { useNavigate } from 'react-router-dom'


const drawerWidth = 260 

const globalStyles = {
  '*::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '*::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#94a3b8',
    borderRadius: '4px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: '#64748b',
  },
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
}

const AdminDashboard = () => {
  const { adminInfo } = useAppStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview')
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     if (!adminInfo) {
//         toast.error("Unauthorized Access");
//         navigate('/admin');
//     }
// }, [adminInfo, navigate]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDarkMode(e.matches)
    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleThemeToggle = () => {
    setDarkMode(!darkMode)
  }

  const renderContent = () => {
    const components = {
      overview: Overview,
      customers: CustomerList,
      properties: PropertyList,
      cameras: CameraGrid,
      schedule: ScheduleCalendar,
      messages: MessageCenter,
    }

    const Component = components[activeTab]
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: {
              xs: '100%',
              sm: `calc(100% - ${drawerWidth}px)`,
            },
            // marginLeft: {
            //   xs: 0,
            //   sm: `${drawerWidth}px`,
            // },
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
            transition: 'margin-left 0.3s ease-in-out',
          }}
        >
          <Header
            handleDrawerToggle={handleDrawerToggle}
            darkMode={darkMode}
            handleThemeToggle={handleThemeToggle}
            drawerWidth={drawerWidth}
          />
          <div className='pt-16'></div>
          <Box
            sx={{
              flexGrow: 1,
              p: { xs: 2, sm: 3 },
              pt: '640px',
              overflow: 'auto',
              '::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              maxWidth: '1600px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AdminDashboard
