import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return <>
<nav className="navbar navbar-expand-lg bg-light navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Add Blog</Link>
      </div>
    </div>
  </div>
</nav>
  </>
}

export default MyNavbar