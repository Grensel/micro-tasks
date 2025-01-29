import { render } from "@testing-library/react";
import { AssociativeArray } from "./AssociativeArray";

test("renders learn react link", () => {
  const { getByText } = render(<AssociativeArray />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
