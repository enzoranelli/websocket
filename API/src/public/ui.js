import { saveNotes } from "./socket-client.js"; 

export const onHandleSubmit = (e) =>{
    e.preventDefault();    
    saveNotes(noteForm['title'].value,noteForm['description'].value);
    
};