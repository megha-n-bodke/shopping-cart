import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './album.css'


const Albums = () => {
//     const [photos, setPhotos] = useState([])
//     useEffect(() => {
//         axios
//             .get(' https://jsonplaceholder.typicode.com/photos')
//             .then(res => {
//                 console.log(res)
//                 setPhotos(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, [])

//     const photosView = photos.map((photo, index) => {
//         return (
//         <div className=" container-fluid row" key={index}>
//             <div className="albumContainer ">
//                 <img src={photo.url} className="image" alt="a"></img>
//                 <div >
//                     <p key={photo.id}>{photo.title}</p>
//                 </div>
//             </div>
//         </div>
//         );
//     });
//     return (
//         <div>
//             { photosView }
//         </div>
//     );
// }


const  [posts,setPosts] = useState([])
useEffect(() => {
    axios
    .get(' https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
        console.log(res)
        setPosts(res.data)})
        .catch(err=>{console.log(err)
        })
    },[])
    
return <div>
    <ul>
    
        {posts.map(post =>(
             
            <div className = " container-fluid row">
            <div className = "albumContainer ">
            <img src={post.url} className = "image"></img>
            <div >
            <p key={post.id}>{post.title}</p>
            </div>
            </div>

            {/* {post.albumId.map(title =>(
                <p key={title.id}>{title.title}</p>

            ))} */}
            </div>
        ))}
    </ul>
</div>
}

export default Albums;