import Door from "../Door";

test('must not have undefined doorNumber and status',()=>{
    let door=new Door(1,"CLOSED");
    expect(door.status).toBeTruthy();
    expect(door.doorNumber).toBeTruthy();
});
