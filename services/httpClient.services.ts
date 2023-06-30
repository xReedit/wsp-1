import { config } from '../config';
const PUBLIC_API_KEY = config.URL_API_RESTOBAR

// export function get apirest
export const getData = async (controller: string, event: string, payload: any = null) => {
    const url = `${PUBLIC_API_KEY}/${controller}/${event}`    

    // const token = localStorage.getItem('token') || ''
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    // }

    // console.log('object', headers); 

    

    let response;
    if (payload) {
        response = await fetch(url, {
            method: 'GET',
            headers: {},
            body: JSON.stringify(payload)
        })
    } else {
        response = await fetch(url, {
            method: 'GET',
            headers: {}
        })
    }

    return response.json()
}

// export function post apirest
export const postDataBot = async (controller: string, event: string, payload: any) => {
    const url = `${PUBLIC_API_KEY}/${controller}/${event}`
    // const token = localStorage.getItem('token')
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    // }

    const _rpt = await fetch(url, {
        method: 'POST',
        headers: {},
        body: JSON.stringify(payload)
    })

    return _rpt.json()
}

// export function post apirest
export const postData = async (controller: string, event: string, payload: any) => {
    const url = `${PUBLIC_API_KEY}/${controller}/${event}`
    const token = localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    return await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}

export const postDataJSON = async (controller: string, event: string, payload: any) => {
    const url = `${PUBLIC_API_KEY}/${controller}/${event}`
    const token = localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const _rpt = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })

    return _rpt.json()
}

// export function put apirest
export const putData = async (controller: string, event: string, payload: any = null) => {
    const url = `${PUBLIC_API_KEY}/${controller}/${event}`
    const token = localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    return await fetch(url, {
        method: 'PUT',
        headers,
        body: payload ? JSON.stringify(payload) : payload
    })
}


// enviar pedido al api de pedidos
export const postDataPedidoBot = async (controller: string, event: string, payload: any) => {
    const url = `${config.PUBLIC_URL_API_PEDIDO}/${controller}/${event}`
    // const token = localStorage.getItem('token')
    const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
    }

    return await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
}
