import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './album.css';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setupProductsPagination } from '../../Components/ProductList/ProductPaginatorAction';
import { setupAlbumsPagination } from './AlbumPaginatorAction';
import AlbumPaginator from './AlbumPaginator';

const Albums = () => {
    const dispatch = useDispatch();
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios
            .get(' https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response);
                setPhotos(response.data);
                // TODO set limit as per view
                let total_pages = Math.ceil(response.data.length/8);
                dispatch(setupAlbumsPagination({total_pages: total_pages,
                    current_page: 1,
                    items_per_page: 8}))
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const pagingInfo = useSelector(state => state.albumsPagination);
    let start = (pagingInfo.current_page - 1) * pagingInfo.items_per_page;
    let productsInView = photos.slice(start, start + pagingInfo.items_per_page);

    const photosView = productsInView.map((photo, index) => {
        return (
            <div key={index} className="col-md-3 text-center" style={{}}>
                <img src={photo.url} className="imgresp" alt="a"/>
                <p key={photo.id}>{photo.title}</p>
            </div>
        );
    });

    return (
        <Container>
            <Row>
                {photosView}
            </Row>
            <Row>
                <hr/>
                <AlbumPaginator list={photos} paging={pagingInfo}></AlbumPaginator>
            </Row>
        </Container>
    );
};

export default Albums;