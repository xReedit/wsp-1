import { postDataPedidoBot } from "../services/httpClient.services";
import { ClassCliente } from "./cliente";

interface EstructuraInformacion {    
        sede: any;
        cliente: ClassCliente;
        pedido_cliente: {}   
        subtotalCostoEntrega: null
        isDelivery: boolean;
        isReserva: boolean;
        isRecogeLocal: boolean;
        isClienteRecogeLocal: boolean;
        solicitaCubiertos: boolean;
        canalConsumoSeleted: any;
        metodoPagoSeleted: any;
        pedidoEnviar: any;
        direccionGeolocalizada: any;
}

export class ClassInformacionPedido {
    private estructuraInfo: EstructuraInformacion;

    constructor() {
        this.estructuraInfo = {            
                sede: {},
                cliente: new ClassCliente(),
                pedido_cliente: {},
                subtotalCostoEntrega: null,
                isDelivery: false,
                isReserva: false,
                isRecogeLocal: false,
                isClienteRecogeLocal: false,
                solicitaCubiertos: false,
                canalConsumoSeleted: {},
                metodoPagoSeleted: {},    
                pedidoEnviar: {},
                direccionGeolocalizada: {},
        };
    }

    public setSede(sede: any) {
        this.estructuraInfo.sede = sede;
    }

    public setCliente(cliente: any) {
        this.estructuraInfo.cliente = cliente;
    }

    public setPedidoCliente(pedido_cliente: any) {
        this.estructuraInfo.pedido_cliente = pedido_cliente;
    }

    public getInfoPedido(): EstructuraInformacion {
        return this.estructuraInfo;
    }

    public getCliente(): ClassCliente {
        return this.estructuraInfo.cliente;
    }

    public getSede(): any {
        return this.estructuraInfo.sede.sede;
    }

    public getHorariosAtencion(): any {
        return this.estructuraInfo.sede.listHorariosAtencion;
    }

    public getlistCanalConsumo(): any {
        return this.estructuraInfo.sede.listCanalConsumo;
    }   
    
    public getlistTipoPago(): any {
        return this.estructuraInfo.sede.listTipoPago;
    }

    public getlistImpresoras(): any {
        return this.estructuraInfo.sede.listImpresoras;
    }

    public getConfigDelivery(): any {
        return this.estructuraInfo.sede.configDelivery;
    }

    public getPedidoCliente(): any {
        return this.estructuraInfo.pedido_cliente;
    }

    public getSubtotalCostoEntrega(): any {
        return this.estructuraInfo.subtotalCostoEntrega;
    }

    public setSubtotalCostoEntrega(subtotalCostoEntrega: any) {
        this.estructuraInfo.subtotalCostoEntrega = subtotalCostoEntrega;
    }

    public setIsDelivery(isDelivery: boolean) {
        this.estructuraInfo.isDelivery = isDelivery;
    }

    public getIsDelivery(): boolean {
        return this.estructuraInfo.isDelivery;
    }
    
    public setSolicitaCubiertos(solicitaCubiertos: boolean) {
        this.estructuraInfo.solicitaCubiertos = solicitaCubiertos;
    }

    public getSolicitaCubiertos(): boolean {
        return this.estructuraInfo.solicitaCubiertos;
    }

    public setCanalConsumoSeleted(canalConsumoSeleted: any) {
        this.estructuraInfo.canalConsumoSeleted = canalConsumoSeleted;
    }

    public getCanalConsumoSeleted(): any {
        return this.estructuraInfo.canalConsumoSeleted;
    }

    public setIsReserva(isReserva: boolean) {
        this.estructuraInfo.isReserva = isReserva;
    }

    public getIsReserva(): boolean {
        return this.estructuraInfo.isReserva;
    }   

    public setMetodoPagoSeleted(metodoPagoSeleted: any) {
        this.estructuraInfo.metodoPagoSeleted = metodoPagoSeleted;
    }

    public getMetodoPagoSeleted(): any {
        return this.estructuraInfo.metodoPagoSeleted;
    }

    public setIsClienteRecogeLocal(isClienteRecogeLocal: boolean) {
        this.estructuraInfo.isClienteRecogeLocal = isClienteRecogeLocal;
    }

    public getIsClienteRecogeLocal(): boolean {
        return this.estructuraInfo.isClienteRecogeLocal;
    }

    public setPedidoEnviar(pedidoEnviar: any) {
        this.estructuraInfo.pedidoEnviar = pedidoEnviar;
    }

    public getPedidoEnviar(): any {
        return this.estructuraInfo.pedidoEnviar;
    }

    public getListReglasCarta() {
        return this.estructuraInfo.sede.listReglasCarta;
    }    

    public setIsRecogeLocal(isRecogeLocal: boolean) {
        this.estructuraInfo.isRecogeLocal = isRecogeLocal;
    }

    public getIsRecogeLocal(): boolean {
        return this.estructuraInfo.isRecogeLocal;
    }

    public setDireccionGeolocalizada(direccionGeolocalizada: any) {
        this.estructuraInfo.direccionGeolocalizada = direccionGeolocalizada;
    }

    public getDireccionGeolocalizada(): any {
        return this.estructuraInfo.direccionGeolocalizada;
    }
    

}