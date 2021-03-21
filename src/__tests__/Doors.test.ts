import Doors from "../Doors";

test('creates the number of Door when it receivs valid number as props',()=>{
    let doors=new Doors("3");
    expect(doors.doors).toHaveLength(parseInt("3"));
})

test('throws error when it receives NaN as props',()=>{
  expect(()=>new Doors("d")).toThrowError("Please enter a number.");
})

test('throws error when it receives number < 0 or > 200 as props',()=>{
    expect(()=>new Doors("-1")).toThrowError("Please enter number between 1 to 200.");
})