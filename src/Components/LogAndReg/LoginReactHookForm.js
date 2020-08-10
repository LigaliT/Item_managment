import React,{useState} from "react";
import {useForm} from "react-hook-form";
import "../../Styles/LoginAndRegStyles.css"
import Requests from "../../Requests";


const LoginFormReactHook = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");
    const onSubmit = (data) => {
        Requests.logCreate("/login", data).then((result) => {
            switch (result.data) {
                case "Incorrect password" : {
                    setError("Incorrect password");
                    break;
                }
                case "User doesn't exist" : {
                    setError("User doesn't exist");
                    break;
                }
                default:
                    localStorage.setItem("token",result.data.token);
                    window.location.href = "/main";
                    break;
            }
            setTimeout(() => {
                setError("");
            }, 5000)
        })
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="login">Login</label>
                <input ref={register({required : true, maxLength: 20})} id="login" name="login" type="text" className="input"/>
                <label htmlFor="password">Password</label>
                <input ref={register({required: true, maxLength: 20})} id="password" name="password" type="password" className="input"/>
                {<p style={{color : "red"}}>{error}</p>}
                <button type="submit" className="btn">Sign In</button>
            </form>
        </div>
    )
};

export default LoginFormReactHook;