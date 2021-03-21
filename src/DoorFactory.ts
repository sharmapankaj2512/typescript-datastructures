import Doors from "./Doors";

export default class DoorFactory {
    readonly statusHead="Door\tStatus";
    doors:Doors;
    make(numberOfDoors: string) {
        this.doors= new Doors(numberOfDoors);
        return this.doors;
    }
    status(){
        //will return the list of doors
        let statusDoors=this.doors.status();
        //we need to convert that list to string
        let resultStatus=this.statusHead;
        statusDoors.map(door=>{
            resultStatus+=`\n${door.doorNumber}\t${door.status}`
        });
        return resultStatus;
    }
}