import { Box, useColorModeValue } from '@chakra-ui/react'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export interface NavItem {
  label: string
  to?: string
}

export const NavItem: FC<NavItem> = ({ label, to }) => {
  return (
    <Box
      as={RouterLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={to}>
      {label}
    </Box>
  )
}
