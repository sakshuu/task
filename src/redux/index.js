import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { Blogs } from "./reducer/BlogReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    allBlogs : Blogs
})
const store = createStore(
    rootReducer,
    { },
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
