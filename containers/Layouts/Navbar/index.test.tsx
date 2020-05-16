import React from "react";
import { shallow } from "enzyme";
import Navbar from "./index";

describe("<Navbar />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toHaveLength(1);
  });
});
