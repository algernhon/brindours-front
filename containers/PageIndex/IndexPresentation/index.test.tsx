import React from "react";
import { shallow } from "enzyme";
import IndexPresentation from "./index";

describe("<IndexPresentation />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<IndexPresentation />);
    expect(wrapper).toHaveLength(1);
  });
});
