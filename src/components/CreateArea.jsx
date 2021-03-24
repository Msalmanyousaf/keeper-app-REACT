import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = React.useState(false);
    const [input, setInput] = React.useState({title:"", content:""});
    function handleInput(event){
        const {name, value} = event.target;
        setInput( (prevInput) => ({...prevInput, [name]: value}) );
    }

    function submitNote(event){
        event.preventDefault(); // because I have used form element so stop it from refereshing the page
        props.onAdd(input);
        setInput({title:"", content:""});}

    function expand() {
        setExpanded(true);
        }
        

    return (
        <div>
        <form className="create-note">
        {isExpanded && (<input value={input.title} 
                onChange={handleInput} 
                name="title" 
                placeholder="Title" 
            />)}
            <textarea value={input.content}
                onClick={expand}
                onChange={handleInput}
                name="content" 
                placeholder="Take a note..." 
                rows={isExpanded ? 3 : 1} 
            />
            <Zoom in={isExpanded}>
            <Fab onClick={submitNote}><NoteAddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
