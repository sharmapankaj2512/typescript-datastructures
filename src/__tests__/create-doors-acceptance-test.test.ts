import {MockReader} from "./MockReader";
import {MockWriter} from "./MockWriter";
import MyApp from "../MyApp";
import MockDoorFactory from "./MockDoorFactory";

test('processes valid create-doors command',()=>{
    let mockReader = new MockReader();
    let mockWriter = new MockWriter();
    let myApp = new MyApp(mockReader.read,mockWriter.write);

    mockReader.addCommand("quit");
    mockReader.addCommand("create-doors 2");
    myApp.start();
    mockWriter.waitTillProcessed(2);

    expect(mockWriter.latestResult()).toBe("Quitting");
    expect(mockWriter.latestResult()).toBe("2 doors created.");
})