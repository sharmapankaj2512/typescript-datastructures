import {MockReader} from "../test-helpers/MockReader";
import {MockWriter} from "../test-helpers/MockWriter";
import MyApp from "../MyApp";

test.skip('processes valid toggle command', () => {
    let mockReader = new MockReader();
    let mockWriter = new MockWriter();
    let myApp = new MyApp(mockReader.read, mockWriter.write);
    let commands=["create-doors 2","status", "toggle 1", "status", "quit"]

    commands.forEach((command)=>{mockReader.addCommand(command)});
    myApp.start();
    mockWriter.waitTillProcessed(5);

    expect(mockWriter.latestResult()).toBe("2 doors created.");
    let output = "Door\tStatus\n1\tCLOSED\n2\tCLOSED";
    expect(mockWriter.latestResult()).toBe(output);
    expect(mockWriter.latestResult()).toBe("Toggling door status");
    output = "Door\tStatus\n1\tOPENED\n2\tOPENED";
    expect(mockWriter.latestResult()).toBe(output);
    expect(mockWriter.latestResult()).toBe("Quitting");
})