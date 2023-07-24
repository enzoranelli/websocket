import app from "./app";
import {Server as WebSockeServer} from 'socket.io';
import http from 'http';
import { connectDB } from "./db";

connectDB();

const server  = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebSockeServer(httpServer);



console.log('Server on port', 3000);