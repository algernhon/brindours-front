import React from "react";
import { shallow } from "enzyme";

import CardContainer from "./index";

describe("<CardContainer />", () => {
  it("should render without children.", () => {
    const component = shallow(<CardContainer></CardContainer>);
    expect(component).toMatchSnapshot();
  });

  it("should render with children.", () => {
    const component = shallow(
      <CardContainer>
        <p>Hello Test</p>
      </CardContainer>
    );
    expect(component.contains(<p>Hello Test</p>)).toEqual(true);
  });
});
