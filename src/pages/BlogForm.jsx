import React, { useState } from 'react'
import { blogListData } from '../redux/action/BlogAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const BlogForm = () => {
    const { error, addedBlog, loading } = useSelector(state => state.allBlogs)
    const actionDispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        title: "",
        body: "",
    })
    const blogAddedUser = e => {
        actionDispatch(blogListData())
        navigate("/")
    }
  
  return <>
  <div class="container pro">
        <div class="row main">
          <div class="col-sm-6 offset-sm-3">
          {error && <div class="alert alert-danger">{error}</div>}
                {loading && <div class="spinner-border"></div>}
            <div class="card">
              <div class="card-header">Add Blog</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userData.title}
                    onChange={e => setuserData({ ...userData, title: e.target.value })}
                    id="title"
                    placeholder="Enter your Title"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="email" class="form-label">Description</label>
                  <input
                    type="text"
                    value={userData. body}
                    onChange={e => setuserData({ ...userData, body: e.target.value })}
                    class="form-control"
                    id="description"
                    placeholder="Enter Your Description"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3" onClick={blogAddedUser}>
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