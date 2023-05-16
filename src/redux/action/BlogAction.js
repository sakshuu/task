import axios from "axios";
import { ADD_BLOG_DATA_FAIL, ADD_BLOG_DATA_REQUIEST, ADD_BLOG_DATA_SUCCESS, DELETE_BLOG_DATA_FAIL, DELETE_BLOG_DATA_REQUIEST, DELETE_BLOG_DATA_SUCCESS, GET_BLOG_DATA_FAIL, GET_BLOG_DATA_REQUIEST, GET_BLOG_DATA_SUCCESS } from "../constan/BolgConstan"

export const getBlogList = () => async dispatch => {
    try {
        dispatch({ type:GET_BLOG_DATA_REQUIEST })
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts") 
        dispatch({ type: GET_BLOG_DATA_SUCCESS, payload:data })
    } catch (error) {
        dispatch({ type:GET_BLOG_DATA_FAIL, payload: error.message})
    }
}


export const blogListData = blogdata => async dispatch => {
    try {
        dispatch({ type:ADD_BLOG_DATA_REQUIEST })
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", blogdata) 
        dispatch({ type: ADD_BLOG_DATA_SUCCESS})
    } catch (error) {
        dispatch({ type:ADD_BLOG_DATA_FAIL, payload: error.message})
    }
}

export const ShopListDelete = (id) => async dispatch => {
    try {
        dispatch({ type:DELETE_BLOG_DATA_REQUIEST })
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`) 
        dispatch({ type: DELETE_BLOG_DATA_SUCCESS, payload:data})
    } catch (error) {
        dispatch({ type:DELETE_BLOG_DATA_FAIL, payload: error.message})
    }
}