import Door from "./Door";

export default class Doors {
    doors: Array<Door> = [];

    constructor(numberOfDoors: string) {
        let doorsToCreate = parseInt(numberOfDoors);
        if (isNaN(doorsToCreate)) {
            throw new Error("Please enter a number.");
        }
        if (doorsToCreate < 0 || doorsToCreate > 200) {
            throw new Error("Please enter number between 1 to 200.");
        }
        for (let i = 1; i <= doorsToCreate; i++)
            this.doors.push(new Door(i, "CLOSED"));
    }
}