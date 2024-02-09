import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Upvote from "./components/Upvote/index";
import Context from "./contexts/Context";

describe("Upvote Component", () => {
  it("should toggle background color when clicked", async () => {
    render(
      <Context>
        <Upvote />
      </Context>
    );

    const addItem = screen.getByTestId("myValue-add");
    // add some up votes by clicking on plus icon to test for color changes..
    fireEvent.click(addItem);
    fireEvent.click(addItem);
    fireEvent.click(addItem);

    const listItem = screen.getByTestId("myValue-list-item-0");

    expect(listItem).toHaveStyle("background-color: #F4f6F8");

    fireEvent.click(listItem);

    expect(listItem).toHaveStyle("background-color: #E5E8FD");

    fireEvent.click(listItem);

    expect(listItem).toHaveStyle("background-color: #F4f6F8");
  });
});
