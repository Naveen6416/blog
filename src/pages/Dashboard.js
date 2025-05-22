import React, { useState } from 'react'
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList'

function Dashboard() {

    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs([blog, ...blogs]);
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h4 className="mt-4 mb-4 title-heading">Blog Admin Portal</h4>
                <BlogForm addBlog={addBlog} />
                <BlogList blogs={blogs} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
