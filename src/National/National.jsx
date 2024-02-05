import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './national.scss'

function National() {
   

    const [category, setCategory] = useState('national');
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
            <div id="national">
                <div className="national">
                    <div className="container">
                        <div className="national-header text-center">
                            <h3 className='mb-4'><a href="">National News</a></h3>
                            <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                        </div>
                        <div className="row">
                            {showBlogCat.map((catg, i) => (
                                <div className="col-lg-4 col-md-12" key={i}>
                                    <div className="national-left">
                                        <div className="national-left-img">
                                            <img className='w-100 nat-img' src={PF + catg.image} alt="" />
                                            {/* <img className='w-100' src="" alt="img" /> */}
                                        </div>
                                        <div className="national-left-text">
                                            <div className="sub-heading">
                                                <a className='' href="">shoes / <span className='currentDate'>March 15, 2019</span></a>
                                            </div>
                                            <h3 className='mt-2 mb-3 fs-5'> <a href="">{catg.title}</a></h3>
                                            <p><a href="">{catg.author}</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="col-lg-4 col-md-12">
                                {showBlogCat.slice(2, 5).map((catg,i) => (
                                    <div className="national-right" key={i}>
                                        <div className="row mb-lg-4 mb-md-4">
                                            <div className="col-md-5 col-sm-5  pe-md-0 pe-sm-0">
                                                <div className="national-right-img">
                                                    <img className='w-100' src={PF + catg.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-sm-7  ps-md-0 ps-sm-0">
                                                <div className="national-right-text p-3">
                                                    <div className="sub-heading">
                                                        <a href="">{catg.title}</a>
                                                    </div>
                                                    <h4><a href="">{catg.title}</a></h4>
                                                    <p><a href="">{catg.author}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                            {/* <div className="col-lg-4 col-md-12">
                                {showBlogCat.slice(2, 5).map((catg,i) => (
                                    <div className="national-right" key={i}>
                                        <div className="row mb-lg-4 mb-md-4">
                                            <div className="col-md-5 col-sm-5  pe-md-0 pe-sm-0">
                                                <div className="national-right-img">
                                                    <img className='w-100 nat-img' src={PF + catg.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-sm-7  ps-md-0 ps-sm-0">
                                                <div className="national-right-text p-3">
                                                    <div className="sub-heading">
                                                        <a href="">{catg.title}</a>
                                                    </div>
                                                    <h4><a href="">{catg.title}</a></h4>
                                                    <p><a href="">{catg.author}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default National