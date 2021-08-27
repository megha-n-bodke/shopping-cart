import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './album.css'
import { Container, Row } from 'react-bootstrap';

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
            <div key={index} className="col-md-3 text-center" style={{}}>

                          <img src={photo.url} className="imgresp" alt="a" />
               
                    <p key={photo.id}>{photo.title}</p>
              </div>
        );
    });
    return (
        <Container>
        <Row>

                    
                    { photosView }
                   
            
        </Row></Container>
    );
}

export default Albums;