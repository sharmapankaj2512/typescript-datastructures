export class MockReader{
    commandList:Array<string>=[];
    constructor() {
        this.read=this.read.bind(this);
        this.addCommand=this.addCommand.bind(this);
    }
    addCommand(command:string){
        this.commandList.push(command);
    }
    read(){
        return this.commandList.pop();
    }
}