import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cards.scss'

function Cards() {
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
            <div className="cards px-3">
                <div className="cards-top">
                    <div className="row g-4">
                        {recentPosts.slice(0, 1).map((recent, i) => (
                            <div className="col-lg-5 col-md-6 col-xl-5" key={i}>
                                <div className="cards-top-left">
                                    <div className="cards-top-left-img">
                                        <img className="w-100" src={PF + recent.image} alt="" style={{ width: '450px', height: '450px' }} />
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
                            <div className="col-lg-5 col-md-6 col-xl-5" key={i}>
                                <div className="cards-top-left">
                                    <div className="cards-top-left-img">
                                        <img className='w-100' src={PF + recent.image} alt="" style={{ width: '450px', height: '450px' }} />
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

                        <div className="col-lg-3 col-md-12 col-xl-3">
                            <div className="row g-4">
                                {recentPosts.slice(2, 4).map((recent, i) => (
                                    <div className="col-lg-12 col-md-6" key={i}>
                                        <div className="cards-top-right">
                                            <div className="cards-top-right-img">
                                                <img className='w-100' src={PF + recent.image} alt="" />
                                            </div>
                                            <div className="cards-top-right-text text-center">
                                                <div className="sub-heading">
                                                    <Link to={`/find/${recent._id}`}>{recent.title}</Link>
                                                </div>
                                                <h6><a href="">{recent.author}</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-bottom">
                <div className="container">
                    <div className="row g-4">
                        {News.slice(4, 5).map((a) => (
                            <div className="col-lg-6  col-md-12">
                                <div className="cards-bottom-left">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="cards-bottom-left-img">
                                                <img className='w-100' src={a.img} alt="" />

                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="cards-bottom-left-text ">
                                                <div className="sub-heading">
                                                    <a className='' href="">{a.title}</a>
                                                </div>
                                                <h3 className='mt-2 mb-3'><a href="">{a.disc}</a></h3>
                                                <p><span className='currentDate'>March 12 , 2019</span><span className='text-dark'> .By Alen Mark</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {News.slice(5, 7).map((a) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="cards-bottom-right">
                                    <div className="cards-bottom-right-img">
                                        <img className='w-100' src={a.img} alt="" />
                                    </div>
                                    <div className="cards-bottom-right-text">
                                        <a href="">{a.title}</a>
                                        <h6 className='mb-3'><a href="">{a.disc}.</a></h6>
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