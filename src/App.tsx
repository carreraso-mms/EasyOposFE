import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Box bgColor="white">
      <Header />
      <Container maxW="container.xl" p="0" bgColor={'grey.100'}>
        <Box minH="60vh" minW="100%" maxW="100%" p="0">
          <Outlet />
        </Box>{' '}
      </Container>
    </Box>
  )
}

export default App
