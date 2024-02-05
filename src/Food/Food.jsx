import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './food.scss'

function Food() {
    const [News, setNews] = useState([])
    useEffect(() => {
        axios.get('Data/news.json')
            .then(res => {
                console.log(res.data);
                setNews(res.data)
            });
    }, [])

    
    const [category, setCategory] = useState('food');
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
        <div id="international">
        <div className="international">
                <div className="container">
                    <div className="international-header text-center">
                        <h3 className='mb-4'><a href="">Foods</a></h3>
                        <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                    </div>
                    <div className="row">
                    {showBlogCat.slice(0,1).map((catg, i) => (
                        <div className="col-lg-7 col-md-12">
                            <div className="international-left">
                                <div className="international-left-img">
                                <img className='w-100' src={PF + catg.image} alt="" />
                                </div>
                                <div className="international-left-text">
                                    <div className="sub-heading">
                                        <a className='' href="">shoes / <span className='currentDate'>March 15, 2019</span></a>
                                    </div>
                                    <h3 className='mt-2 mb-3'> <a href="">{catg.title}</a></h3>
                                            <p><a href="">{catg.author}</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                        <div className="col-lg-5 col-md-12">
                        {showBlogCat.slice(1,3).map((catg, i) => (
                                <div className="international-right">
                                <div className="row mb-lg-4 mb-md-4">
                                    <div className="col-md-5 col-sm-5  pe-md-0 pe-sm-0">
                                        <div className="international-right-img">
                                        <img className='w-100 int-img' src={PF + catg.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-7  ps-md-0 ps-sm-0">
                                        <div className="international-right-text p-3">
                                            <div className="sub-heading">
                                            <a className='' href="">shoes / <span className='currentDate'>March 15, 2019</span></a>
                                            <h3 className='mt-2 mb-3'> <a href="">{catg.title}</a></h3>
                                            </div>
                                            <p><a href="">{catg.author}</a></p>
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

export default Food