import {Add_Task, Edit_Task, FiltreDone_Task, FiltreUnDone_Task} from '../constant/actionTypes';
import {Delete_Task} from '../constant/actionTypes';
import {Done_Task} from '../constant/actionTypes';

export const addTask=(payload)=>{ 
    return{
        type:Add_Task, 
        payload
    }
}
export const deleteTask=(payload)=>{ 
    return{
        type:Delete_Task, 
        payload
    }
}
export const doneTask=(payload)=>{ 
    return{
        type:Done_Task, 
        payload
    }
}
export const editTask=(payload)=>{ 
    return{
        type:Edit_Task, 
        payload
    }
}
export const FiltreDone=()=>{ 
    return{
        type:FiltreDone_Task, 
        
    }
}
export const FiltreUnDone=()=>{ 
    return{
        type:FiltreUnDone_Task, 
        
    }
}

