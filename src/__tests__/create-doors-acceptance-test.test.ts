import {MockReader} from "./MockReader";
import {MockWriter} from "./MockWriter";
import MyApp from "../MyApp";

test('processes valid create-doors command',()=>{
    let mockReader = new MockReader();
    let mockWriter = new MockWriter();
    let myApp = new MyApp(mockReader.read,mockWriter.write);

    setTimeout(myApp.start,5000);
    mockReader.addCommand("create-doors 2");

    expect(mockWriter.latestResult()).toBe('2 doors created.');
})