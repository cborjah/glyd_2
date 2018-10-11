import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Checkbox component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists("WithStyles(Checkbox)")).toBe(true);
  });

  it("renders outermost div with container class", () => {
    const wrapper = shallow(<App />);

    expect(
      wrapper
        .find("div")
        .at(0)
        .hasClass("container")
    ).toEqual(true);
  });

  it("renders two divs with ids foo and bar", () => {
    const wrapper = shallow(<App />);

    const foo = wrapper.find("#foo");
    const bar = wrapper.find("#bar");

    expect(foo.type()).toEqual("div");
    expect(foo.length).toEqual(1);
    expect(bar.type()).toEqual("div");
    expect(bar.length).toEqual(1);
  });

  describe("handleOnChange method", () => {
    it("flips the value of isChecked when handleOnChange method is invoked", () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      instance.handleOnChange();
      expect(wrapper.state("isChecked")).toEqual(true);

      instance.handleOnChange();
      expect(wrapper.state("isChecked")).toEqual(false);
    });
  });

  describe("Checkbox", () => {
    it("is passed handleOnChange as a onChange prop", () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      expect(wrapper.find("WithStyles(Checkbox)").prop("onChange")).toBe(
        instance.handleOnChange
      );
    });
  });

  describe("foo header", () => {
    it('has hidden class when isChecked is true', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      instance.handleOnChange();

      expect(wrapper.find('#foo').find('h1').hasClass('hidden')).toEqual(true);
    })
  });

  describe('bar header', () => {
    it('has hidden class when isChecked is false', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find('#bar').find('h1').hasClass('hidden')).toEqual(true);
    })
  })
});
