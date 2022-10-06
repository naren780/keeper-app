import React from 'react'

const Inputfield = () => {
  return (
    <div className='form-div'>
        <form>
        <input type="text" placeholder=' Note Title'name="title"/><br/><br/>
        <input type="text" placeholder='Note content' name="content"/>
        </form>
      
    </div>
  )
}

export default Inputfield
