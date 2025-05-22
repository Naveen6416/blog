import React, { useState } from 'react'
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList'

function Dashboard() {

    const [blogs, setBlogs] = useState([]);
    const [blogToEdit, setBlogToEdit] = useState(null);

    const addBlog = (blog) => {
        setBlogs([blog, ...blogs]);
    };

    const selectBlogToEdit  = (index) =>{
        setBlogToEdit({...blogs[index],index});
        console.log(blogToEdit);
    }

    const deleteBlog = (index) =>{
        const newBlogs = [...blogs];
        newBlogs.splice(index, 1);
        setBlogs(newBlogs);
        setBlogToEdit(null);
    }

    const editBlog = (updatedBlog) => {
        const newBlogs = [...blogs];
        newBlogs[updatedBlog.index] = {
            title: updatedBlog.title,
            description: updatedBlog.description,
        };
        setBlogs(newBlogs);
        setBlogToEdit(null);
    };


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h4 className="mt-4 mb-4 title-heading">Blog Admin Portal</h4>
                <BlogForm addBlog={addBlog} blogToEdit={blogToEdit} editBlog={editBlog} />
                <BlogList blogs={blogs} deleteBlog={deleteBlog} selectBlogToEdit ={selectBlogToEdit }  />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
