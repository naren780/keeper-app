import React from 'react'
function Note(props){
    return(
        <div className='note-div'>
        <div className="note">
            <p>{props.title}</p>
            
        </div>
        </div>
    )

}
export default Note;