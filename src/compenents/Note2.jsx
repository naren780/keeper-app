import React from 'react'

const Note2 = (props) => {
  return (
    <div className='container'>
    <div className='note'>
        <p>{props.title}</p>
        <p>{props.content}</p>
        <button  onClick={()=>props.onChange(props.id)}><span>Delete</span></button>
      
    </div>
    </div>
  )
}

export default Note2;
