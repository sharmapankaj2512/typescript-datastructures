import Doors from "./Doors";

export default class DoorFactory {
    make(numberOfDoors: string) {
        return new Doors(numberOfDoors);
    }
}