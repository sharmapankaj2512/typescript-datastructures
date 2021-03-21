import {MockWriter} from "../test-helpers/MockWriter";
import {MockReader} from "../test-helpers/MockReader";
import MyApp from "../MyApp";

test.skip('processes valid status command',()=>{
    let mockReader=new MockReader();
    let mockWriter=new MockWriter();
    let myApp=new MyApp(mockReader.read,mockWriter.write);

    mockReader.addCommand("create-doors 2");
    mockReader.addCommand("status");
    mockReader.addCommand("quit");
    myApp.start();

    let output="Door\tStatus\n1\tCLOSED\n2\tCLOSED";
    expect(mockWriter.latestResult()).toBe(output);
});