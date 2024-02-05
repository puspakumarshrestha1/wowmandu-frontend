import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './internationalChild.scss'

function InternationalChild() {
    const blogID = useParams().id;

    const [showBlog, setShowBlog] = useState([]);
    const getBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/blog/find/${blogID}`);
            setShowBlog(response.data.blog)
        } catch (error) {
            console.log("Can not fetch blog!", error);
        }
    }
    useEffect(() => {
        getBlog();
    }, [blogID])

    

    //post comment section 
    const [comment, setComment] = useState({
        firstName: "",
        email: "",
        comment: "",
    });
    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setComment((prev) => ({ ...prev, [name]: value }))
    }
    const handlePostComment = async () => {
        try {
            await axios.post(`http://localhost:8000/api/comment/${blogID}/comments/create`, comment);
        } catch (error) {
            console.log("Can not post comments:", error);
        }
    }

    //get comment section
    const [getComment, setGetComment] = useState([]);
    const getComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/comment/${blogID}/comments`)
            setGetComment(response.data.data.comments)
        } catch (error) {
            console.log("Unable to get comments!", error)
        }
    }
    useEffect(() => {
        getComments();
    }, [blogID]);

    //get recent posts

    const [recentPosts, setRecentPosts] = useState([]);
    const getRecentPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/blog`);
            setRecentPosts(response.data.allBlogs);
            console.log(response.data.allBlogs)
        } catch (error) {
            console.log("Unable to get recent posts:", error)
        }
    }
    useEffect(() => {
        getRecentPosts();
    }, [])

    const PF = "http://localhost:8000/images/";

    const [showButton, setShowButton] = useState(false);

    const handleTextAreaClick = () => {
        setShowButton(true);
    };

    const handleBlur = () => {
        setShowButton(false);
    };
    return (
        <>
            <div className="interChild">
                <div className="container">
                    <div className="row">
                        {
                            showBlog &&
                            (
                                <div className="col-md-8">
                                    <div className="interChild-left">
                                        <div className="interChild-left-header">
                                            <h4 className='my-4'><a href="">{showBlog.title}</a></h4>
                                        </div>
                                        <div className="interChild-left-img">
                                            {showBlog.image && <img className='w-100' src={PF + showBlog.image} alt="" />}
                                        </div>
                                        <div className="interChild-left-text">
                                            <p>{showBlog.blogContent}</p>
                                        </div>
                                    </div>
                                    {/* comments  */}
                    <div className="comment">
                        <form action="">
                            <label htmlFor="">Enter your fullname</label>
                            <input type="text" name='fullName' placeholder='Fullname' onChange={handleCommentChange} />
                            <label htmlFor="">Enter your email</label>
                            <input type="text" name='email' placeholder='Email' onChange={handleCommentChange} />
                            <label htmlFor="">Your Comment</label>
                            <textarea name="comment" id="" cols="30" rows="10" placeholder='Comment' onChange={handleCommentChange}></textarea>
                            <button type="submit" onClick={handlePostComment}>Post Comment</button>
                        </form>
                    </div>
                    <h6><a href="">{getComment.length} Comments</a></h6>
                    {getComment.map((comment, i) => (
                        <div className="quote" key={i}>
                            <div className="quote-inner">
                                <p><em>"{comment.comment}"</em></p>
                                <h6>-{comment.fullName}</h6>
                            </div>
                        </div>
                    ))}
                                </div>
                            )
                        }

                        <div className="col-md-4">
                            <div className="interChild-right">
                               
                                <div className="recent">
                                    <div className="recent-header">
                                        <h5>Recent Posts</h5>
                                    </div>

                                    {recentPosts.slice(0, 5).map((recent, i) => (
                                        <div className="row align-items-center mb-4" key={i}>
                                            <div className="col-md-4">
                                                <div className="recent-img">
                                                    {recent.image && <img className='w-100' src={PF + recent.image} alt="image" />}
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="recent-text">
                                                    <Link to={`/find/${recent._id}`}><h6>{recent.title}</h6></Link>
                                                    <p>{recent.categories}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className="banner">
                                    <img className='w-100' src="https://hamrokhabar.com/front/images/advertise/FILE002.GIF" alt="" />
                                </div>
                                <div className="feeds">
                                    <div className="feeds-header">
                                        <h5>Facebook Feeds</h5>
                                    </div>
                                    <div className="feeds-items">
                                        <div className="row g-3">
                                            {/* {News.slice(29, 35).map((a) => (
                                                <div className="col-md-4">
                                                    <img className='w-100' src={a.img} alt="" />
                                                </div>
                                            ))} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default InternationalChild