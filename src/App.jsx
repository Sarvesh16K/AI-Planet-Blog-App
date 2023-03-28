import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import PostDetail from './components/PostDetail';
import Home from './components/Home';
import UploadDetail from './components/UploadDetail';
import Navbar from './components/Navbar';
import AIP from './images/AIP.png'

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/upload' element={<UploadDetail />} />
          <Route path='/post/:id' element={<PostDetail/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

