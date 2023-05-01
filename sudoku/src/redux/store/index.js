import { applyMiddleware, crateStore, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer";


const store = createStore(reducer, applyMiddleware(thunkMiddleware));



export default store;