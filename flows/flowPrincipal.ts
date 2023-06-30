import { ChatGPT } from "../clases/chatGpt5";
import { ClassCliente } from "../clases/cliente";
import { ClassInformacionPedido } from "../clases/info.pedido.class";
import { getClienteByCelular } from "../controllers/api.restobar";
import { delay, saludosBienvenida } from "../services/utiles";
import { flowComprobante } from "./flowComprobantes";
import { flowPedido } from "./flowPedido";
const { addKeyword } = require("@bot-whatsapp/bot");


export const flowPrincipal = (infoPedido: ClassInformacionPedido) => {    

    let infoCliente: ClassCliente = infoPedido.getCliente();

    // const _flowPedido = flowPedido(infoPedido);

    return addKeyword(['hola', 'Buenas', 'Buen dia', 'Buenos', 'ola', 'beunas'])
    .addAnswer('🤖 Hola, soy Piter su asistente virtual.')
    .addAction(
        async (ctx, { endFlow, flowDynamic, provider }) => {            

            // buscamos al cliente por el numero de telefono
            const _num_telefono = '934746830' // ctx.from                                        
            // const _num_telefono = ctx.from                                        
            infoCliente = await getClienteByCelular(_num_telefono, infoCliente)                        
            console.log('infoCliente', infoCliente);
            infoPedido.setCliente(infoCliente)

            // si se encuentra registrado saludamos primero
            if (infoCliente.getIsRegister()) {
                const saludo = saludosBienvenida(infoCliente.getNombrePila())                                
                return flowDynamic(saludo)
            }              
            
            // await delay(1000)                                                                 
        }

    )
    .addAnswer(
        [
        '👉 Elige una de las opciones, escribe:',
        '*1*  🥗 para hacer un pedido',
        '*2*  🎴 para enviarte la carta',
        '*3*  📃 para reenviarte un comprobante'
        ], null, null ,
        [
            flowPedido(infoPedido),
            flowComprobante(infoPedido.getSede())
        ]
    )
    

}
