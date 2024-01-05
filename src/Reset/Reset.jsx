import React, { useState } from 'react'
import './reset.scss'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Reset() {
    const navigate = useNavigate();
    const { userID, token } = useParams();

    const [rest, setReset] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReset((prev) => ({ ...prev, [name]: value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/api/auth/reset-password/${userID}/${token}`, rest);
        navigate("/admin-login");
        console.log(response.data.message);
    }

    return (
        <>
            <div className="reset">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="reset-login">
                                <div className="reset-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>PLEASE LOGIN TO ADMIN DASHBOARD</h6>
                                </div>
                                <div className="reset-login-form text-center">
                                    <input className='w-100' name='password' type="password" placeholder='New Password' onChange={handleChange} />
                                    <input className='w-100' name='confirmPassword' type="password" placeholder='Confirm Password' onChange={handleChange} />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Reset" onClick={handleClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reset