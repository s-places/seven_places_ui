import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { InfoCircleFill } from "react-bootstrap-icons";
import InfoModal from "../components/InfoModal";
import App from "../App";
//Important! Need import exactly '*'.
import * as axios from "axios";
//Setup fixure. Do NOT rename 'results'.
import results from "../tests/Fixture";

//Mocking axios
jest.mock("axios");

test("Info window should be showen after click on 'info' icon and hidden after click to 'close' button", async () => {
  const app = mount(<App />);

  await act(async (url) => {
    console.log("Configured url: " + url);
    await axios.get.mockResolvedValue({ data: { results } });
  });
  await app.update();

  app.find(InfoCircleFill).simulate("click");
  expect(app.find(InfoModal).prop("show")).toEqual(true);
  app.update();

  app.find(".btn-close").simulate("click");
  expect(app.find(InfoModal).prop("show")).toEqual(false);
});
