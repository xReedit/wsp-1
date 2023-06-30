export  class ClassCliente {    
    private nombre: string;
    private apellido: string;
    private celular: string;
    private direcciones: string[];
    private direccionSeleccionada: any;
    private referencia_de_direccion: string
    private ruc: string;
    private idcliente: number;
    private isregister: boolean;
    private nombre_pila: string;   
    private num_personas: number;
    private hora_llegada: string; 
    private isDireccionRegistrada: boolean = false;
    private idcliente_pwa_direccion: number = 0;

    constructor(nombre: string='', apellido: string = '', celular: string = '', direcciones: string[] = [''], ruc:string = '', idcliente: number=0, isregister:boolean = false , referencia_de_direccion: string = '', num_personas: number = 0, hora_llegada: string = '', isDireccionRegistrada: boolean = false, idcliente_pwa_direccion: number = 0) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celular = celular;
        this.direcciones = direcciones;
        this.ruc = ruc;
        this.direccionSeleccionada = '';
        this.idcliente = idcliente;
        this.isregister = isregister;                
        this.referencia_de_direccion = referencia_de_direccion;
        this.num_personas = num_personas;
        this.hora_llegada = hora_llegada;
        this.isDireccionRegistrada = isDireccionRegistrada;
        this.idcliente_pwa_direccion = idcliente_pwa_direccion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getCelular(): string {
        return this.celular;
    }

    public setCelular(celular: string): void {
        this.celular = celular;
    }

    public getDirecciones(): string[] {
        return this.direcciones;
    }

    public setDirecciones(direcciones: string[]): void {
        this.direcciones = direcciones;
    }

    public getDireccionSelected(): any {
        return this.direccionSeleccionada;
    }

    public setDireccionSelected(direccion: any): void {
        this.direccionSeleccionada = direccion;
    }

    public getIdCliente(): number {
        return this.idcliente;
    }   

    public setIdCliente(idcliente: number): void {
        this.idcliente = idcliente;
    }   

    public getIsRegister(): boolean { 
        return this.isregister;
    }   

    public setIsRegister(isregister: boolean): void {   
        this.isregister = isregister;
    }   

    public getRuc(): string {
        return this.ruc;
    }

    public setRuc(ruc: string): void {
        this.ruc = ruc;
    }

    setNombrePila(nombre_pila: string) {
        this.nombre_pila = nombre_pila;
    }

    getNombrePila() {
        return this.nombre_pila || '';
    }

    setReferenciaDireccion(referencia_de_direccion: string) {
        this.referencia_de_direccion = referencia_de_direccion;
    }

    getReferenciaDireccion() {
        return this.referencia_de_direccion;
    }

    setNumPersonas(num_personas: number) {
        this.num_personas = num_personas;
    }

    getNumPersonas() {
        return this.num_personas;
    }

    setHoraLlegada(hora_llegada: string) {
        this.hora_llegada = hora_llegada;
    }

    getHoraLlegada() {
        return this.hora_llegada;
    }

    setIsDireccionRegistrada(isDireccionRegistrada: boolean) {
        this.isDireccionRegistrada = isDireccionRegistrada;
    }

    getIsDireccionRegistrada() {
        return this.isDireccionRegistrada;
    }

    setIdClientePwaDireccion(idcliente_pwa_direccion: number) {
        this.idcliente_pwa_direccion = idcliente_pwa_direccion;
    }

    getIdClientePwaDireccion() {
        return this.idcliente_pwa_direccion;
    }

       

}

// Ejemplo de uso
// const direccionesCliente: string[] = ['Dirección 1', 'Dirección 2'];
// const cliente = new Cliente('Juan', 'Pérez', '123456789', direccionesCliente);

// console.log(cliente.getNombre()); // Juan
// console.log(cliente.getDirecciones()); // ['Dirección 1', 'Dirección 2']

// cliente.setNombre('Pedro');
// cliente.setDirecciones(['Dirección 3']);

// console.log(cliente.getNombre()); // Pedro
// console.log(cliente.getDirecciones()); // ['Dirección 3']
