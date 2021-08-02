/*Unit tests that check navigation menu showing and 
rendering ofother UI components */
import { shallow, mount } from "enzyme";
import Header from "../components/Header";
import NavigationOffCanvas from "../components/NavigationOffcanvas";
import Article from "../components/Article";
import { Button, Offcanvas, CloseButton } from "react-bootstrap";
//Setup fixure. Do NOT rename 'results'.
import results from "../tests/Fixture";

//Getting rendered components for testing
const header = shallow(<Header />);
const navigation = mount(<NavigationOffCanvas continents={results} />);
const article = shallow(<Article continents={results} />);

describe("Header testing", () => {
  test("Should be rendered", () => {
    expect(header).toMatchSnapshot();
  });
});

describe("Offcanvas navigation testing", () => {
  test("Should be rendered", () => {
    expect(navigation).toMatchSnapshot();
  });

  test("Should be showed and hidden", () => {
    expect(navigation.find(Offcanvas).prop("show")).toEqual(false);
    navigation.find(Button).simulate("click");
    expect(navigation.find(Offcanvas).prop("show")).toEqual(true);
    navigation.find(CloseButton).simulate("click");
    expect(navigation.find(Offcanvas).prop("show")).toEqual(false);
  });
});

describe("Article testing", () => {
  test("Article should be rendered", () => {
    expect(article).toMatchSnapshot();
  });
});
