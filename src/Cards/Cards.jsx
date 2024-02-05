import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cards.scss'

function Cards() {
  

    // get all recent posts 
    const [recentPosts, setRecentPosts] = useState([])
    const getRecentPosts = async () => {
        try {
            // const response = await axios.get(`/api/blog`);
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
            <div className="container-fluid">
                <div className="cards px-3">
                    <div className="cards-top">
                        <div className="row g-4">
                            {recentPosts.slice(0, 1).map((recent, i) => (
                                <div className="col-lg-5 col-md-5 col-xl-5" key={i}>
                                    <div className="cards-top-left">
                                        <div className="cards-top-left-img">
                                            <Link to={`/find/${recent._id}`}><img className="w-100" src={PF + recent.image} alt="" style={{ width: '450px', height: '450px' }} /></Link>
                                        </div>
                                        <div className="cards-top-left-text">
                                            <div className="sub-heading">
                                                {/* <h2 className='mt-2 mb-3'><Link to={`/find/${recent._id}`}><a href="">{recent.title}</a></Link></h2> */}
                                                <h2><Link to={`/find/${recent._id}`}>{recent.title}</Link></h2>
                                            </div>
                                            <p><span className='currentDate'>March 12, 2019</span><span className=''> {recent.author}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {recentPosts.slice(1, 2).map((recent, i) => (
                                <div className="col-lg-4 col-md-4 col-xl-4" key={i}>
                                    <div className="cards-top-left">
                                        <div className="cards-top-left-img">
                                            <Link to={`/find/${recent._id}`}> <img className='w-100' src={PF + recent.image} alt="" style={{ width: '450px', height: '450px' }} /></Link>
                                        </div>
                                        <div className="cards-top-left-text">
                                            <div className="sub-heading">
                                                {/* <h2 className='mt-2 mb-3'><Link to={`/find/${recent._id}`}><a href="">{recent.title}</a></Link></h2> */}
                                                {/* <h2><Link to={`/find/${recent._id}`}>{recent.title}</Link></h2> */}
                                            </div>
                                            {/* <a className='' href="">{recent.title}</a> */}
                                            <h2 className="sub-heading"><Link to={`/find/${recent._id}`}>{recent.title}</Link></h2>
                                            <p><span className='currentDate'>March 12, 2019 </span><span className=''> {recent.author}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {recentPosts.slice(2, 3).map((recent, i) => (
                                <div className="col-lg-3 col-md-3" key={i}>
                                    <div className="row">
                                        <div className="cards-top-right">
                                            <div className="cards-top-right-img">
                                                <Link to={`/find/${recent._id}`}><img className='w-100' src={PF + recent.image} alt="" /></Link>
                                            </div>
                                            <div className="cards-top-right-text text-center">
                                                <div className="sub-heading">
                                                    <Link to={`/find/${recent._id}`}>{recent.title}</Link>
                                                </div>
                                                <h6><a href="">{recent.author}</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="cards-top-right">
                                            <div className="cards-top-right-img">
                                                <Link to={`/find/${recent._id}`}><img className='w-100' src={PF + recent.image} alt="" /></Link>
                                            </div>
                                            <div className="cards-top-right-text text-center">
                                                <div className="sub-heading">
                                                    <Link to={`/find/${recent._id}`}>{recent.title}</Link>
                                                </div>
                                                <h6><a href="">{recent.author}</a></h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="cards-bottom">
                <div className="container">
                    <div className="row g-4">
                        {recentPosts.slice(1, 2).map((recent, i) => (
                            <div className="col-lg-6  col-md-12">
                                <div className="cards-bottom-left">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="cards-bottom-left-img">
                                                <Link to={`/find/${recent._id}`}><img className='w-100 card-img' src={PF + recent.image} alt="" /></Link>

                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="cards-bottom-left-text ">
                                                <div className="sub-heading">
                                                    <Link to={`/find/${recent._id}`}>{recent.title}</Link>
                                                </div>

                                                <h6><a href="">{recent.author}</a></h6>                                           
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                       {recentPosts.slice(4, 5).map((recent, i) => (
                            <div className="col-lg-6  col-md-12">
                                <div className="cards-bottom-left">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="cards-bottom-left-img">
                                                <Link to={`/find/${recent._id}`}><img className='w-100 card-img' src={PF + recent.image} alt="" /></Link>

                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="cards-bottom-left-text ">
                                                <div className="sub-heading">
                                                    <Link to={`/find/${recent._id}`}>{recent.title}</Link>
                                                </div>

                                                <h6><a href="">{recent.author}</a></h6>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Cards