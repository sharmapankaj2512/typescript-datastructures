export default class Door {
    doorNumber: number;
    status: string;

    constructor(doorNo: number, status: string) {
        this.doorNumber = doorNo;
        this.status = status;
    }
}