// clase sede - informacion de la sede, horarios de atencion, canales de consumo
export class ClassSede {
    private idsede: number;
    private infoSede: any;
    private listCarta: any;
    private listCanalConsumo: any;

    constructor(idsede: number, infoSede: any, listCarta: any, listCanalConsumo: any) {
        this.idsede = idsede;
        this.infoSede = infoSede;
        this.listCarta = listCarta;
        this.listCanalConsumo = listCanalConsumo;
    }

    public getIdSede(): number {
        return this.idsede;
    }

    public setIdSede(idsede: number): void {
        this.idsede = idsede;
    }

    public getinfoSede(): any {
        return this.infoSede;
    }

    public setinfoSede(infoSede: any): void {
        this.infoSede = infoSede;
    }

    public getListCarta(): any {
        return this.listCarta;
    }

    public setListCarta(listCarta: any): void {
        this.listCarta = listCarta;
    }

    public getListCanalConsumo(): any {
        return this.listCanalConsumo;
    }

    public setListCanalConsumo(listCanalConsumo: any): void {
        this.listCanalConsumo = listCanalConsumo;
    }    

}