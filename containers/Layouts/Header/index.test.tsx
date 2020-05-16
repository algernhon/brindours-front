import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("should have a title with, at least, 20 characters", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("title").text()).toMatch(/.{20,}/i);
  });
  it("should have a viewport with initia-scale to 1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("meta[name='viewport']").props().content).toMatch(
      /initial-scale=1/
    );
  });
  it("should have a viewport with width to device-width", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("meta[name='viewport']").props().content).toMatch(
      /width=device-width/
    );
  });
  it("should have a viewport with shrink-to-fit to no", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("meta[name='viewport']").props().content).toMatch(
      /shrink-to-fit=no/
    );
  });
  it("should have a meta description with at least 20 characters", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("meta[name='description']").props().content).toMatch(
      /.{20,}/i
    );
  });
  it("should have a favicon", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("link[rel='icon']").props().href).toMatch(
      /.*favicon.*\.(png|jpg)/i
    );
  });
});
