import { MdDeleteForever } from 'react-icons/md'



const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span className='span-wrap'>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='20px' />
            </div>


        </div>
    )
}

export default Note