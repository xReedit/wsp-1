// esta clase estable conexion con el api prisma.io de restobar
//@ts-ignore

import { ClassCliente } from "../clases/cliente"
import { getData, postData, postDataBot } from "../services/httpClient.services"
// import { soundex } from "../services/soundex"
import { capitalize } from "../services/utiles"
// import * as soundex from 'soundex-code';

//@ts-ignore
// import * as soundex from 'soundex-code'



const EVENTO = 'chat-bot'

// quita al numero de telefono el @c.us y pais
export const getNumeroCelular = (num_telefono: string) => {
    let _num = num_telefono.split('@')[0]
    _num = _num.indexOf('+') > -1 ? _num.split('+')[1] : _num    
    return _num = _num.length > 9 ? _num.substring(2) : _num    
}

// consulta cliente por numero de celular // y devuelve el cliente
export const getClienteByCelular = async (num_telefono: string, data_cliente: ClassCliente) => {    
    num_telefono = getNumeroCelular(num_telefono)    

    const rpt =  await getData(EVENTO, `cliente/${num_telefono}`)    
    console.log('¿rpt', rpt);
    const isData = rpt.length > 0 ? true : false    
    if (isData) {
        const _data = rpt[0]
        // nombre de pila la primera letra con mayuscula
        const _nombre_pila = capitalize(_data.nombres.split(' ')[0])
        const _isTieneDireccionesRegistradas = _data.pwa_direccion === '0' ? false : true
        const direcciones = _isTieneDireccionesRegistradas ? _data.direcciones : [_data.direccion]
        data_cliente.setNombre(_data.nombres)
        data_cliente.setNombrePila(_nombre_pila)
        data_cliente.setCelular(num_telefono)
        // data_cliente.setDirecciones([_data.direccion])        
        data_cliente.setDirecciones(direcciones)        
        data_cliente.setIsDireccionRegistrada(_isTieneDireccionesRegistradas)
        data_cliente.setIdCliente(_data.idcliente)
        data_cliente.setIsRegister(true)
    } else {        
        data_cliente.setCelular(num_telefono)
        data_cliente.setIsRegister(false)
    }

    return data_cliente;
}

// obtener horarios y dias de atencion
export const getListCartaHorariosAtencion = async (idsede: number) => {
    const rpt = await getData(EVENTO, `horarios/${idsede}`)    
    const isData = rpt.length > 0 ? true : false 
    return isData ? rpt : false
}

// obtener datos del comericio, informacion de la sede, horarios de atencion
export const getInfoSede = async (idsede: number) => {
    const infoSede = await getData(EVENTO, `sede/${idsede}`)    
    let isData = infoSede.length > 0 ? true : false 
    if (isData) {
        
    }

    //horarios
    const rpt = await getData(EVENTO, `horarios/${idsede}`)
    isData = rpt.length > 0 ? true : false    
}


// obtiene la carta del establecimiento
export const getCartaEstablecimiento = async (idsede) => {
    const rpt = await getData('chat-bot', `get-carta-establecimiento/${idsede}`)    
    return rpt;    
}


// optener reglas de la carta   
export const getReglasCarta = async (idsede, idorg) => {
    const rpt = await getData('chat-bot', `get-reglas-carta/${idsede}/${idorg}`)    
    return rpt;    
}

// obtener comprobante electronico
export const getComprobanteElectronico = async (idsede, dni, serie, numero) => {    
    const rpt = await getData('chat-bot', `get-comprobante-electronico/${idsede}/${dni}/${serie}/${numero}`)    
    return rpt;    
}