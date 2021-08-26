import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './album.css'

const Albums = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        axios
            .get(' https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                console.log(res)
                setPhotos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const photosView = photos.map((photo, index) => {
        return (
                <div key={index}>
                <img src={photo.url} className="image" alt="a" />
                <div>
                    <p key={photo.id}>{photo.title}</p>
                </div>
                </div>
        );
    });
    return (
        <div>
            <div className=" container-fluid row" >
                <div className="albumContainer" >
                { photosView }
                </div>
            </div>
        </div>
    );
}

export default Albums;