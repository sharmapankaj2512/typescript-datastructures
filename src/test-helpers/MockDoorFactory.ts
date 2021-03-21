import DoorFactory from "../DoorFactory";

export default class MockDoorFactory extends DoorFactory {
    shouldThrowNaNError = false;
    shouldThrowRangeError = false;
    wasMakeCalled = false;
    wasStatusCalled = false;

    constructor() {
        super();
        this.make = this.make.bind(this);
        this.status = this.status.bind(this);
    }

    make(numberOfDoors: string) {
        this.wasMakeCalled = true;
        if (this.shouldThrowNaNError)
            throw new Error("Please enter a number.");
        if (this.shouldThrowRangeError)
            throw new Error("Please enter number between 1 to 200.")
        return null;
    }

    status() {
        this.wasStatusCalled = true;
        const output = "Door\tStatus\n1\tCLOSED\n2\tCLOSED";
        return output;
    }
}