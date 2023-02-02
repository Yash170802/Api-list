import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./login.action";

const Login = () => {
    const [state, setstate] = useState({
        email: '',
        password: '',
    })
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const onChange = (e) => {

        setstate(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const loginHandle = () => {
        dispatch(signIn(state))
    }
    const logoutHandle = () => {
        dispatch(signOut(state))
    }
    return (
        <>
            {(!login.userToken) ? (
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center">
                        <h1 className="text-monospace text-light " style={{ letterSpacing: '1px' }}>Sign Into Your Account</h1><b /> </div>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-4">
                            <div className="form-outline mb-4 text-light">
                                <input type="email" name="email" className="form-control" onChange={(e) => onChange(e)} />
                                <label className="form-label mt-2">Email address</label>
                            </div>
                            <div className="form-outline mb-3 text-light">
                                <input type="password" name="password" onChange={(e) => onChange(e)} className="form-control form-control-lg" />
                                <label className="form-label mt-2">Password</label>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-success" onClick={() => { loginHandle() }}
                                >Login</button>
                            </div>
                        </div>
                    </div>
                </div>)
                : (
                    <>
                        <p>Welcome{login.userDeatils.email}</p>
                        <button type="button" className="btn btn-success" onClick={() => { logoutHandle() }}
                        >Logout</button>
                    </>
                )
            }
        </>
    )
}
export default Login;