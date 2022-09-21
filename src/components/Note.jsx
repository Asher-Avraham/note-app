import { useState } from "react";
import { MdCreate, MdDeleteForever } from "react-icons/md";
import AddNote from "./AddNote";

function Note({id, text, date, handleDeleteNote, handleEditNote}) {

	const [editMode, setEditMode] = useState(false);

	const handleClick = (id, text) => {
		setEditMode(true);
	}

  return (
	<>
	{editMode ? 
		(
			<AddNote 
				id={id}
				text={text} 
				handleEditNote={handleEditNote} 
				editMode={editMode}
				setEditMode={setEditMode} 
			/>
		) : 
		(
			<div className="note">
    	  <span>{text}</span> 
    	  	<div className="note-footer">
    	  		<small>{date}</small>
    	  		<div>
    	  		  <MdCreate 
    	  		    size="1.3em"
    	  		    className="note-footer-icon"
    	  		    onClick={() => handleClick(id, text)}
    	  		  />
    	  		  <MdDeleteForever 
    	  		    className="note-footer-icon"
    	  		    size="1.3em"
    	  		    onClick={() => handleDeleteNote(id)} 
    	  		    />
    	  		</div>
    	  	</div>
    	  </div>
		)}
  </>);
};
export default Note;