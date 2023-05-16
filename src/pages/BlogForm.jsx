import React, { useState } from 'react'
import { blogListData } from '../redux/action/BlogAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const BlogForm = () => {
    const { error, loading } = useSelector(state => state.allBlogs)
    const actionDispatch = useDispatch()
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState({
        title: "",
        body: "",
    })
    const blogAddedUser = e => {
        actionDispatch(blogListData())
        navigate("/")
    }
  
  return <>
  <div className="container pro">
        <div className="row main">
          <div className="col-sm-6 offset-sm-3">
          {error && <div className="alert alert-danger">{error}</div>}
                {loading && <div className="spinner-border"></div>}
            <div className="card">
              <div className="card-header">Add Blog</div>
              <div className="card-body">
                <div>
                  <label for="name" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={blogData.title}
                    onChange={e => setBlogData({ ...blogData, title: e.target.value })}
                    id="title"
                    placeholder="Enter your Title"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="mt-2">
                  <label for="email" className="form-label">Description</label>
                  <input
                    type="text"
                    value={blogData. body}
                    onChange={e => setBlogData({ ...blogData, body: e.target.value })}
                    className="form-control"
                    id="description"
                    placeholder="Enter Your Description"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <button type="button" className="btn btn-primary w-100 mt-3" onClick={blogAddedUser}>
                  Add Blog
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default BlogForm