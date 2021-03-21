import Door from "./Door";

export default class Doors{
    doors:Array<Door>=[];
    constructor(numberOfDoors:string) {
        let no=parseInt(numberOfDoors);
        if(isNaN(no)){
            throw new Error("Please enter a number.");
        }else if(no<0 || no>200){
            throw new Error("Please enter number between 1 to 200.");
        }else {
            for (let i = 1; i <= no; i++)
                this.doors.push(new Door(i, "CLOSED"));
        }
    }
}