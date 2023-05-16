import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  getBlogList } from '../redux/action/BlogAction'


const Home = () => {
  const dispatch =  useDispatch()
  const {blog, blogremove} = useSelector(state => state.allBlogs)
const [allBlogs, setAllBlogs] = useState([])

useEffect(() => {
  blog && setAllBlogs(blog)
}, [blog])

useEffect(() => {
  dispatch(getBlogList())
}, [blogremove])

  const handleSearch = searchTearm => {
    const result = blog.filter(item => item.title.includes(searchTearm))
    setAllBlogs(result)
    console.log(result);
}

const handleShowDelete = (item) => {
  setAllBlogs(item)
}

const handleDelete = () => {
  dispatch(blogDelete(allBlogs.id))
}
  
  return <>
  <div className="container">
    <div className="row main">
<div className="main">
  <div className='col-6 '>
    <input  type="text" class="form-control" id="name" placeholder="Search for the Blogs"
     onChange={e => handleSearch(e.target.value)}/>
    <br />
  </div>
</div>
{   allBlogs.map(item => <>
    <div className="col-6 col-md-4">
<div className="card box">
  <h5>Tital: {item?.title}</h5>
  <hr />
  <p>{item?.body}</p>
  <div className="footer">
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary" onClick={e => handleShowDelete(item)}>Delete <i class="bi bi-trash3-fill"></i></button>
  </div>
</div>
      </div>
  
</>
  )   
}
    </div>
  </div>


  
  {/* <!-- Delete --> */}
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h4 className='text-red'>Sure, are you want delete this blog?</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal" 
          onClick={handleDelete}>Yes</button>
          <button type="button" class="btn btn-primary"  data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Home