import {MockReader} from "./MockReader";
import {MockWriter} from "./MockWriter";
import MyApp from "../MyApp";
import MockDoorFactory from "./MockDoorFactory";
import mock = jest.mock;

test('processes valid create-doors command',()=>{
    let mockReader = new MockReader();
    let mockWriter = new MockWriter();
    let myApp = new MyApp(mockReader.read,mockWriter.write);

    mockReader.addCommand("create-doors 2");
    mockReader.addCommand("quit");
    console.log(mockReader);
    myApp.start();
    mockWriter.waitTillProcessed(2);
    console.log(mockWriter);
    expect(mockWriter.latestResult()).toBe("2 doors created.");
    expect(mockWriter.latestResult()).toBe("Quitting");
})