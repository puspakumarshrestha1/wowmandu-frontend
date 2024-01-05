import React, { useState } from 'react'
import './forget.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Forget() {
    const navigate = useNavigate();
    const [sendEmail, setSendEmail] = useState({
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSendEmail((prev) => ({ ...prev, [name]: value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/auth/send-reset-email", sendEmail);
            console.log(response.data.message)
            const { userID, token } = response.data;
            console.log(response.data)
            alert("Email Sent!")
            navigate(`/reset-password/${userID}/${token}`)
        } catch (error) {
            console.log("Error sending reset email:", error);
        }
    }

    return (
        <>
            <div className="forget">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="forget-login">
                                <div className="forget-login-header text-center">
                                    <h4>Welcome</h4>
                                    <h6>ENTER YOUR EMAIL</h6>
                                </div>
                                <div className="forget-login-form text-center">
                                    <input className='w-100' name='email' type="email" placeholder='Enter your email address' onChange={handleChange} />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Send" onClick={handleClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget