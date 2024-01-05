import React, { useState } from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom';
import axios from 'axios';

import './admin.scss'
import Update from "../Update/Update"


function Admin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/auth/admin-login", data)
            let token = response.data.token

            let login = localStorage.setItem('token', JSON.stringify(token))
            if (login !== null) {
                navigate("/admin-dashboard-wowmandu");
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="admin">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="admin-login">
                                <div className="admin-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>PLEASE LOGIN TO ADMIN DASHBOARD</h6>
                                </div>
                                <div className="admin-login-form text-center">
                                    <input className='w-100' type="text" placeholder='Enter your email address' name='email' onChange={handleChange} />
                                    <input className='w-100' type="password" placeholder='Enter your Password' name='password' onChange={handleChange} />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Login" onClick={handleClick} />
                                </div>
                                <div className="forget-password">
                                    <h6 className=' text-center'><a href="">Forget Your Password?</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route
                    path="/update-blog"
                    element={<Update />}
                />
            </Routes>
        </>
    )
}

export default Admin