import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { callPostLoginAPI } from '../../api/AuthAPI';
import AuthContext from '../../components/auth/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };   

    const onClickLoginHandler = event => {
        event.preventDefault();
        console.log("login 시도");

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        
        authCtx.login(enteredEmail, enteredPassword, navigate);
    }

    console.log("email? :", form.email);
    console.log("password? :", form.password);


    
    return (
        <div className="body-content">
        <div className="module">
            <h1>Login</h1>
            <div className="alert alert-error"></div>
            <input 
                type="email" 
                onChange={ onChangeHandler } 
                id="email" 
                ref={emailInputRef}
                placeholder="email" 
                name="email" 
                required 
            /><br/>
            <input 
                type="password" 
                onChange={ onChangeHandler } 
                id="password"
                ref={passwordInputRef}
                placeholder="password" 
                name="password" 
                required 
            /><br/>
            
            <button onClick={ onClickLoginHandler } 
            className="btn btn-block btn-primary">
                Login
            </button>
        </div>
        </div>
    )
}


export default Login;