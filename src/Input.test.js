import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

setUp();

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    });
    test("renders the component without errors", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-btn");
      expect(submitBtn.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setUp(initialState);
    });
    test("renders the component without errors", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-btn");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has `success` piece of state", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("`guessWord` action creator is a function prop", () => {
    const wrapper = setUp();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord action creator call`", () => {
  test("`guessWord` action creator runs when submit btn is clicked", () => {
    const guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };
    const wrapper = shallow(<UnconnectedInput {...props} />);
    const submitButton = findByTestAttr(wrapper, "submit-btn");
    submitButton.simulate("click");
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
});
