import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should Load header component with login button", () => {
    render(
    <BrowserRouter>
   
    <Provider store={appStore}>
        
        <Header />
        
    </Provider>
    
    </BrowserRouter>
    )

    const logigButton = screen.getByRole("button", {name: "Login"})

    //Assertion
    expect(logigButton).toBeInTheDocument();
})

test("Should Load header component with cart items ", () => {
    render(
    <BrowserRouter>
   
    <Provider store={appStore}>
        
        <Header />
        
    </Provider>
    
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    //Assertion
    expect(cartItems).toBeInTheDocument();
})

test("Should Change Login Button to logout onClick ", () => {
    render(
    <BrowserRouter>
   
    <Provider store={appStore}>
        
        <Header />
        
    </Provider>
    
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"})
    //Assertion
    expect(logoutButton).toBeInTheDocument();
})
