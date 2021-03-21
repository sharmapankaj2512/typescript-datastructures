import DoorFactory from "./DoorFactory";

export default class CommandProcessor {
    reader: () => string;
    writer: (string) => void;
    doorFactory: DoorFactory;
    readonly createDoorsRegex = /^create-doors\s([-?[A-Z0-9]+)$/i;
    readonly quitRegex = /^quit$/i;

    constructor(reader: () => string, writer: (string) => void, doorFactory: DoorFactory = new DoorFactory()) {
        this.reader = reader;
        this.writer = writer;
        this.doorFactory = doorFactory;
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
            this.writer("Please enter a valid create-doors command");
        } catch (e) {
            this.writer(e.message);
        }
        return false
    }

    private processCreateCommand(command: string) {
        let createDoorCommand = command.match(this.createDoorsRegex);
        let no = createDoorCommand[1];
        this.doorFactory.make(no);
        this.writer(`${no} doors created.`);
        return false
    }

    private processQuitCommand() {
        this.writer("Quitting");
        return true;
    }
}