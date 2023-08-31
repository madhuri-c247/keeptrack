import { render, screen } from "@testing-library/react";
import Login from "../utils/Login";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const initialState = {
  user: {
    AllUsers: [
      {
        email: "example@gmail.com",
        password: "*********",
      },
    ],
  },
};

const mockStore = configureStore();
const store = mockStore(initialState);

describe("Login", () => {
  test("renders successfully with logo", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const image = screen.getByAltText(/logo/i);
    expect(image).toBeInTheDocument();
  });

  test("renders successfully with email", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText(/email/);
    expect(emailInput).toBeInTheDocument();
    await userEvent.type(emailInput, 'example@gmail.com')
    expect(emailInput).toHaveValue('example@gmail.com')
  });

  test("renders successfully with password", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    await userEvent.type(passwordInput, '********')
    expect(passwordInput).toHaveValue('********')
  });

  test("renders successfully with button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
  });

});