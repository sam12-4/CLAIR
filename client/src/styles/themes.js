import { createTheme } from '@mui/material/styles'

const glassmorphismStyles = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  },
  dark: {
    background: 'rgba(17, 25, 40, 0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
}

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1rem', fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === 'light' ? glassmorphismStyles.light : glassmorphismStyles.dark),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === 'light' ? glassmorphismStyles.light : glassmorphismStyles.dark),
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(theme.palette.mode === 'light' ? glassmorphismStyles.light : glassmorphismStyles.dark),
        }),
      },
    },
  },
}

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#f8fafc',
      paper: 'rgba(255, 255, 255, 0.7)',
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
    },
    success: {
      main: '#22c55e',
      light: '#4ade80',
      dark: '#16a34a',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
  },
})

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8',
      light: '#a5b4fc',
      dark: '#6366f1',
    },
    secondary: {
      main: '#f472b6',
      light: '#f9a8d4',
      dark: '#ec4899',
    },
    background: {
      default: '#0f172a',
      paper: 'rgba(17, 25, 40, 0.75)',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    success: {
      main: '#4ade80',
      light: '#86efac',
      dark: '#22c55e',
    },
    error: {
      main: '#f87171',
      light: '#fca5a5',
      dark: '#ef4444',
    },
  },
})

