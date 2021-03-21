export class MockWriter{
    results:Array<string>=[];
    hasFoundResult=false;
    constructor() {
        this.write=this.write.bind(this);
        this.latestResult=this.latestResult.bind(this);
        this.waitTillProcessed=this.waitTillProcessed.bind(this);
    }
    write(result:string){
        this.results.push(result);
    }
    latestResult(){
        return this.results.pop();
    }
    waitTillProcessed(numberOfCommands:number){
        while(this.results.length!=numberOfCommands){}
    }
}