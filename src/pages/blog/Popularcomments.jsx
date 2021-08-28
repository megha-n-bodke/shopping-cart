import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Popularcomments = () => {

    const  [posts,setPosts] = useState([])
    let str="";
    let res="";
    const url = " https://jsonplaceholder.typicode.com/comments"
    useEffect(() => {
        axios
        .get(url,{params:{
            _limit: 10}})
        .then(res=>{
            console.log(res)
            setPosts(res.data)})
            .catch(err=>{console.log(err)
            })
        },[])
        
    return <div>
        
            {posts.map(post =>(
                <>
                <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeautiful-nature&psig=AOvVaw2JDUtsenzh-aZ1QwQy5qnE&ust=1629884113259000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDL-c-tyfICFQAAAAAdAAAAABAD" className = "image"></img>
                    <p key={post.id}>hi.....{post.email.substring(0,post.email.indexOf('@'))}</p>
                </div>
                </>
            ))}
            <p>hi.....</p>

    </div>
}


        



export default Popularcomments;