import CommandProcessor from "./CommandProcessor";

export default class MyApp{
    reader:()=>string;
    writer:(string)=>void;
    processor:CommandProcessor;
    startApp=true;
    constructor(reader:()=>string,writer:(string)=>void) {
        this.reader=reader;
        this.writer=writer;
        this.processor=new CommandProcessor(this.reader,this.writer);
    }
    start(){
        while(this.startApp){
            this.processor.process();
        }
    }
    stop(){
        this.startApp=false;
    }
}