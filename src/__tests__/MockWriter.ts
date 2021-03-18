export class MockWriter{
    results:Array<string>=[];
    constructor() {
        this.write=this.write.bind(this);
        this.latestResult=this.latestResult.bind(this);
    }
    write(result:string){
        this.results.push(result);
    }
    latestResult(){
        return this.results.pop();
    }
}