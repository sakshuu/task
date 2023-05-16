import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {  blogDelete, getBlogList } from '../redux/action/BlogAction'


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
}
  
  return <>
  <div className="container">
    <div className="row main">
<div className="main">
  <div className='col-6 '>
    <input  type="text" className="form-control" id="name" placeholder="Search for the Blogs"
     onChange={e => handleSearch(e.target.value)}/>
    <br />
  </div>
</div>
{   allBlogs.map(item => < >
  <div className="col-6 col-md-4" key={item.id}>
<div className="card box">
  <h5>Tital: {item?.title}</h5>
  <hr />
  <p>{item?.body}</p>
  <div className="footer">
    <button type="button"  className="btn btn-primary" onClick={e => dispatch(blogDelete(item.id))}>Delete <i className="bi bi-trash3-fill"></i></button>
  </div>
</div>
      </div>
  
</>
  )   
}
    </div>
  </div>


  
  {/* <!-- Delete --> */}
  {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h4 className='text-red'>Sure, are you want delete this blog?</h4>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal" 
          >Yes</button>
          <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div> */}
  </>
}

export default Home