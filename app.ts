import express, { Application, Request, Response } from 'express';
import { createServer } from "http";
import { Server } from 'socket.io';
import cors from 'cors'; 
import socketsConnect  from './controllers/socket';
// import { config } from './config';

import dotenv from 'dotenv';
dotenv.config();

// import 'dotenv/config'

const PORT = process.env.PORT
const PORT_SOCKET_CHAT = process.env.PORT_SOCKET

const app = express();
app.use(cors()); 
app.use(express.json());

const httpServer = createServer(app);


var routesPiter = require('./routes/index');
app.use('/piter-bot', routesPiter);

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello Piter Bot !');
});


const io = new Server(httpServer, {
    cors: { origin: '*' },
    pingInterval: 10000,
    pingTimeout: 30000,
    cookie: false,
    allowEIO3: true
}).listen(5624)

socketsConnect(io)
// io.on('connection', (socket: any) => {
//     console.log('datos socket', socket.id);

//     // socket.disconnect()

//     io.emit('message', 'Hello bienvenido a piter! el CHAT BOT')
// })




httpServer.listen(PORT, () => {    
    console.log('Server is running.. port  ' + PORT);
});

exports = app;