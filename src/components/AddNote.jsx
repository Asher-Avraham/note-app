import { useState } from "react";


function AddNote({handleAddNote, handleEditNote, editMode, setEditMode, text, id}) {

  const [noteText, setNoteText] = useState(text);

  const characterLimit = 200;

  const color = editMode === false ? "#67d7cc" : "rgb(233, 233, 233)";

  const handleChange = (e) => {
    e.preventDefault();
    if (characterLimit - e.target.value.length >= 0){
      setNoteText(e.target.value);
    };
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      if(editMode){
        handleEditNote(id, noteText);
        setEditMode(false);
      } else {
        handleAddNote(noteText);
        setNoteText("");
      }
    } else {
      alert("Error: please type something");
    }
  };

  return (
    <div className="note new" style={{backgroundColor: color}}>
      <textarea
        rows="8"
        cols="10"
        onChange={handleChange}
        value={noteText}
        placeholder="Write something here..."
        autoFocus
        onFocus={e => e.currentTarget.select()}
        style={{backgroundColor: color}}
      >{noteText}</textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

AddNote.defaultProps = {
  editMode: false,
  text: "",
}

export default AddNote;