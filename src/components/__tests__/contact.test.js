import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// Group multiple test cases in a single block using describe() -----
// test == it ( we can also use it instead of test)
describe("Contact Us Page Test Case", () => {
    test("Should Load Contact Us Component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
        
           //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should Load Button Inside my Contact Us Component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should Load submit text Inside my Contact Us Component", () => {
        render(<Contact />);
    
        const submitBtn = screen.getByText("Submit");
    
        expect(submitBtn).toBeInTheDocument();
    });
    
    test("Should Load input name Inside my Contact Us Component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("firstname");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should Load 2 input boxes name Inside my Contact Us Component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
    
        expect(inputBoxes.length).toBe(2);
    });
    
})