import React, { useState } from "react";

function BlogForm({addBlog}) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) 
        {
            addBlog({ title, description });
            setTitle('');
            setDescription('');
        }
    };


    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit} className="form-design">
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            type="text"
                            placeholder="Description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button className="btn-1">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BlogForm;
