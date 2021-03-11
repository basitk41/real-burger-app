import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavigationItems } from "./NavigationItems";
import NavigationItem from "./navigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  it("Checking Nav Item", () => {
    const wrapper = shallow(<NavigationItems />);
    console.log(wrapper);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
