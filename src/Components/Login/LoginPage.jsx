import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiFillFacebook, } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import image from '../../Assets/Images/welcome-page-blog-header.jpg'
import axios from 'axios';




const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //  const dispatch = useDispatch();
    const onSubmit = data => {
         alert(data.username);
                //  dispatch(registerAction(data));
        // history.push('/welcome')
                axios.post('https://fakestoreapi.com/auth/login', data)
                .then(res => {
                    if(res.data)
                    {
                        alert("recceived token")
                        //history.push()
                    }
                        // reset();

             })

    }

    return (
        <div className="loginPageContainer">
            <div className="row">
                <div className="loginContainer col-md-6 col-sm-12">
                    <h1>Login Page</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="col-md-6 col-sm-12">
                    <h1>Welcome Page</h1>
                    <div><img src={image} ></img></div>

                </div>
            </div>
        </div>);
}


export default LoginPage;