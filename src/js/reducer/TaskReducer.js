import { Add_Task, Edit_Task, FiltreDone_Task, FiltreUnDone_Task } from '../constant/actionTypes';
import {Delete_Task , Done_Task} from '../constant/actionTypes';

const intialState={
    listtasks:[] 
}


export const reducerTask=(state=intialState,action)=>{
    switch (action.type) {
        case Add_Task:
    return{...state,listtasks:[...state.listtasks,action.payload]}
        case Delete_Task:
    return{...state,listtasks:state.listtasks.filter((el)=>el.id!==action.payload)} 
        case Done_Task:
    return{...state,listtasks:state.listtasks.map((el)=>el.id===action.payload? {...el,Done:!el.Done}:el )}
        case Edit_Task:
    return{...state,listtasks:state.listtasks.map((el)=>el.id===action.payload.id? {...el,text:action.payload.text}:el )}
        case FiltreDone_Task:
    return{...state,listtasks:state.listtasks.filter((el)=> el.Done===true )}
        case FiltreUnDone_Task:
    return{...state,listtasks:state.listtasks.filter((el)=> el.Done===false )}
    
    default:
            return state
    }
}
