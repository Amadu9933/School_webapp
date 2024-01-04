import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
	render(<Greet />);
	const testElement = screen.getByText("Hello");
	expect(testElement).toBeInTheDocument();
});
