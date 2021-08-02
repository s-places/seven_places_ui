import { mount } from "enzyme";
import App from "../App";
import { act } from "react-dom/test-utils";
//Important! Need import exactly '*'.
import * as axios from "axios";

//Mocking axios
jest.mock("axios");

test("Error page should be showen when data fetching was failed", async () => {
  const app = mount(<App />);
  await act(async (url) => {
    await axios.get.mockResolvedValue(new Error("test error"));
  });
  await app.update();
  expect(app.find("p")).toHaveLength(1);
});
