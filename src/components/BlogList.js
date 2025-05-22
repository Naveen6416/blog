import React from 'react'

function BlogList({ blogs, deleteBlog, selectBlogToEdit }) {
  
  

  return (
    <div className='mt-4'>
      <table className="table table-striped table-bordered">
        <thead className="table">
          <tr>
            <th>S.No</th>
            <th>Titles</th>
            <th>Descriptions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {blogs.map((blogs, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{blogs.title}</td>
              <td>{blogs.description}</td>
              <td>
                <button onClick={() => selectBlogToEdit(index)} className='btn btn-warning btn-sm'>Edit</button>
                <button onClick={()=>deleteBlog(index)} className='btn btn-danger btn-sm'>Delete</button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default BlogList
