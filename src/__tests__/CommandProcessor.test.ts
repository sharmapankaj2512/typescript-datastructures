import CommandProcessor  from "../CommandProcessor";
import {MockReader} from "./MockReader";
import {MockWriter} from "./MockWriter";
import MockDoorFactory from "./MockDoorFactory";
test('processes valid create-doors command',()=>{
    let mockReader=new MockReader();
    let mockWriter=new MockWriter();
    let mockDoorFactory=new MockDoorFactory();
    let commandProcessor=new CommandProcessor(mockReader.read,mockWriter.write,mockDoorFactory);

    mockReader.addCommand("create-doors 2");
    commandProcessor.process();

    expect(mockWriter.latestResult()).toBe("2 doors created");
    expect(mockDoorFactory.wasMakeCalled).toBe(true);
})

test('reports invalid command when invalid create-doors command is entered',()=>{
    let mockReader=new MockReader();
    let mockWriter=new MockWriter();
    let mockDoorFactory=new MockDoorFactory();
    let commandProcessor=new CommandProcessor(mockReader.read,mockWriter.write,mockDoorFactory);

    mockReader.addCommand("create-door 2");
    commandProcessor.process();

    expect(mockWriter.latestResult()).toBe('Please enter a valid create-doors command');
    expect(mockDoorFactory.wasMakeCalled).toBe(false);
})

test('report error when NaN is passed in create-doors command',()=>{
    let mockReader=new MockReader();
    let mockWriter=new MockWriter();
    let mockDoorFactory=new MockDoorFactory();
    let commandProcessor=new CommandProcessor(mockReader.read,mockWriter.write,mockDoorFactory);

    mockReader.addCommand("create-door d");
    mockDoorFactory.shouldThrowNaNError=true;
    commandProcessor.process();


    expect(mockWriter.latestResult()).toBe("Please enter a number.");
    expect(mockDoorFactory.wasMakeCalled).toBe(true);
})

test('report error when the number of doors is < 1 or >200 in create-doors command',()=>{
    let mockReader=new MockReader();
    let mockWriter=new MockWriter();
    let mockDoorFactory=new MockDoorFactory();
    let commandProcessor=new CommandProcessor(mockReader.read,mockWriter.write,mockDoorFactory);

    mockReader.addCommand("create-door -1");
    mockDoorFactory.shouldThrowRangeError=true;
    commandProcessor.process();

    expect(mockWriter.latestResult()).toBe("Please enter number between 1 to 200.");
    expect(mockDoorFactory.wasMakeCalled).toBe(true);
})
