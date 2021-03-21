import CommandProcessor from "./CommandProcessor";

export default class MyApp{
    reader:()=>string;
    writer:(string)=>void;
    processor:CommandProcessor;
    quit=false;

    constructor(reader:()=>string,writer:(string)=>void) {
        this.reader=reader;
        this.writer=writer;
        this.processor=new CommandProcessor(this.reader,this.writer);
    }

    start(){
        while(!this.quit){
            this.quit=this.processor.process();
        }
    }
}