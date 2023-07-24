import {connect} from 'mongoose';


export const connectDB = async () =>{
    try{
        await connect('mongodb://localhost/websocketdb');
        console.log('Connect to db')
    }catch(error){
        console.error(error)
    }
    
}