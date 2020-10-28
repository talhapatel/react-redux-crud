import React, { useState } from 'react'
import {connect} from 'react-redux';
import postReducer from './reducers/postReducer';
import { useDispatch } from 'react-redux'

function PostForm() {

    const [title,setTitle]=useState('');
    const [message, setMessage] = useState('');
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();

        const data={
            id:new Date(),
            title,
            message,
            editing:false
        }
        dispatch({
            type:'ADD_POST',
            data
        })
        console.log(data);
        setTitle('');
        setMessage('');
    }

    return (
        <div className="post-container">
            <h1 className="post_heading">Create Post</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input required type="text" placeholder="Enter Post Title" value={title} onChange={e=>setTitle(e.target.value)}/><br/>
                <textarea required rows="5" cols="28" placeholder="Enter Post" value={message} onChange={e=>setMessage(e.target.value)}/><br/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default connect()(PostForm);
