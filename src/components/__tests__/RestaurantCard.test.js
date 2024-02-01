import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mockDatas/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Card Component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const resName = screen.getByText("Barista Coffee");

    expect(resName).toBeInTheDocument();
})

it("Should render Card Component with promoted label", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const resName = screen.getByText("Barista Coffee");

    expect(resName).toBeInTheDocument();
})