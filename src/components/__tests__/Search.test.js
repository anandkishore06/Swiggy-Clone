import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockDatas/mockresListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Should search ResList for momo text input",async () =>{

    await act(async () =>{
        render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>)
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);


    const searchButton = screen.getByRole("button",{name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

     fireEvent.change(searchInput, { target: {value: "momo"}});

     fireEvent.click(searchButton);

    // Assertion - screen should load 3 cards- cards after search

    const cards = screen.getAllByTestId("resCard");

     expect(cards.length).toBe(1);

    

})

test("Should filter top ResList",async () =>{

    await act(async () =>{
        render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>)
    })

    const cardsBeforefilter = screen.getAllByTestId("resCard");
    expect(cardsBeforefilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);

    
    

})