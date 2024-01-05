// import React, { useState } from 'react'
// import './change.scss'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Change() {

//     const navigate = useNavigate()
//     const [change, setChange] = useState({
//         email: "",
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setChange((prev) => ({ ...prev, [name]: value }));
//     }

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:8000/api/auth/change-password", change)
//             alert(response.data.message)
//             navigate("/");
//             console.log("password changed succesfull")
//         } catch (error) {
//             console.log("Error changing password!")
//         }
//     }

//     return (
//         <>
//             <div className="change">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-md-5">
//                             <div className="logo">
//                                 <img className='w-100' src="mandu.png" alt="" />
//                             </div>
//                         </div>
//                         <div className="col-md-7">
//                             <div className="change-login">
//                                 <div className="change-login-header text-center">
//                                     <h6>Change Password</h6>
//                                 </div>
//                                 <div className="change-login-form text-center">
//                                     <input className='w-100' name='email' type="email" placeholder='Enter your Email address' onChange={handleChange} />
//                                     <input className='w-100' name='currentPassword' type="password" placeholder='Enter Old Password' onChange={handleChange} />
//                                     <input className='w-100' name='newPassword' type="password" placeholder='Enter New Password' onChange={handleChange} />
//                                     <input className='w-100' name='confirmNewPassword' type="password" placeholder='Confirm New Password' onChange={handleChange} />

//                                 </div>
//                                 <div className="submit">
//                                     <input type="submit" value="Change Password" onClick={handleClick} />
//                                 </div>
//                                 <div className="forget-password">
//                                     <h6 className=' text-center'><a href="">Forget Your Password?</a></h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Change




import React, { useState } from 'react';
import './change.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Change() {
    const navigate = useNavigate();
    const [change, setChange] = useState({
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:8000/api/auth/change-password", change);
            alert(response.data.message);
            navigate("/");
            console.log("Password changed successfully");
        } catch (error) {
            console.error("Error changing password:", error);
            setError("Error changing password. Please try again.");
        }
    };



    return (
        <>
            <div className="change">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="logo">
                                <img className='w-100' src="mandu.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="change-login">
                                <div className="change-login-header text-center">
                                    <h6>Change Password</h6>
                                </div>
                                <div className="change-login-form text-center">
                                    <input className='w-100' name='email' type="email" placeholder='Enter your Email address' onChange={handleChange} />
                                    <input className='w-100' name='currentPassword' type="password" placeholder='Enter Old Password' onChange={handleChange} />
                                    <input className='w-100' name='newPassword' type="password" placeholder='Enter New Password' onChange={handleChange} />
                                    <input className='w-100' name='confirmNewPassword' type="password" placeholder='Confirm New Password' onChange={handleChange} />

                                </div>
                                <div className="submit">
                                    <input type="submit" value="Change Password" onClick={handleClick} />
                                </div>
                                <div className="forget-password">
                                    <h6 className=' text-center'><a href="">Forget Your Password?</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Change;
