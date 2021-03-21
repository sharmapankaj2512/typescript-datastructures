import Doors from "./Doors";

export default class DoorFactory{
    make(numberOfDoors:string){
        let doors=new Doors(numberOfDoors);
        return doors;
    }
}