import { config } from '../config';
import  BotApp  from './piter';
import * as fs from 'fs'

const socketsConnect = (io: any) => {
    io.on('connection', (socket: any) => {
        console.log('datos socket', socket.id);

        // socket.disconnect()
        socket.emit('message', 'Hello bienvenid a piter chat bot')


        socket.on('disconnect', (reason: any) => {
            console.log('disconnect');
            // socket.broadcast.to(socket.id).emit('disconnect');
            socket.disconnect()        
        });
        

        socket.on('init_bot', (playload: any) => {
            
            const _nameSession = playload.nameSession
            let  infoSede = playload.infoSede
            console.log('nombre session', _nameSession);    
            console.log('_infoSede ===', infoSede);

            
            const newBot = new BotApp(_nameSession, infoSede, socket);
            newBot.init();

            // eventos
            // newBot.adapterProviderEvent.on('require_action', (data) => {
            //     // muestra el codigo QR -session NO inciada-
            //     console.log('Session no iniciada ', data)
            //     socket.emit('session_init', false)

            //     const _nameQr = `${_nameSession}.qr.png`
            //     setTimeout(() => {
            //         fs.readFile(_nameQr, function (err, data) {
            //             socket.emit('image_qr_session', "data:image/png;base64," + data.toString("base64"));
            //         })
            //     }, 1500);

            // });

            // newBot.adapterProviderEvent.on('ready', (data) => {
            //     console.log('Session Iniciada ', data)
            //     socket.emit('session_init', true)
            // });            

            
        })
    })
}

export = socketsConnect;