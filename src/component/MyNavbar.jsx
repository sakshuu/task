import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return <>
<nav class="navbar navbar-expand-lg bg-light navbar-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Blog</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" to="/">Home</Link>
        <Link class="nav-link" to="/blog">Add Blog</Link>
      </div>
    </div>
  </div>
</nav>
  </>
}

export default MyNavbar