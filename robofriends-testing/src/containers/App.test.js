import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const mockStore = {
    robots: [],
    searchField: "",
  };
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});
