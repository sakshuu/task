import React from 'react'
import { MyNavbar } from './component'
import { BlogForm, Home, Page404 } from './pages'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  "./css/index.css";

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/blog" element={<BlogForm/>}/>
  <Route path="*" element={<Page404/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App