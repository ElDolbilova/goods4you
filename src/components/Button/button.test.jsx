import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

const text = "Click me";

it("test1", () => {
	render(<Button onClick={() => alert("click")}>{text}</Button>);

	expect(screen.getByTestId("button")).toBeInTheDocument();
});
