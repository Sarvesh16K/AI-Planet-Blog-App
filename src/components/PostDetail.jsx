import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blogList } from '../config/data';
import { Link } from 'react-router-dom';
import '../index.css';
import EditIcon from '@mui/icons-material/Edit';

const PostDetail = () => {

  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id===parseInt(id))

    if(blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
    <div>
      <Link to='/' ><span>Go Back</span></Link>
    </div>
    {
      blog? <div className='blog-wrap'>
              <img className='logo' src={require('../images/AIP.png')} height={70} width={100} />
              <div className='post-detail-head'>
                <img className='post-img' src={blog.CoverImage} />
                <div className='post-title'>{blog.title}</div>
                <div></div>
                <div className='post-btn'>
                  <button>Edit</button>
                  <br/>
                  <button>Delete</button>
                </div>
                <div className='post-sum'>
                  {blog.Summary}
                  <br/>
                  <div className='post-star'>
                  <button>Add to Favorite</button>|
                  <button>{blog.strdt}</button>
                  </div>
                </div>
              </div>
              <div style={{padding:'10% 40% 10% 10%'}}>
                <h3>Description</h3>
                <br/>
                {blog.Description}
              </div>
              <div className='post-lnk'>

                <button><Link>GitHub Repo</Link></button>
                <button><Link>Other Link</Link></button>
              </div>
            </div>
            :
            'Sorry We ran into some issue. Try again'
    }
    </>
  )
}

export default PostDetail;
