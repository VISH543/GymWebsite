import React from 'react'
import { Box } from '@mui/system'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import { Route, Routes } from 'react-router-dom'
import Record from './pages/Record'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto"> 
    <Navbar/>
    
    
    <Routes>
      <Route exact path='/' element={ <Home/> }/>
      <Route exact path='/record' element={ <Record/> }/>
      <Route exact path='/exercise/:id' element={ <ExerciseDetails/> }/>
    </Routes>
    </Box>
  )
}

export default App