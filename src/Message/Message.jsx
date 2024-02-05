import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './message.scss';

function Message() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <>

            <div className="message text-end">
                <button type="button" className="btn message-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Message Us
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center rounded-4">
                                <div className='form'>
                                    <h3 className='mb-4 text-center'>Message Us Here</h3>
                                    <input className='w-100' type="text" placeholder='Enter Your Fullname' />
                                    <input className='w-100' type="email" placeholder='Enter Your Email Address' />
                                    <textarea className='w-100' placeholder='Enter the message' name="" id="" cols="30" rows="10"></textarea>
                                    <button className='form-btn btn btn-primary w-100' onClick={handleCloseModal}>
                                        Submit <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;