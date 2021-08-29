import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './blog.css'
import { useHistory } from 'react-router';

const BLogPage = () => {
    const [posts, setPosts] = useState([])
    let str = "";
    let res = "";

    const history = useHistory();

    // const [users, setUsers] = useState([])

    // const urluser = " https://jsonplaceholder.typicode.com/users"
    // useEffect(() => {
    //     axios
    //         .get(urluser)
    //         .then(res => {
    //             setUsers(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    const url = " https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        axios
            .get(url)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return <div className = "container">
            {/* <Popularcomments /> */}
       
        {posts.map(post => (
            <div className = "row shadow p-3 mb-5 bg-white rounded">
            <div className = "col-md-2 text-center">Image</div>
            
            <div className = "col-md-10">
                
                <div  key={post.id}>
                    
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                        <button onClick={()=> history.push({pathname:"/blogdetails/",state: {post},}) } className="btn btn-dark float-right">Read More</button>
                        
                </div>
            </div>
            </div>
        ))}
        </div>
}


export default BLogPage;