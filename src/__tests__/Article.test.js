import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  console.log(document.body.innerHTML); // Debugging output
  expect(screen.getByText("please pass this test")).toBeInTheDocument();
});
