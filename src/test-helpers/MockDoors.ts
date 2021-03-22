import Doors from "../Doors";
import Door from "../Door";

export default class MockDoors extends Doors{
    wasStatusCalled=false;
    constructor() {
        super("2");
    }
    status(){
        this.wasStatusCalled=true;
        return this.doors;
    }
}