import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './update.scss'

function Update() {
    const blogID = useParams().id;
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    // const [file, setFile] = useState(null);
    const [blogContent, setBlogContent] = useState("");
    const [categories, setCategories] = useState("");

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/blog/find/${blogID}`);
            setTitle(res.data.blog.title);
            setAuthor(res.data.blog.author);
            setBlogContent(res.data.blog.blogContent);
            setCategories(res.data.blog.categories);
            // setFile(res.data.blog.image);
        } catch (error) {
            console.log("Unable to update", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [blogID]);


    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/blog/update-blog/${blogID}`, {
                title,
                author,
                blogContent,
                categories,
                // image,
            });
            navigate("/admin-dashboard-wowmandu");
        } catch (error) {
            console.log("Unable to update", error);
        }   
    };

    return (
        <>
            <div className="update my-5">
                <div className="container">
                    <div className="update-form">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className='w-100' name="title" type="text" placeholder='Enter the News Heading' onChange={(e) => setTitle(e.target.value)} value={title} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input className='w-100' name="categories" type="text" placeholder='Enter the News Tag' onChange={(e) => setCategories(e.target.value)} value={categories} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className='w-100' name="author" type="text" placeholder='Enter the author' onChange={(e) => setAuthor(e.target.value)} value={author} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-0">
                                <textarea name="blogContent" id="" cols="30" rows="10" placeholder='Enter the News Description' onChange={(e) => setBlogContent(e.target.value)} value={blogContent}></textarea>
                            </div>
                            <div className="update-btn">
                                <input type="submit" value='Update' onClick={handleClick} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Update