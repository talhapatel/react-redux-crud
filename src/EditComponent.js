import React, { useState } from 'react'
import {connect,useDispatch} from 'react-redux';

function EditComponent(props) {
    const [title,setTitle] =useState('');
    const [message,setMessage] = useState('');
    const dispatch=useDispatch();

    const handleEdit=(e)=>{
        e.preventDefault();
        const newTitle=title
        const newMessage=message
        const data= {
                newTitle,
                newMessage
        }
        console.log("edit update",title)
        dispatch({type:'UPDATE',id:props.post.id,data:data})
    }
    return (
        <div>
            <form onSubmit={handleEdit}>
                <input required type="text" onChange={(e)=>{setTitle(e.target.value)}}
                defaultValue={props.post.title} placeholder="Enter Post Title"/><br></br>
                <textarea required rows="5" onChange={(e)=>{setMessage(e.target.value)}}
                defaultValue={props.post.message} cols="28" placeholder="Enter Post"/><br></br>
                <button>Update</button>
            </form>
        </div>
    )
}

export default connect()(EditComponent);
