import { createSystem, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: {
          '900': { value: '#1E1E1E' }, // Fondo principal (oscuro)
          '800': { value: '#2C2C2C' }, // Fondo de componentes secundarios
          '700': { value: '#3D3D3D' }, // Fondo para hover
          '600': { value: '#4E4E4E' }, // Borde sutil o fondo adicional
        },
        primary: {
          '500': { value: '#10A37F' }, // Color principal, botones y elementos destacados
          '400': { value: '#15C39A' }, // Variación para hover
        },
        text: {
          '900': { value: '#FFFFFF' }, // Texto principal
          '700': { value: '#E0E0E0' }, // Texto secundario
          '500': { value: '#B0B0B0' }, // Texto menos destacado
        },
        accent: {
          '500': { value: '#FF4081' }, // Color de acento para resaltar elementos específicos
        },
      },
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
        mono: { value: 'Menlo, monospace' },
      },
      fontSizes: {
        xs: { value: '12px' },
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '18px' },
        xl: { value: '20px' },
        '2xl': { value: '24px' },
        '3xl': { value: '30px' },
        '4xl': { value: '36px' },
        '5xl': { value: '48px' },
        '6xl': { value: '64px' },
      },
      fontWeights: {
        normal: { value: 400 },
        medium: { value: 500 },
        bold: { value: 700 },
      },
      spacing: {
        px: { value: '1px' },
        1: { value: '4px' },
        2: { value: '8px' },
        3: { value: '12px' },
        4: { value: '16px' },
        5: { value: '20px' },
        6: { value: '24px' },
        8: { value: '32px' },
        10: { value: '40px' },
        12: { value: '48px' },
        16: { value: '64px' },
        20: { value: '80px' },
        24: { value: '96px' },
        32: { value: '128px' },
        40: { value: '160px' },
        48: { value: '192px' },
        56: { value: '224px' },
        64: { value: '256px' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '2px' },
        md: { value: '4px' },
        lg: { value: '8px' },
        full: { value: '9999px' },
      },
      shadows: {
        sm: { value: '0 1px 2px rgba(0, 0, 0, 0.05)' },
        md: { value: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        lg: { value: '0 10px 15px rgba(0, 0, 0, 0.15)' },
        xl: { value: '0 20px 25px rgba(0, 0, 0, 0.2)' },
      },
    },
  },
})

const system = createSystem(config)

export default system
