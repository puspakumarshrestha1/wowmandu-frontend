import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './picks.scss'
import { Link } from 'react-router-dom'

function Picks() {
    const [News, setNews] = useState([])
    useEffect(() => {
        axios.get('Data/news.json')
            .then(res => {
                console.log(res.data);
                setNews(res.data)
            });
    }, [])

    // get all recent posts 
    const [recentPosts, setRecentPosts] = useState([])
    const getRecentPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/blog`);
            setRecentPosts(response.data.allBlogs);
            console.log(response.data.allBlogs);
        } catch (error) {
            console.log("Unable to fetch recent posts!", error)
        }
    }
    useEffect(() => {
        getRecentPosts();
    }, [])

    const PF = "http://localhost:8000/images/";

    return (
        <>
        <div id="blog">
        <div className="picks">
                <div className="container">
                    <div className="picks-header text-center">
                        <h3 className='mb-4'><a href="">Editor Picks</a></h3>
                        <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                    </div>
                    <div className="row g-4">
                    <div className="col-lg-6 col-md-12">
                    {recentPosts.slice(0, 1).map((recent, i) => (
                            
                                <div className="picks-left">
                                    <div className="picks-left-img">
                                    <Link to={`/find/${recent._id}`}><img className="w-100" src={PF + recent.image} alt="" style={{ width: '450px', height: '450px' }} /></Link>
                                    </div>
                                    <div className="picks-left-text">
                                        <div className="sub-heading">
                                        <h2><Link to={`/find/${recent._id}`}>{recent.title}</Link></h2>
                                        </div>
                                        <p><span className='currentDate'>March 12, 2019</span><span className=''> {recent.author}</span></p>
                                    </div>
                                </div>
                          
                        ))}
                          </div>

                        <div className="col-lg-6 col-md-12 ">
                        {recentPosts.slice(6, 8).map((recent, i) => (
                                <div className="picks-right">
                                    <div className="row g-4 align-items-center mb-md-4 mb-sm-5">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="picks-right-img">
                                            <Link to={`/find/${recent._id}`}><img className="w-100 edit-img" src={PF + recent.image} alt=""/></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="picks-right-text">
                                            <h2><Link to={`/find/${recent._id}`}>{recent.title}</Link></h2>
                                            <p><span className='currentDate'>March 12, 2019</span><span className=''> {recent.author}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Picks