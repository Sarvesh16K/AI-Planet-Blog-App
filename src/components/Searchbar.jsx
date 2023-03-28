import { borderRadius } from '@mui/system';
import React from 'react'
import '../index.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Searchbar = ({val, handleSearch, clearSearch, formSubmit}) => {
    return (
    <div className='searchbar-wrap' >
      <form onSubmit={formSubmit} >
        <input 
        style={{borderRadius: '100px 0px 0px 100px', height: '30px', outline: 'none', borderWidth: '1px'}} 
        type='text' 
        placeholder='Search..' 
        onChange={handleSearch} 
        val={val} />
        {val && <span onClick={clearSearch} >X</span>}
        <button style={{borderRadius: '0px 100px 100px 0px', height: '35px', outline: 'none', borderWidth: '1px', backgroundColor:'lightgreen'}}>Go</button>
      </form>
    </div>
    )
}

export default Searchbar;
