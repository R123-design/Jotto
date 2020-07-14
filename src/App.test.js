import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App, { UnconnectedApp } from "./App";
// import Congrats from "./Congrats"
// import GuessedWords from "./GuessedWords";
import { storeFactory } from "../test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const setUp = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe("redux props", () => {
  test("has access to `success` state", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setUp({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("has access to `guessedWord` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setUp({ guessedWords });
    const guessedWordProp = wrapper.instance().props.guessedWords;
    expect(guessedWordProp).toEqual(guessedWords);
  });
  test("`getSecretWord` action creator is a function prop", () => {
    const wrapper = setUp();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };
  //set up app comp with getSecretWordMock to see when the getSecretWord prop is called
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if our mock ran or not
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
