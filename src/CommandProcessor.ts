import DoorFactory from "./DoorFactory";

export default class CommandProcessor{
    reader:()=>string;
    writer:(string)=>void;
    doorFactory:DoorFactory;
    constructor(reader:()=>string,writer:(string)=>void,doorFactory?:DoorFactory) {
        this.reader=reader;
        this.writer=writer;
        this.doorFactory=doorFactory;
    }

    process(){
        try {
            let command = this.reader();
            const createDoorsRegex = /^create-doors\s([-?[A-Z0-9]+)$/i;
            let no=command.match(createDoorsRegex);
            if (no) {
                this.doorFactory.make(no[1]);
                this.writer('2 doors created');
            } else {
                this.writer("Please enter a valid create-doors command");
            }
        }catch(e){
            this.writer(e.message);
        }
    }
}