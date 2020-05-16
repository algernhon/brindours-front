import React from "react";
import { shallow } from "enzyme";
import IndexHeader from "./index";

describe("<IndexHeader />", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<IndexHeader />);
    expect(component).toMatchSnapshot();
  });
});
