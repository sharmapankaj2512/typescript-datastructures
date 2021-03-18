import DoorFactory from "../DoorFactory";

export default class MockDoorFactory extends DoorFactory{
    shouldThrowNaNError=false;
    shouldThrowRangeError=false;
    wasMakeCalled=false;
    make(numberOfDoors:string){
        this.wasMakeCalled=true;
        if(this.shouldThrowNaNError)
            throw new Error("Please enter a number.");
        if(this.shouldThrowRangeError)
            throw new Error("Please enter number between 1 to 200.")
    }
}