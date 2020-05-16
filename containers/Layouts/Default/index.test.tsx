import React from "react";
import { shallow } from "enzyme";
import LayoutDefault from "./index";

describe("<LayoutDefault />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(
      <LayoutDefault>
        <p>Hello</p>
      </LayoutDefault>
    );
    expect(wrapper.find("p").text()).toBe("Hello");
  });
});
