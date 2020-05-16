import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Header title="Test">Hello test</Header>);
    expect(wrapper).toHaveLength(1);
  });
});
