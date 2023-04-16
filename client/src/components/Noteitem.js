import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import '../App.css'

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3"> 
            <div className="card my-3"> 
                <div className ="card-body">
                <div className='d-flex align-items-center'>
                <h5 className ="card-title">{note.title}</h5>
                <p className="mx-2 icon"><FiEdit onClick={()=>{updateNote(note)}}/></p>
                <p className="mx-2 icon"><AiOutlineDelete onClick={()=>{deleteNote(note._id); props.showAlert("Note deleted successfully", "success")}}/></p>
                </div>
                <p className ="card-text">{note.description}</p> 
                </div>
            </div>
        </div>
    )
}

export default Noteitem