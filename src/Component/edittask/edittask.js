import React , {useState} from "react";
import { Button ,Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import{editTask} from '../../js/action/action'
import{BiEdit} from 'react-icons/bi'

function EditTask({task}) {
    const [show, setShow] = useState(false);
    const [Edit, setEdit] = useState(task.text)
    const  dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      
        <>
        
      <Button style ={{marginLeft: 10}} variant="info" onClick={handleShow}><BiEdit>Edit</BiEdit></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite Task</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body><input></input></Modal.Body> */}
        <input value={Edit}
        onChange={(e)=>setEdit(e.target.value)}
        
        ></input>
        <Modal.Footer>
          <Button variant="secondary"  onClick={()=>{handleClose();setEdit(task.text)}}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={()=>{handleClose();
            dispatch(editTask({id:task.id,text:Edit,Done:task.Done}))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
    </div>
  );
}

export default EditTask;
