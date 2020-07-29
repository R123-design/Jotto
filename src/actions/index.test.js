import { axiosInstance } from "../utils/axiosInstance";
import axios from "axios";
import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";

describe("getSecretWord action creator", () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3030",
  });
  beforeEach(() => {
    moxios.install(axiosInstance);
  });
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });
  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: secretWord,
    //   });
    // });
    // moxios.stubRequest("http://localhost:3030", {
    //   status: 200,
    //   responseText: secretWord,
    // });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    // axiosInstance("get").get("/").then((res) => {
    //   res.status === 200;
    //   res.send(secretWord);
    // });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
