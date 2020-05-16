import React from "react";
import { shallow } from "enzyme";

import CardBody from "./index";

describe("<CardBody />", () => {
  it("should render without children.", () => {
    const component = shallow(<CardBody></CardBody>);
    expect(component).toMatchSnapshot();
  });

  it("should render with children.", () => {
    const component = shallow(
      <CardBody>
        <p>Hello Test</p>
      </CardBody>
    );
    expect(component.contains(<p>Hello Test</p>)).toEqual(true);
  });
});
