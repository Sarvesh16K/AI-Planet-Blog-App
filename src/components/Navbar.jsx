import React from 'react';
import { Box } from '@mui/system';
import '../index.css';

const Navbar = () => {
  return (
    <>
    <img className='logo' src={require('../images/AIP.png')} height={70} width={100} />
            <Box className='hackSub' sx={{backgroundColor:'#003366', py:'100px', color:'#fff', backgroundSize: '100%'}}>
                <div className='container-fluid'>
                <div className='Para' >
                <h1>Hackathon Submissions</h1>
                <p><b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque consequatur illo nesciunt, neque voluptatum in ipsum et consectetur quis commodi deserunt aliquid tempora molestiae incidunt.</b></p>
                <br/>
                <button className='buttonup'><h3>Upload Submission</h3></button>
                </div>
                <div className='img-col'>
                    <img src={require('../images/Hand holding bulb 3D.png')} height='300px' />
                </div>
                </div>
            </Box>
            </>
  )
}

export default Navbar
