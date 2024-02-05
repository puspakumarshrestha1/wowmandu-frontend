import React, { useEffect, useState } from 'react'
import './trending.scss'

function Trending() {

    useEffect(() => {
        $('#customers-testimonials').owlCarousel({
          loop: true,
          center: true,
          items: 3,
          margin: 30,
          autoplay: true,
          dots: true,
          nav: true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
        });
      }, []);


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
            <div id="trending">
                <div className="trending">
                    <div className="container">
                        <div className="trending-header text-center">
                            <h3 className='mb-4'><a href="">Trending News</a></h3>
                            <p>Abundantly creeping saw forth spirit can made appear fourth us.</p>
                        </div>
                        <div className="owl-carousel">
                            <div className="item">
                                <div className="trending-card">
                                    <div className="trending-card-img">
                                        <img className='w-100' src="https://preview.colorlib.com/theme/eden/img/magazine/15.jpg" alt="" />
                                    </div>
                                    <div className="trending-card-text">
                                        <div className="sub-heading">
                                            <a href="">Travel</a>
                                        </div>
                                        <h4><a href="">Blessed night morning on them you great</a></h4>
                                        <p><a href="">Like Comment Share</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending-card">
                                    <div className="trending-card-img">
                                        <img className='w-100' src="https://preview.colorlib.com/theme/eden/img/magazine/16.jpg" alt="" />
                                    </div>
                                    <div className="trending-card-text">
                                        <div className="sub-heading">
                                            <a href="">Travel</a>
                                        </div>
                                        <h4><a href="">Blessed night morning on them you great</a></h4>
                                        <p><a href="">Like Comment Share</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending-card">
                                    <div className="trending-card-img">
                                        <img className='w-100' src="https://preview.colorlib.com/theme/eden/img/magazine/17.jpg" alt="" />
                                    </div>
                                    <div className="trending-card-text">
                                        <div className="sub-heading">
                                            <a href="">Travel</a>
                                        </div>
                                        <h4><a href="">Blessed night morning on them you great</a></h4>
                                        <p><a href="">Like Comment Share</a></p>
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

export default Trending