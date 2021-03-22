import DoorFactory from "../DoorFactory";
import MockDoors from "./MockDoors";
import Doors from "../Doors";

export default class MockDoorFactory extends DoorFactory {
    shouldThrowNaNError = false;
    shouldThrowRangeError = false;
    wasMakeCalled = false;
    wasStatusCalled = false;
    wasToggleCalled=false;
    shouldThrowToggleNaNError=false;
    shouldThrowToggleRangeError=false;
    doors: Doors;

    constructor(doors?:Doors) {
        super();
        this.doors=doors;
        this.make=this.make.bind(this);
    }

    make(numberOfDoors: string) {
        this.wasMakeCalled = true;
        if (this.shouldThrowNaNError)
            throw new Error("Please enter a number.");
        if (this.shouldThrowRangeError)
            throw new Error("Please enter number between 1 to 200.")
        return this.doors;
    }
}