import React from 'react'
import {useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deleteTask ,doneTask} from '../../js/action/action';
import EditTask from '../../Component/edittask/edittask';
import "bootstrap/dist/css/bootstrap.min.css";
import {BsFillTrashFill} from 'react-icons/bs';





function ListTask() {
    const dispatch = useDispatch() 
    const Tasks = useSelector((state) => state.listtasks)
    return (
        <div>

           {Tasks.map((task,key)=>(
               <div className='body' key={key}
               style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#20c997",
                maxWidth: "50%",
                padding: "10px",
                margin: "10px",
                borderRadius: "8px",
                marginLeft: "20%",
              }}>
                  <div >
              <h1 className='task'>{task.text}</h1> 
              </div>
              <div className='buttons'  style={{display: "flex",
              flexDirection:"row" , alignItems:"center" , padding: "10px"}}>

      <EditTask style={{ color: "white" , marginLeft: "10px"}}  task={task}/>

  
      <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))} style={{marginLeft: "10px" }}><BsFillTrashFill></BsFillTrashFill> delete task</Button>
      <Button variant="outline-secondary" style={{ color: "white" , marginLeft: "10px"}} onClick={()=>dispatch(doneTask(task.id))} >{task.Done?'IsDone':'Undone'}</Button>
     

    </div>
    </div>))}
    </div>
     )

     
}

export default ListTask
