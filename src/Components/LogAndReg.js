import React,{useState} from "react";
import LoginFormReactHook from "./LoginReactHookForm";
import RegistrationReactHookForm from "./RegistrationReactHookForm";
import "../Styles/LoginAndRegStyles.css"

const LogAndReg = () => {
    const [show, setShow] = useState(1);
    return(
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", marginBottom:"20px"}}>
                <button className="btn" onClick={() => {
                    setShow(1)}
                }>
                    Sign In
                </button>
                <button className="btn" onClick={() => {
                    setShow(0)
                }}>
                    Sign up
                </button>
            </div>
                {show && <LoginFormReactHook/> || !show && <RegistrationReactHookForm/>}
        </div>)
};

export default LogAndReg;