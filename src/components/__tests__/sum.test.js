import { sum } from "../sum";
test("Sum Function should calculate the sum of two numbers", ()=>{

    const res1 = sum(3,9);
    const res2 = sum(3,1);

    //Assertion
    expect(res1).toBe(12);
    expect(res2).toBe(4);
})
test("Sum Function should calculate the sum of two numbers", ()=>{

    const res1 = sum(3,9);
    const res2 = sum(3,1);


    //Assertion
    expect(res1).toBe(12);
    expect(res2).toBe(4);
})