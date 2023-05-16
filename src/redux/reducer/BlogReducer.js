import { ADD_BLOG_DATA_FAIL, ADD_BLOG_DATA_REQUIEST, ADD_BLOG_DATA_SUCCESS, DELETE_BLOG_DATA_FAIL, DELETE_BLOG_DATA_REQUIEST, DELETE_BLOG_DATA_SUCCESS, GET_BLOG_DATA_FAIL, GET_BLOG_DATA_REQUIEST, GET_BLOG_DATA_SUCCESS } from "../constan/BolgConstan"

export const Blogs = (
    state = { blog:[] },
    {type, payload}
) => {
    switch (type) {
        case GET_BLOG_DATA_REQUIEST: return{...state, loading: true  }
        case GET_BLOG_DATA_SUCCESS: return{...state, loading: false,blog:payload }
        case GET_BLOG_DATA_FAIL: return{...state, loading: false, error: payload  }

        case ADD_BLOG_DATA_REQUIEST: return{...state, loading: true  }
        case ADD_BLOG_DATA_SUCCESS: return{...state, loading: false,  addedBlog:true }
        case ADD_BLOG_DATA_FAIL: return{...state, loading: false, error: payload  }

        case DELETE_BLOG_DATA_REQUIEST: return{...state, loading: true  }
        case DELETE_BLOG_DATA_SUCCESS: return{...state, blogremove:payload,  loading: false }
        case DELETE_BLOG_DATA_FAIL: return{...state, loading: false, error: payload  }
    
        default: return state
    }
}