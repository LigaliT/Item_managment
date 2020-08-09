import React, {useRef} from "react";
import {useForm} from "react-hook-form";
import "../Styles/LoginAndRegStyles.css"
import Requests from "../Requests";

const RegistrationReactHookForm = () => {
    const {register, errors, handleSubmit, watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = (data) => {
      console.log(data);
      Requests.logCreate("/register", data).then((result) => {
          console.log(result);
      })
    };

    return(
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label htmlFor="login">
                Login
            </label>
            <input id="login" name="login" type="text" className="input" ref={register({required: true})}/>
            <label htmlFor="email">
                Email
            </label>
            <input id="email" name="email" type="text" className="input" ref={register({required: true})}/>
            <label htmlFor="password">
                Password
            </label>
            <input id="password" name="password" type="password" className="input" ref={register({required: true, minLength: 4})}/>
            <label htmlFor="password_repeat">
                Confirm Password
            </label>
            <input id="passwordRepeat" name="passwordRepeat" type="password" className="input" ref={register({
                validate: (value) => value === password.current || "The password don't match"
            })}/>
            {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
            <label htmlFor="name">
                Name
            </label>
            <input id="name" name="name" type="text" className="input" ref={register({required: true, minLength: 3})}/>
            <label htmlFor="phone">
                Phone
            </label>
            <input id="phone" name="phone" type="text" className="input" ref={register({required:true, pattern: /^((\+7|7|8)+([0-9]){10})$/gm})}/>
            <label htmlFor="birthday">
                Date of birthday
            </label>
            <input id="birthday" name="birthday" type="date" className="input" ref={register({required:true})}/>
            <button type="submit" className="btn">
                Sign Up
            </button>
        </form>
      </div>
  )
};

export default RegistrationReactHookForm;