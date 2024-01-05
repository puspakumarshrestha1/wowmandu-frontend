import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import './dashboard.scss'

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close the dropdown after selecting an option
    };


    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [file, setFile] = useState(null);
    const [blogContent, setBlogContent] = useState("");
    const [categories, setCategories] = useState("");


    const handleSumbit = async (e) => {
        e.preventDefault();
        const newPost = { title, author, blogContent, categories };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename;
            try {
                await axios.post("http://localhost:8000/api/blog/add-image", data);
            } catch (error) {
                console.log("cannot add image", error);
            }
        }

        try {
            await axios.post("http://localhost:8000/api/blog/add-blog", newPost);
            window.location.replace("/admin-dashboard-wowmandu")
        } catch (error) {
            console.log("cannot add blog", error)
        }
    }

    //get all blogs
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/blog");
                setBlogs(response.data.allBlogs);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getBlogs();
    }, []);

    function truncateText(text, maxLength) {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    const PF = "http://localhost:8000/images/";

    // delete logic
    const handleDelete = async (id, image) => {
        try {
            const shouldDelete = window.confirm("Are you sure you want to delete this blog?");

            if (!shouldDelete) {
                return;
            }

            if (image !== undefined) {
                // Delete image
                await axios.delete(`http://localhost:8000/delete/${image}`);
            } else {
                console.log("Image is empty. Skipping image deletion.");
            }

            if (id !== undefined) {
                // Delete blog
                await axios.delete(`http://localhost:8000/blog/delete/${id}`);
                console.log("Blog deleted!");
                window.location.reload();
            } else {
                console.log("ID is empty. Skipping blog deletion.");
            }

        } catch (error) {
            console.error("Error deleting image and blog:", error);
        }
    };

    //update blog
    return (
        <>
            <div className="dashboard">
                <div className="naccs">
                    <div className="grid">
                        <div className="gc gc--1-of-3">
                            <div className="dash-logo">
                                <img className='w-100' src="logo.png" alt="" />
                            </div>
                            <div className="menu">
                                <div className="active"><span className="light" /><span>Dashboards</span></div>
                                <div><span className="light" /><span>All Blogs</span></div>
                                <div><span className="light" /><span>Cards Section</span></div>
                                <div><span className="light" /><span>Trending Section</span></div>
                                <div><span className="light" /><span>Picks Section</span></div>
                                <div><span className="light" /><span>National Section</span></div>
                                <div><span className="light" /><span>Politics Section</span></div>
                                <div><span className="light" /><span>International Section</span></div>
                                <div><span className="light" /><span>Sports Section</span></div>
                                <div><span className="light" /><span>Banner Section</span></div>
                            </div>
                        </div>
                        <div className="gc gc--2-of-3">
                            <ul className="nacc">
                                <li className="active">
                                    <div className=''>

                                    </div>
                                </li>
                                <li>
                                    <div className="all-blocks">
                                        <div className="col-lg-12 col-md-12 ">
                                            {blogs.map((blog, i) => (
                                                <div className="picks-right" key={i}>
                                                    <div className="row g-4 align-items-center mb-md-4 mb-sm-5">
                                                        <div className="col-md-5 col-sm-5">
                                                            <div className="picks-right-img">
                                                                {blog.image && <img className='w-100' src={PF + blog.image} alt="" />}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 col-sm-7">
                                                            <div className="picks-right-text">
                                                                <Link to={`/find/${blog._id}`}><h4 className='mb-2 mt-2'>{blog.title}</h4></Link>
                                                                <p className='m-1'>Category:{blog.categories}</p>
                                                                <p>Author:{blog.author}</p>
                                                                <p>{truncateText(blog.blogContent, 100)}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="update-btn">
                                                                <Link to={`/update/${blog._id}`}>Update</Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="update-btn">
                                                                {/* <input type="submit" value='Delete' onClick={() => handleDelete(blog._id)} /> */}
                                                                <input type="submit" value='Delete' onClick={() => handleDelete(blog._id, blog.image)} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cards">
                                        <div className="cards-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="cards-top">
                                            <div className="cards-top-left">
                                                <div className="header">
                                                    <h6>Cards Section</h6>
                                                </div>
                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <select  >
                                                                    <option value="national">National</option>
                                                                    <option value="sports">Sports</option>
                                                                    {/* Add more options as needed */}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-0">
                                                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                    </div>
                                                </div>
                                                <div className="update-btn">
                                                    <input type="submit" value='Update' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="trending">
                                        <div className="trending-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="trending-card">
                                            <div className="header">
                                                <h6>Trending Card</h6>
                                            </div>
                                            <div className="row g-4">
                                                {file && <img className='w-100' src={URL.createObjectURL(file)} alt="" />
                                                }
                                                <form action="" onSubmit={handleSumbit} encType=''>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <input className='w-100' name='title' type="text" placeholder='Enter the Title' onChange={(e) => setTitle(e.target.value)} />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label htmlFor="category"></label>
                                                                <select className='w-100' name="categories" id="category" onChange={(e) => setCategories(e.target.value)} >
                                                                    <option value="national">National</option>
                                                                    <option value="international">International</option>
                                                                    <option value="sports">Sports</option>
                                                                    <option value="politics">Politics</option>
                                                                    {/* <option value="breaking news">Breaking News</option> */}
                                                                </select>
                                                            </div>
                                                            {/* <div className="col-md-12">
                                                                <input className='w-100' name='categories' type="text" placeholder='Enter the ' onChange={(e) => setCategories(e.target.value)} />
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <input className='w-100' name='image' type="file" autoFocus={true} placeholder='Enter the Image URL' onChange={(e) => setFile(e.target.files[0])} />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <input className='w-100' name='author' type="text" placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-0">
                                                        <textarea name="blogContent" id="" cols="30" rows="10" placeholder='Enter the News Description' onChange={(e) => setBlogContent(e.target.value)}></textarea>
                                                    </div>
                                                    <div className="update-btn">
                                                        {/* <input type="submit" value='Update' onClick={handlePost} /> */}
                                                        <button type='sumbit'>Post</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="picks">
                                        <div className="picks-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="picks-left">
                                            <div className="header">
                                                <h6>Picks Card</h6>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-0">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                </div>
                                            </div>
                                            <div className="update-btn">
                                                <input type="submit" value='Update' />
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="national">
                                        <div className="national-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="national-left">
                                            <div className="header">
                                                <h6>National Card</h6>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-0">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                </div>
                                            </div>
                                            <div className="update-btn">
                                                <input type="submit" value='Update' />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="politics">
                                        <div className="politics-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="politics-left">
                                            <div className="header">
                                                <h6>Politics Section</h6>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-0">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                </div>
                                            </div>
                                            <div className="update-btn">
                                                <input type="submit" value='Update' />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="international">
                                        <div className="international-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="international-left">
                                            <div className="header">
                                                <h6>International Section</h6>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-0">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                </div>
                                            </div>
                                            <div className="update-btn">
                                                <input type="submit" value='Update' />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="sports">
                                        <div className="sports-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="sports-left">
                                            <div className="header">
                                                <h6>Sports Section</h6>
                                            </div>
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Tag' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the News Heading' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <input className='w-100' type="text" placeholder='Enter the Published Date' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-0">
                                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter the News Description'></textarea>
                                                </div>
                                            </div>
                                            <div className="update-btn">
                                                <input type="submit" value='Update' />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner">
                                        <div className="banner-header text-center">
                                            <h4>Update The Existing Data</h4>
                                        </div>
                                        <div className="banner-img">
                                            <div className="header">
                                                <h6>Banner Img</h6>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input className='w-100' type="text" placeholder='Enter the Image URL' />
                                                </div>
                                                <div className="update-btn">
                                                    <input type="submit" value='Update' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}

export default Dashboard