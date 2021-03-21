import DoorFactory from "../DoorFactory";

test('creates and returns new Doors object when make is called with valid argument', () => {
    let doorFactory = new DoorFactory();

    let doors = doorFactory.make("2");

    expect(doors).toBeTruthy();
});

test('gets status from the Doors object when status is called',()=>{
    let doorFactory=new DoorFactory();

    doorFactory.make("2");
    let status=doorFactory.status();

    const output = "Door\tStatus\n1\tCLOSED\n2\tCLOSED";
    expect(status).toBe(output);
})