import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.scss";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  //get all blogs
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blog");
        setBlogs(response.data.allBlogs);
        console.log(response.data.allBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBlogs();
  }, []);

  function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  const PF = "http://localhost:8000/images/";

  //add blogs
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
      window.location.replace("/admin-dashboard-wowmandu");
    } catch (error) {
      console.log("cannot add blog", error);
    }
  };

  // delete logic
  const handleDelete = async (id, image) => {
    try {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this blog?"
      );

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

  return (
    <>
      <div className="dashboard">
        <div className="naccs">
          <div className="grid">
            <div className="gc gc--1-of-3">
              <div className="dash-logo">
                <img className="w-100" src="logo.png" alt="" />
              </div>
              <div className="menu">
                <div className="active">
                  <span className="light" />
                  <span>Dashboards</span>
                </div>
                <div>
                  <span className="light" />
                  <span>All Blogs</span>
                </div>
                <div>
                  <span className="light" />
                  <span>Add Blogs</span>
                </div>
                <div>
                  <span className="light" />
                  <span>Add Banner</span>
                </div>
              </div>
            </div>

            <div className="gc gc--2-of-3">
              <ul className="nacc">
                <li className="active">
                  <div className=""></div>
                </li>
                <li>
                  <div className="all-blogs">
                    <div className="col-lg-12 col-md-12 ">
                      {blogs.map((blog, i) => (
                        <div className="picks-right mb-4" key={i}>
                          <div className="row g-4 align-items-center mb-md-4 mb-sm-5">
                            <div className="col-md-5 col-sm-5">
                              <div className="picks-right-img">
                                {blog.image && (
                                  <img
                                    className="w-100"
                                    src={PF + blog.image}
                                    alt=""
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <div className="picks-right-text">
                                <Link to={`/find/${blog._id}`}>
                                  <h4 className="mb-2 mt-2">{blog.title}</h4>
                                </Link>
                                <p className="m-1">
                                  Category:{blog.categories}
                                </p>
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
                              <div className="delete-btn">
                                <input
                                  type="submit"
                                  value="Delete"
                                  onClick={() =>
                                    handleDelete(blog._id, blog.image)
                                  }
                                />{" "}
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
                      <h4>Add Blogs</h4>
                    </div>
                    <div className="cards-top">
                      <div className="cards-top-left">
                        <div className="header">
                          <h6></h6>
                        </div>
                        <div className="row g-4">
                          {file && (
                            <img
                              className="w-100"
                              src={URL.createObjectURL(file)}
                              alt=""
                            />
                          )}
                          <form action="" onSubmit={handleSumbit}>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <label htmlFor="category"></label>
                                  <select
                                    className="w-100"
                                    name="categories"
                                    id="category"
                                    onChange={(e) =>
                                      setCategories(e.target.value)
                                    }
                                  >
                                    <option value="sports">Sports</option>
                                    <option value="national">National</option>
                                    <option value="international">International</option>
                                    <option value="trending">Trending</option>
                                    <option value="political">Political</option>
                                    <option value="food">Food</option>
                                    <option value="lifestyle">Lifestyle</option>
                                  </select>
                                </div>
                                <div className="col-md-12">
                                  <input
                                    className="w-100"
                                    type="text"
                                    placeholder="Enter the Blog Title"
                                    name="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-12">
                                  <input
                                    className="w-100"
                                    name="image"
                                    type="file"
                                    autoFocus={true}
                                    placeholder="Add your blog image"
                                    onChange={(e) => setFile(e.target.files[0])}
                                  />
                                </div>
                                <div className="col-md-12">
                                  <input
                                    className="w-100"
                                    name="author"
                                    type="text"
                                    placeholder="Author"
                                    onChange={(e) => setAuthor(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mt-0">
                              <textarea
                                name="blogContent"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Enter the News Description"
                                onChange={(e) => setBlogContent(e.target.value)}
                              ></textarea>
                            </div>
                            <div className="update-btn">
                              <input type="submit" value="Add" />
                            </div>
                          </form>
                        </div>
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
                          <input
                            className="w-100"
                            type="text"
                            placeholder="Enter the Image URL"
                          />
                        </div>
                        <div className="update-btn">
                          <input type="submit" value="Add Banner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
