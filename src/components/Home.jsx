import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/system';
import '../index.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import BlogList from './BlogList';
import { blogList } from '../config/data';





const Home = () => {
    const [value, setValue] = React.useState('1');
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchBar = event => {
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = () => {
      console.log(searchKey);
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog)=>blog.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()))

      setBlogs(filteredBlogs);
      console.log(filteredBlogs);
    };
    const handleClearSearch = () => {
      setBlogs(blogList);
      setSearchKey('');
    }

    return (
        <Stack>
            <Navbar />
            <Box sx={{ width: '100%', typography: 'body1', padding: '3% 10%' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} >
            <Tab label="All Submissions" value="1" />
            <Tab label="Favorite Submissions" value="2" />
            <Searchbar 
            value={searchKey} 
            formSubmit={handleSearchBar} 
            handleSearch={(e)=>setSearchKey(e.target.value)} clearSearch={handleClearSearch} />
          </TabList>
        </Box>
        <TabPanel value="1"><BlogList blogs={blogs} /></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
        </Stack>
    )
}

export default Home;
