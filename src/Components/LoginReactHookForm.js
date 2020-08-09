import React from "react";
import {useForm} from "react-hook-form";
import "../Styles/LoginAndRegStyles.css"
import Requests from "../Requests";


const LoginFormReactHook = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        Requests.logCreate("/login", data).then((result) => {
            console.log(result);
        })
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="login">Login</label>
                <input ref={register({required : true, maxLength: 20})} id="login" name="login" type="text" className="input"/>
                <label htmlFor="password">Password</label>
                <input ref={register({required: true, maxLength: 20})} id="password" name="password" type="password" className="input"/>
                <button type="submit" className="btn">Sign In</button>
            </form>
        </div>
    )
};

export default LoginFormReactHook;