import React from "react"
import App from "./App";
import { render, fireEvent, wait, waitForElement} from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";



jest.mock("./api/fetchShow");

test("renders show image data from API", () => {
  
    mockFetchShow.mockResolvedValueOnce(seasons);

    const { getByText, queryAllByTestId, getByTestId } = render(<App/>);
    
    const button = getByText(/selectaseason/i);
    fireEvent.click(button);

})
