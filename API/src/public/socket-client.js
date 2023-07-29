const socket = io();

export const loadNotes = () =>{
    socket.on('loadnotes', (notas)=>{
        console.log(notas);
     });
};

export const saveNotes = (title, description) =>{
    socket.emit('newnote',{
        title, description
    });
}