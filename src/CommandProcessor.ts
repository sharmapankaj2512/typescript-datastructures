import DoorFactory from "./DoorFactory";
import Doors from "./Doors";

export default class CommandProcessor {
    reader: () => string;
    writer: (string) => void;
    doorFactory: DoorFactory;
    doors:Doors;
    readonly createDoorsRegex = /^create-doors\s([-?[A-Z0-9]+)$/i;
    readonly quitRegex = /^quit$/i;
    readonly statusRegex = /^status$/i;
    readonly toggleRegex = /^toggle\s([-?[A-Z0-9]+)$/i;
    numberOfDoorsCreated: number;

    constructor(reader: () => string, writer: (string) => void, doorFactory: DoorFactory = new DoorFactory()) {
        this.reader = reader;
        this.writer = writer;
        this.doorFactory = doorFactory;
        this.process = this.process.bind(this);
    }

    process() {
        try {
            let command = this.reader();
            if (this.createDoorsRegex.test(command)) {
                return this.processCreateCommand(command);
            }
            if (this.quitRegex.test(command)) {
                return this.processQuitCommand();
            }
            if (this.statusRegex.test(command)) {
                return this.processStatusCommand(command)
            }
            if (this.toggleRegex.test(command)) {
                return this.processToggleCommand(command);
            }
            this.writer("Please enter a valid create-doors command");
        } catch (e) {
            this.writer(e.message);
        }
        return false;
    }

    private processToggleCommand(command: string) {

        return false;
    }

    private processStatusCommand(command: string) {
        let doors=this.doors.status();
        let status="Door\tStatus";
        doors.forEach((door)=>{status+=`\n${door.doorNumber}\t${door.status}`});
        this.writer(status);
        return false;
    }

    private processCreateCommand(command: string) {
        let createDoorCommand = command.match(this.createDoorsRegex);
        let no = createDoorCommand[1];
        this.doors=this.doorFactory.make(no);
        this.writer(`${no} doors created.`);
        return false;
    }

    private processQuitCommand() {
        this.writer("Quitting");
        return true;
    }
}