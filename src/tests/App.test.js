//Unit tests that check 'loading' and 'ready' states of UI
import { mount } from "enzyme";
import App from "../App";
import { Spinner } from "react-bootstrap";
//Important! Need import exactly '*'.
import * as axios from "axios";
import { act } from "react-dom/test-utils";
//Setup fixure. Do NOT rename 'results'.
import results from "../tests/Fixture";

//Mocking axios
jest.mock("axios");

test("On main page spinner should be showed first and article should be showed second", async () => {
  const app = mount(<App />);
  expect(app.find(Spinner).prop("animation")).toEqual("border");

  await act(async (url) => {
    console.log("Configured url: " + url);
    await axios.get.mockResolvedValue({ data: { results } });
  });
  await app.update();
  expect(app.find("article").length).toBeTruthy();
});
