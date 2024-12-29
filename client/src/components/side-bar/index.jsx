import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  Divider,
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Home as HomeIcon,
  Videocam as VideocamIcon,
  CalendarToday as CalendarIcon,
  Message as MessageIcon,
  Settings as SettingsIcon,
  ChevronLeft,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const menuItems = [
  { id: 'overview', icon: DashboardIcon, label: 'Overview' },
  { id: 'customers', icon: PeopleIcon, label: 'Customers' },
  { id: 'properties', icon: HomeIcon, label: 'Properties' },
  { id: 'cameras', icon: VideocamIcon, label: 'Cameras' },
  { id: 'schedule', icon: CalendarIcon, label: 'Schedule' },
  { id: 'messages', icon: MessageIcon, label: 'Messages' },
]

export function Sidebar ({ activeTab, setActiveTab, mobileOpen, handleDrawerToggle, drawerWidth }) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const ListItemComponent = motion(ListItem)

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.mode === 'dark'
          ? 'rgba(17, 25, 40, 0.95)'
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <Box
        sx={{
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(90deg, #818cf8 0%, #f472b6 100%)'
              : 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Clean Sweep AI
        </Typography>
        {!isDesktop && (
          <IconButton onClick={handleDrawerToggle} size="small">
            <ChevronLeft />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ opacity: 0.1 }} />
      <List sx={{ flexGrow: 1, px: 2, py: 1 }}>
        {menuItems.map((item) => (
          <ListItemComponent
            button
            key={item.id}
            selected={activeTab === item.id}
            onClick={() => {
              setActiveTab(item.id)
              if (!isDesktop) handleDrawerToggle()
            }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              mb: 0.5,
              borderRadius: 2,
              overflow: 'hidden',
              '&.Mui-selected': {
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(129, 140, 248, 0.15)'
                  : 'rgba(99, 102, 241, 0.15)',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(129, 140, 248, 0.25)'
                    : 'rgba(99, 102, 241, 0.25)',
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeTab === item.id
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                minWidth: 36,
              }}
            >
              <item.icon />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                fontWeight: activeTab === item.id ? 600 : 400,
              }}
            />
          </ListItemComponent>
        ))}
      </List>
      <Divider sx={{ opacity: 0.1 }} />
      <List sx={{ px: 2, py: 1 }}>
        <ListItemComponent
          button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          sx={{ borderRadius: 2 }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            primaryTypographyProps={{
              fontSize: '0.875rem',
            }}
          />
        </ListItemComponent>
      </List>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={isDesktop || mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: 'none',
            backgroundImage: 'none',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 0 15px rgba(0, 0, 0, 0.3)'
              : '0 0 15px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}


