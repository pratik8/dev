import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("Test to Match Snapshot", () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("Test to check if elements is visible", () => {
    it('Shows Button', () => {
        render(<App />);
        let testid1 = screen.getByTestId("language_yes_1");
        let testid2 = screen.getByTestId("language_yes_2");
        let testid3 = screen.getByTestId("language_yes_3");
        let testid4 = screen.getByTestId("language_yes_4");
        let testid5 = screen.getByTestId("language_yes_5");
        let button = screen.getByTestId("scorebtn");
        fireEvent(testid1).click();
        fireEvent(testid2).click();
        fireEvent(testid3).click();
        fireEvent(testid4).click();
        fireEvent(testid5).click();
        expect(button).toBeInTheDocument();
    });

    it('Test to check if score is 100', () => {
        render(<App />);
        let testid1 = screen.getByTestId("language_yes_1");
        let testid2 = screen.getByTestId("language_yes_2");
        let testid3 = screen.getByTestId("language_yes_3");
        let testid4 = screen.getByTestId("language_yes_4");
        let testid5 = screen.getByTestId("language_yes_5");
        let button = screen.getByTestId("scorebtn");
        
        
        fireEvent(testid1).click();
        fireEvent(testid2).click();
        fireEvent(testid3).click();
        fireEvent(testid4).click();
        fireEvent(testid5).click();
        fireEvent(button).click();
        expect(screen.getByText(/Your Score is : 100/i).toBeInTheDocument();
    });

    it('Test to check if score is 0', () => {
        render(<App />);
        let testid1 = screen.getByTestId("language_no_1");
        let testid2 = screen.getByTestId("language_no_2");
        let testid3 = screen.getByTestId("language_no_3");
        let testid4 = screen.getByTestId("language_no_4");
        let testid5 = screen.getByTestId("language_no_5");
        let button = screen.getByTestId("scorebtn");
        
        
        fireEvent(testid1).click();
        fireEvent(testid2).click();
        fireEvent(testid3).click();
        fireEvent(testid4).click();
        fireEvent(testid5).click();
        fireEvent(button).click();
        expect(screen.getByText(/Your Score is : 0/i).toBeInTheDocument();
    });

    it('Test to check if button is not visible', () => {
        render(<App />);
        let testid1 = screen.getByTestId("language_no_1");
        let testid2 = screen.getByTestId("language_no_2");
        let testid4 = screen.getByTestId("language_no_4");
        let testid5 = screen.getByTestId("language_no_5");
        let button = screen.getByTestId("scorebtn");
        
        
        fireEvent(testid1).click();
        fireEvent(testid2).click();
        fireEvent(testid4).click();
        fireEvent(testid5).click();
        fireEvent(button).click();
        expect(button).not.toBeInTheDocument();
    });
});
