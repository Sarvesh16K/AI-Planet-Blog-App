import { Link } from '@mui/material';
import React from 'react'
import '../index.css';

const BlogItem = ({blog:{
    id,
    title,
    CoverImage,
    Summary,
    Description,
    strdt,
    enddt,
    GithubLink,
    updt
},}) => {
  return (
    <>
    <div className='blogItem-wrap'>
      <Link href={`/post/${id}`} >
        <img className='cover' src={CoverImage} alt='Cover Image' id={id}/>
        </Link>
        <div className='BlogTitle'>
          <b>{title}</b>
        </div>
        <div className='summary'>
          {Summary.slice(0,100)}...
        </div>
        <div></div>
        <div className='up'>
          uploaded {updt} days ago
        </div>
    </div>
    
    </>
  )
}

export default BlogItem
