import React, { useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiFillFacebook, } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import image from '../../Assets/Images/welcome-page-blog-header.jpg'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


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
            if(response.data.token)
            {
                dispatch({
                    type: "ENTER_AS_USER",
                    payload: { isLoggedIn: true }
                });
                dispatch({
                    type: "LOGGED_IN",
                    payload: {username: data.username, token: response.data.token}
                });
                history.push('/');
            } else {
                // TODO Display error message
                setError({"message": response.data.msg});
                reset();
            }
     })
    }

    return (
        <div className="loginPageContainer">
            <div className="row">
                <div className="loginContainer col-md-6 col-sm-12">
                    <h1>Login Page</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <p>{error?"username or password is incorrect":""}</p>
                            <HiOutlineUser className="user" />
                            <input type="text"
                                className="inputText"
                                placeholder="Enter username "
                                name="username"  {...register("username", { required: true, pattern: /^[a-z0-9_]/ })}>
                            </input>
                            <p className="errors">{errors.username?.type === 'required' && "username is required"}</p>
                            <p className="errors">{errors.username?.type === "pattern" && "Invalid username"}</p>


                            <AiOutlineLock className="user" />
                            <input type="password"
                                className="inputText"
                                placeholder="Enter password "
                                name="password"  {...register("password", { required: true })}>
                            </input>
                            <p className="errors">{errors.password?.type === 'required' && "password is required"}</p>

                            <button type="submit">Login</button>

                            <div className="socialMediaLogin">
                                <p>Or</p>
                                <p>Login with</p>
                                <div className="socialMediaIcons">
                                    <ul>
                                        <li className="fbIcon"><AiFillFacebook /></li>
                                        <li classname="googleIcon"><FcGoogle /></li>
                                        <li className="twitterIcon"><FaTwitterSquare /></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p>Not a member register</p>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 welcomeContainer">

                    <h1>Welcome Page</h1>
                    <button className = "logoBtn">Logo</button>
                    <div className="image"><img src={image} ></img></div>
                </div>
                
                
            </div>
            
        </div>);
}


export default LoginPage;