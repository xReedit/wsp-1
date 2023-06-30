import { createBot, createProvider, createFlow, addKeyword, EVENTS } from '@bot-whatsapp/bot';
import { init } from "bot-ws-plugin-openai";
// import BaileysProvider from '@bot-whatsapp/provider/baileys';

import { ClassCliente } from "../clases/cliente";
import { flowPrincipal } from "../flows/flowPrincipal";
import { config } from '../config';
import { handlerAI } from '../services/utiles';
// import { ChatGPT } from '../clases/chatGpt5';
import { ClassInformacionPedido } from '../clases/info.pedido.class';
import { flowConfirmaPedido } from '../flows/flowConfirmaPedido';



const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
// const WPPConnectProviderClass = require('@bot-whatsapp/provider/wppconnect')
const WebWhatsappProvider = require('@bot-whatsapp/provider/web-whatsapp')
const JsonFileAdapter = require('@bot-whatsapp/database/json')


let classCliente = new ClassCliente();

class BotApp {
    public adapterProviderEvent: any;
    private nameSession: string;
    private infoSede: any;
    private socket: any;
    // private chatGpt2: ChatGPT;

    
    

    constructor(nameSession: string, infoSede: any, socket: any) {
        this.nameSession = nameSession;
        this.infoSede = infoSede;
        this.socket = socket;
    }

    public async init(): Promise<void> {     

        // envia las instrucciones a chatgpt
        // const chatGpt = new OpenAiClass();
        // const rptChatGpt = await chatGpt.sendChat([{
        //     role: "system",
        //     content: PROMPTS.rolMozo, // prompt de mozo
        // }])
        // console.log('rptChatGpt', rptChatGpt.choices[0].message.content);

        // const chatGPTx = new ChatGPTClass();
        // const textFromAI = await chatGPTx.handleMsgChatGPT(PROMPTS.rolMozo);
        // console.log('textFromAI', textFromAI.text);

        // const chatGpt = new miApiChatGPT(
        //     config.OPENAI_API_KEY
        // );

        // this.chatGpt2 = ChatGPT.getInstance(config.OPENAI_API_KEY);

        // const ChatGPTClass = require("./chatgpt.class");
        // const chatGPT3 = new ChatGPTClass2();

        // const chatGpt3Connection = new OpenAIConnection(config.OPENAI_API_KEY)
        // const chatGPT3 = new ChatGPT(config.OPENAI_API_KEY)
        let infoPedido = new ClassInformacionPedido()
        infoPedido.setSede(this.infoSede)
        infoPedido.setCliente(classCliente)

        
        

        
        
        
        const confChatGPT = {
            model: "gpt-3.5-turbo",
            temperature: 0,
            apiKey: config.OPENAI_API_KEY,
        };

        // const chatGptAddon = init(confChatGPT);   
        // const rptChatGpton = await chatGptAddon.sendChat([{
        //     role: "system",
        //     content: PROMPTS.rolMozo, // prompt de mozo
        // }])
        // console.log('rptChatGpt', rptChatGpton.choices[0].message.content);   
        
        
        const _flowPrincipal = flowPrincipal(infoPedido);
        const _flowConfirmar = flowConfirmaPedido(infoPedido)
        

        console.log('this.infoSede', infoPedido.getSede());

        // const _flowPrueba = addKeyword('prueba')
        //     .addAnswer('De preferencia escribalo en una solo linea. 2',
        //         { capture: true },
        //         async (ctx, { endFlow, flowDynamic, provider }) => {
        //             console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
        //             return await flowDynamic('aaa1')
        //         }
        //     )
        //     .addAnswer('De preferencia escribalo en una solo linea. 2',
        //         { capture: true },
        //         async (ctx, { endFlow, flowDynamic, provider }) => {
        //             console.log('eeeeeeee');
        //             return await endFlow('aaa2')
        //         }
        //     )

        // const pruebaLocation = addKeyword(EVENTS.LOCATION).addAction(
        //     async (ctx, ctxFn) => {
        //         console.log('🤖 pruebaLocation', ctx);
        //     }
        // )


        const flowVoiceNote = addKeyword('1', '2',EVENTS.VOICE_NOTE)
        //     .addAnswer(
        //     async (ctx, { flowDynamic }) => {
        //         console.log('ctx', ctx);
        //         // console.log('ctxFn', ctxFn);
        //         await flowDynamic("dame un momento para escucharte...🙉");
        //         console.log("🤖 voz a texto....");
        //         const text = await handlerAI(ctx);
        //         console.log(`🤖 Fin voz a texto....[TEXT]: ${text}`);                
        //     }
        // )
        .addAnswer([
            'Ya sabe que pedir? ó desea que le envie la carta?, escribe:',
            '*1* 🗒️ para tomarte el pedido',
            '*2* 🎴 para enviarte la carta'
            ]
                , {
                    capture: true
                },
                async (ctx, { endFlow, flowDynamic, provider }) => {                      
                    let rptUser = ctx.body.toLowerCase().trim()

                    if (rptUser.includes('event_voice')) { 
                        await flowDynamic("dame un momento para escucharte...🙉");
                        console.log("🤖 voz a texto....");
                        const text = await handlerAI(ctx);
                        console.log(`🤖 Fin voz a texto....[TEXT]: ${text}`); 
                        rptUser = text
                    }

                    console.log('rptUser', rptUser);
                }

        )
        
        const adapterDB = new JsonFileAdapter()
        const adapterFlow = createFlow([                        
            _flowPrincipal, _flowConfirmar
            // flowVoiceNote
        ]);

        const adapterProvider = createProvider(BaileysProvider, {
            name: this.nameSession
        });
        
       
        this.adapterProviderEvent = adapterProvider        

        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB      
        }); 
    }
    
}

export default BotApp;

// const botApp = new BotApp('aaa');
// botApp.main();