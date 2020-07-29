import { axiosInstance } from "../utils/axiosInstance";
import { createStore, applyMiddleware } from "redux";
import reducer from "../../src/reducers";
import axios from "axios";
import moxios from "moxios";
import mockAxios from "../__mocks__/axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";

// jest.mock("../../src/configureStore.js");
// const axiosInstance = axios.create();
// beforeEach(() => {
//   moxios.install(axiosInstance);
// });
// afterEach(() => {
//   moxios.uninstall(axiosInstance);
// });
test("adds response word to state", async () => {
  const middlewares = [thunk];
  const secretWord = "party";
  const mockStore = applyMiddleware(...middlewares)(createStore);
  const store = mockStore(reducer);

  const mockResponse = {
    data: secretWord,
  };

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: mockResponse })
  );
  // moxios.wait(() => {
  //   const request = moxios.requests.mostRecent();
  //   request.respondWith({
  //     status: 200,
  //     response: secretWord,
  //   });
  // });
  // moxios.stubRequest(axiosInstance, {
  //   status: 200,
  //   responseText: secretWord,
  // });
  // moxios.wait(() => {
  //   const request = moxios.requests.mostRecent();
  //   request.respondWith({
  //     status: 200,
  //     response: secretWord,
  //   });
  // });
  // axiosInstance.get("/").then((res) => {
  //   res.status === 200;
  //   // res.send(secretWord);
  // });
  await store.dispatch(getSecretWord());
  console.log(store.getState());
  const newState = store.getState().secretWord;
  expect(newState.data).toBe(secretWord);
  // expect(newState.secretWord).toBe(secretWord);

  // return store.dispatch(getSecretWord()).then(() => {
  //   const newState = store.getState();
  //   expect(newState.secretWord).toBe(secretWord);
  // });
});
