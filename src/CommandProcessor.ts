import DoorFactory from "./DoorFactory";

export default class CommandProcessor{
    quit=false;
    reader:()=>string;
    writer:(string)=>void;
    doorFactory:DoorFactory;
    constructor(reader:()=>string,writer:(string)=>void,doorFactory:DoorFactory=new DoorFactory()) {
        this.reader=reader;
        this.writer=writer;
        this.doorFactory=doorFactory;
    }

    process(){
        try {
            let command = this.reader();
            const createDoorsRegex = /^create-doors\s([-?[A-Z0-9]+)$/i;
            let createDoorCommand=command.match(createDoorsRegex);
            if (createDoorCommand) {
                let no=createDoorCommand[1];
                this.doorFactory.make(no);
                this.writer(`${no} doors created.`);
            }else if(command=="quit"){
                this.writer("Quitting");
                this.quit=true;
            }else{
                this.writer("Please enter a valid create-doors command");
            }
        }catch(e){
            this.writer(e.message);
        }
        return this.quit;
    }
}