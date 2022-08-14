import {createStore} from 'redux'
import {reducerTask}from'../reducer/TaskReducer'



const store= createStore(reducerTask,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store ;
