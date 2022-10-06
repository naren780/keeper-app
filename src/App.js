import React,{useState} from 'react';
import Header from './compenents/header';
import Footer from './compenents/footer';
import Note from './compenents/Note2';

import './App.css';


  function App() {
  const[note,setNote]=useState({
    title:"",
    content:""

  })
  const[newNote,setNewNote]=useState([]);
  const changeHandler=(e)=>{
    const{name,value}=e.target;
    return setNote((prevnote)=> {
      return { ...prevnote,[name]:value}
     
    })
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    
    console.log(note)
    return setNewNote((prenote)=>{
      return [...prenote,note]
    })
  }
  // const onDelete = (ind) => {
  //   setNewNote(() => { 
  //     return newNote.filter((val,index) => {
  //       return index !== ind;
  //     }) 
  //   });
  return (
    <div >
      <Header/>
      <div className='form-div'>
        <form onSubmit={submitHandler}>
        <input type="text" 
               onChange={changeHandler} 
               placeholder=' Note Title'
               name="title"
               value={note.title}/><br/><br/>
        <input type="text"
               placeholder='Note content'
               name="content"
               value={note.content}
               onChange={changeHandler}/>
        <input type="submit" value="add"/>
        </form>
      
    </div>
      <Footer/>
      {newNote.map((value,index)=>{
        return <Note key={index}
                     id={index}
                     title={value.title}
                     content={value.content}
                    />
      })}
 
     
  
    
    </div>
  )
}
  

export default App;
