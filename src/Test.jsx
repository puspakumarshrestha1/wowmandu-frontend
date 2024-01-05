import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Test = () => {
    const blogID = useParams().id;
    const [showBlog, setShowBlog] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('food');
    const getBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/blog?category=${selectedCategory}`);
            // const response = await axios.get(`http://localhost:8000/api/blog/find/6593cb9baa2ce8aab2f09b1a`);
            setShowBlog(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("Can not fetch blog!", error);
        }
    }
    useEffect(() => {
        getBlog();
    }, [blogID,setSelectedCategory])
  return (
    <div>
        {
            showBlog && (
                <div>{showBlog.title}</div>
            )
        }
    </div>
  )
}

export default Test

