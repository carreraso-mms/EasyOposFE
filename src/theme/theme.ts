import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 1024px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
  colors: {
    background: {
      light: '#1E1E1E',
      dark: '#121212',
    },
    primary: {
      100: '#333333',
      200: '#2C2C2C',
      300: '#1F1F1F',
      400: '#3B3B3B',
      500: '#4A4A4A',
      600: '#5A5A5A',
      700: '#6B6B6B',
      800: '#7C7C7C',
      900: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      muted: '#8A8A8A',
    },
    accent: {
      500: '#FF4081',
      600: '#E53E3E',
    },
    border: {
      default: '#3B3B3B',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Roboto', sans-serif`,
    mono: `'Menlo', monospace`,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.3)',
  },
  sizes: {
    xs: '4rem',
    sm: '8rem',
    md: '16rem',
    lg: '24rem',
    xl: '32rem',
    '2xl': '40rem',
    full: '100%',
  },

  // Espaciado
  space: {
    px: '1px',
    '0.5': '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
})

export default theme
