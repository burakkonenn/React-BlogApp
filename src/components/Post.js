import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost, updatePost } from '../redux/postsSlice'
import { v4 as uuidv4 } from 'uuid';
import BlogForm from './BlogForm';


const Post = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [updatedTitle, SetUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items)
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);

    return (
        <div>
            <BlogForm />

            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-md-6'>
                    {posts.length > 0 ? posts.map(post =>

                        <div className='card' key={post.id}>
                            <div className='card-header'>
                                <h2>{post.title}</h2>
                            </div>
                            <div className='card-body'>
                                <p>{post.description}</p>
                            </div>
                            <div className='card-footer p-3'>
                                <button className='btn btn-primary' onClick={() => { 
                                    setIsEdit(true); 
                                    setId(post.id) }}>Edit</button>
                                <button className='btn btn-danger' onClick={() => dispatch(deletePost(post.id))}>DELETE</button>
                            </div>
                            {isEdit && id == post.id && (
                                <>
                                    <input
                                        value={updatedTitle}
                                        onChange={(e) => SetUpdatedTitle(e.target.value)}
                                        type='text'
                                        placeholder='updated title'
                                    ></input>

                                    <input
                                        value={updatedDescription}
                                        onChange={(e) => setUpdatedDescription(e.target.value)}
                                        type='text'
                                        placeholder='updated description'
                                    ></input>

                                    <button
                                        onClick={() => {
                                            dispatch(
                                                updatePost({ id: post.id, title: updatedTitle, description: updatedDescription })
                                            )
                                        }}>Updated
                                    </button>
                                </>
                            )}

                        </div>
                    ) : "no posts"}


                </div>
            </div>
        </div>
    )
}

export default Post
