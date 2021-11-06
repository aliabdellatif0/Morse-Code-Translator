//it should 
//take the letter a and output the morse code which is .-

import { translator } from "./translator";
import {morseCode} from "./data";
import {transformInputToArray} from "./translator"
import {morseOutput} from "./translator"
//it should
//give an error when

//it should

describe("testing transformInputToArray()", ()=> {
    //valid test case
    it("Should take an input of 'abcd' and give ['a', 'b', 'c', 'd']", () => {
        //arrange
        let result;
        //act
        result = transformInputToArray("abcd");
        //assert -> test will pass or fail
        expect(result).toStrictEqual([ 'a', 'b', 'c', 'd' ]);
    })
})


describe("testing translator()", ()=> {
    //valid test case
    it("Should take an input of a or A and return .-", () => {
        //arrange
        let result;
        //act
        result = translator("a");
        //assert -> test will pass or fail
        expect(result).toBe(".-");
    })

    it("Should take an input of a or A and return '.-'", () => {
        //arrange
        let result;
        //act
        result = translator("A");
        //assert -> test will pass or fail
        expect(result).toBe(".-");
    })
    
    it("Should take an input of 1 and return .----", () => {
            //arrange
    let result;
            //act
    result = translator("1");
            //assert -> test will pass or fail
    expect(result).toBe(".----");
    })

    it("Should output an alert message when inputting '@' ", () => {
        //arrange
    let result;
        //act
    result = translator("@");
        //assert -> test will pass or fail
    expect(result).toBe("Invalid, please try again");
    })
}),


describe("testing morseOutput()", ()=> {
    //valid test case
    it(" Should join together an array of letters and output their morse in string form", () => {
        //arrange
        let result = morseOutput(["a", "p", "s"])
        //act
        
        //assert -> test will pass or fail
        expect(result).toBe(".-.--....");
    })

    it("Should use a slash as MORSE code for spaces inputted", () => {
        //arrange
        let result = morseOutput(["a", "p", " ", "j", "r"])
        //act
        
        //assert -> test will pass or fail
        expect(result).toBe(".-.--. / .---.-.");
    })


      

})
