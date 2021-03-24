import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = React.useState([]);

  function addInput(newNote){
    setNotes( (prevNotes) => [...prevNotes, newNote]
     );
  }

  function deleteInput(id){
    setNotes( (prevNotes) => {
      return(
        prevNotes.filter( (entry, index) => {
          return index != id;
        } )
      );

    } );
    

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addInput}/>
      {notes.map( (aNote, index) => {return(
        <Note key={index} 
        id = {index} 
        title={aNote.title} 
        content={aNote.content} 
        delete={deleteInput}
        />);
      } )}
  
      
      <Footer />
    </div>
  );
}

export default App;
