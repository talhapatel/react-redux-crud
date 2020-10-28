import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent'


function AllPost(props) {
    return (
        <div>
            <h1>All Post</h1>
            {console.log(props)}
            {props.posts.map((post)=>(
            <div key={post.id}>
                { post.editing?
                <EditComponent post={post} key={post.id}/>:
                    <Post key={post.id} post={post}/>}
            
            </div>
            ))}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        posts:state
    }
}
export default connect(mapStateToProps)(AllPost);
//export default AllPost
