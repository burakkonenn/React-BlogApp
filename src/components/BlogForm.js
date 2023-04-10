import React, { useState } from 'react'
import { addPost } from '../redux/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';



const BlogForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <h2>BlogApp with React</h2>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input
                            className='form-control'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type='text'
                            placeholder='Enter Post Title'>
                        </input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea
                            className='form-control'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type='text'
                            placeholder='Enter Post Description'>
                        </textarea>
                    </div>
                    <button
                        className='btn btn-primary'
                        onClick={() => {
                            dispatch(addPost({ id: uuidv4(), title, description }))
                            setTitle("");
                            setDescription("")
                        }}>Add Blog</button>
                </div>
            </div>
        </div>
    )
}

export default BlogForm
