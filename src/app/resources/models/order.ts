import { Status } from "./statusEnum";

export class Order {
    id?: number;
    name?: string;
    client!: string;
    description?: string;
    lastUpdate!: Date;
    dateAdmission!: Date;
    dateDelivery?:Date;
    status?:Status;
    reserve:boolean = false;
    amountReserve?:number;
    cost?: number;

    constructor(){
    }
}