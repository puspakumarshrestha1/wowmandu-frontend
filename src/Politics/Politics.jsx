import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './politics.scss'

function Politics() {
    const [category, setCategory] = useState('political');
    const [showBlogCat, setShowBlogCat] = useState([]);
    const filterWithCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/blog?category=${category}`)
            setShowBlogCat(response.data.blogs)
            console.log(response.data)
        } catch (error) {
            console.log("Unable to search blog with category:", error)
        }
    }
    useEffect(() => {
        filterWithCategory();
    }, [category])

    const PF = "http://localhost:8000/images/";

    return (
        <>
            <div id="politics">
                <div className="politics">
                    <div className="container">
                        <div className="politics-header text-center">
                            <h3 className='mb-4'><a href="">Political News</a></h3>
                            <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                        </div>

                        <div className="row g-4">
                            {showBlogCat.slice(0,1).map((catg, i) => (
                                <div className="col-md-12 col-lg-6" key={i}>
                                    <div className="politics-left">
                                        <div className="politics-left-img">
                                            <img className='w-100' src={PF + catg.image} alt="" />
                                        </div>
                                        <div className="politics-left-text">
                                            <div className="sub-heading">
                                                <a href="">Politics / <span className='currentDate'>Dec 8,2023</span></a>
                                            </div>
                                            <h3 className='mt-2 mb-3'> <a href="">{catg.title}</a></h3>
                                            <p><a href="">{catg.author}</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col-md-12 col-lg-6">
                                <div className="politics-right">
                                    <div className="row g-4">
                                        {showBlogCat.slice(2,4).map((catg, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="politics-right-img">
                                                    <img className='w-100' src={PF + catg.image} alt="" />
                                                </div>
                                                <div className="politics-right-text">
                                                    <div className="sub-heading">
                                                        <a href="">Politics / <span className='currentDate'>Dec 8,2023</span></a>
                                                    </div>
                                                    <h3 className='mt-2 mb-3'> <a href="">{catg.title}</a></h3>
                                                    <p><a href="">{catg.author}</a></p>                                            </div>
                                            </div>
                                        ))}
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

export default Politics