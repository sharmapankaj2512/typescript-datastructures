import DoorFactory from "../DoorFactory";

test('creates and returns new Doors object when make is called with valid argument',()=>{
    let doorFactory=new DoorFactory();

    let doors=doorFactory.make("2");

    expect(doors).toBeTruthy();
});
