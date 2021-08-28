import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "./blog.css";

const Blogdetails = props => {
    console.log(props.location.state.post);
    const post = props.location.state.post;

    const [comments, setComments] = useState([])
    let strp = "";
    let resp = "";
    const urll = " https://jsonplaceholder.typicode.com/comments"
    useEffect(() => {
        axios.get(urll, {
            params: {
                _limit: 10
            }
        })
            .then(resp => {
                setComments(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return <Row>
        <Col className="col-md-1"></Col>

        <Col className="col-md-2">
            <Col className="col-md-12  shadow-lg p-3 mb-5 bg-white rounded">
                <Row>
                    <Col className="col-md-12">

                        Most Popular Post
                        <hr />
                    </Col>

                    <Col className="col-md-12">

                        Most Popular Comments
                        <hr />
                    </Col>
                </Row>
            </Col>
        </Col>

        <Col className="col-md-8 shadow-lg p-3 mb-5 bg-white rounded">
            <Container>
                <Row>
                    <Col className="col-md-11">

                        <h5>{post.title}</h5><br/>
                        <p>{post.body}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-11">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-md-11">

                        {comments.map(comment => {
                            console.log(comment.postId === post.id);
                            
                            if(comment.postId === post.id)
                            return  <Row className="top-buffer">
                                    <Col className="col-md-2">{comment.email}</Col>
                                    <Col className="col-md-10">
                                        <h4>{comment.name}</h4>
                                        <div>{comment.body}</div>
                                    </Col>
                                </Row>
                        }
                        )}

                    </Col>
                </Row>
            </Container>
        </Col>

        <Col className="col-md-1"></Col>
    </Row>;
}


export default Blogdetails;