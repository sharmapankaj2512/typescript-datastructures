import {MockReader} from "../test-helpers/MockReader";
import {MockWriter} from "../test-helpers/MockWriter";
import MyApp from "../MyApp";
import MockDoorFactory from "../test-helpers/MockDoorFactory";
import mock = jest.mock;

test('processes valid create-doors command', () => {
    let mockReader = new MockReader();
    let mockWriter = new MockWriter();
    let myApp = new MyApp(mockReader.read, mockWriter.write);

    mockReader.addCommand("create-doors 2");
    mockReader.addCommand("quit");
    myApp.start();
    mockWriter.waitTillProcessed(2);

    expect(mockWriter.latestResult()).toBe("2 doors created.");
    expect(mockWriter.latestResult()).toBe("Quitting");
})