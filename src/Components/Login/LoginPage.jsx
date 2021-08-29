import React, { useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { AiOutlineLock, AiFillFacebook, } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare,FaRegUser, FaFontAwesome } from "react-icons/fa";
import image from '../../Assets/Images/welcomePage.png'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();
    const [error, setError] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        // Success
        // {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}
        // Failure
        // {"status":"Error","msg":"username or password is incorrect"}
        axios.post('https://fakestoreapi.com/auth/login', data)
            .then(response => {
                if (response.data.token) {
                    dispatch({
                        type: "ENTER_AS_USER",
                        payload: { isLoggedIn: true }
                    });
                    dispatch({
                        type: "LOGGED_IN",
                        payload: { username: data.username, token: response.data.token }
                    });
                    history.push('/');
                } else {
                    // TODO Display error message
                    setError({ "message": response.data.msg });
                    reset();
                }
            })
    }

    return (
        <Container>
            <Row>
                <Col lg={6} sm={{order:1}} className="loginBackground">
                    <Container className="justify-content:flex-"> 
                        <Row>
                        <div className="col-md-2"></div>
                            <div className="col-md-8">
                            <Row>
                            <h1 className="text-center">Login</h1>
                                <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                  
                                    <div className="form-group">
                    <div className="col-xs-6 col-xs-offset-3">
                    <p>{error ? "username or password is incorrect" : ""}</p>
                                    <input type="text"
                                        className="inputText form-control"
                                        placeholder="Enter Username "
                                        name="username"  {...register("username", { required: true, pattern: /^[a-z0-9_]/ })}>
                                    </input>
                                    </div>
                                    </div>
                                    
                                    <div className="form-group">
                    <div className="col-xs-6 col-xs-offset-3">
                    <p className="errors">{errors.username?.type === 'required' && "username is required"}</p>
                                    <p className="errors">{errors.username?.type === "pattern" && "Invalid username"}</p>

                                    <input type="password"
                                        className="inputText form-control"
                                        placeholder="Enter Password "
                                        name="password"  {...register("password", { required: true })}>
                                    </input>
                                    </div></div>

                                    <div className="form-group text-center">
                                        <p className="errors">{errors.password?.type === 'required' && "password is required"}</p>
                                        <button type="submit" className="btn btn-light">Login</button>
                                    </div>

                                </form>
                            </Row>
                            <Row>
                                <div  className="socialMediaLogin text-center">
                                    <p>Or</p>
                                    <p>Login with</p>
                                    <div className="socialMediaIcons">
                                        <ul >
                                            <li className="fbIcon socialLi"><AiFillFacebook /></li>
                                            <li className="googleIcon socialLi"><FcGoogle /></li>
                                            <li className="twitterIcon socialLi"><FaTwitterSquare /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                            </div>
                        
                            <div className="col-md-2"></div>
                        </Row>
                        <Row>
                        <div className="flex-end text-center">
                                <p>Not a member <Link to="/register" className = "register-link register">register</Link></p>
                        </div>
                        </Row>
                    </Container>
                </Col>
                <Col lg={6} sm={{order:2}} className="text-center">
                    <Row>
                    <Col lg={10}>
                    <button className="btn btn-warning">Logo</button>
                    </Col>
                    </Row>

                    <Row>
                    
                    <h1>Welcome G Store</h1>
                    <div className="img-fluid"><img src={image} ></img></div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}


export default LoginPage;