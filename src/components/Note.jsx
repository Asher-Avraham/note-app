import { MdCreate, MdDeleteForever } from "react-icons/md";

function Note({id, text, date, handleDeleteNote, handleEditNote}) {

  return (
    <div className="note">
      <span>{text}</span> 
      <div className="note-footer">
        <small>{date}</small>
        <div>
        <MdCreate 
          size="1.3em"
          className="note-footer-icon"
          onClick={() => handleEditNote(id, text)}
        />
        <MdDeleteForever 
          className="note-footer-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)} 
          />
        </div>
      </div>
      </div>
  )
}
export default Note