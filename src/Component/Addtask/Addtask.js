import React,{useState} from 'react'
import { Button ,FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import{addTask}from '../../js/action/action'
import { FiltreDone, FiltreUnDone} from '../../js/action/action';



function Addtask() {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch() 
    const Add =(e) => {
        
        if(Input) {e.preventDefault() 
            dispatch(addTask({text:Input,id:Math.random(),Done:false}));
    setInput('')} else{ alert('Add a Task')}}
    return (

  
        <div className='header' >
          <h1 className='title'>ToDo Liste</h1>

  
    <FormControl 
      placeholder="Tap your Task"
      aria-label=" Task"
      aria-describedby="basic-addon2"
      style={{ display: "flex", maxWidth: "60%",padding: "10px",
      margin: "10px",
      borderRadius: "8px",
      marginLeft: "20%", }}
      onChange={(e)=>setInput(e.target.value)} 
      value={Input}
    />
      <Button style={{
        backgroundColor: "blue",
        color: "white"
      }} variant="outline-secondary" onClick={Add} >Add A Task</Button>
     
      <Button  variant="outline-secondary" style={{marginLeft: "20px" }} onClick={()=>dispatch(FiltreDone())} >Done</Button>

      <Button variant="outline-secondary" style={{marginLeft: "20px" }} onClick={()=>dispatch(FiltreUnDone())}  >UnDone</Button>
 
   </div>


        
    )
}

export default Addtask
