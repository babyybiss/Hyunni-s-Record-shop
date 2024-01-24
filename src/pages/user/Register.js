import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";


export function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };   

    const onClickRegisterHandler = (e) => {
        
    }


    
    return (
        <div className="body-content">
        <div className="module">
            <h1>Register</h1>
            <form className="form" action="form.php" method="post" encType="multipart/form-data" autoComplete="off">
            <div className="alert alert-error"></div>
            <input type="text" onChange={ onChangeHandler } placeholder="firstName" name="firstName" required />
            <input type="text" onChange={ onChangeHandler } placeholder="lastName" name="lastName" required />
            <input type="email" onChange={ onChangeHandler } placeholder="email" name="email" required /><br/>
            <input type="text" onChange={ onChangeHandler } placeholder="address" name="address" required /><br/>
            <input type="password" onChange={ onChangeHandler } placeholder="password" name="password" required /><br/>
            
            <button onClick={ onClickRegisterHandler } 
            className="btn btn-block btn-primary">
                Register
            </button>
            </form>
        </div>
        </div>
    )
}
