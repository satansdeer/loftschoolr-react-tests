import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".count").text()).toEqual("0");
  wrapper.find("button").simulate("click");
  expect(wrapper.find(".count").text()).toEqual("1");
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
