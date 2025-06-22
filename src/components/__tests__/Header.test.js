import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';

describe('Header Component', () => {
    test('Header should load', () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
    })

    test("Header should load and has a login button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole('button',{name: 'Login'});
      expect(loginButton).toBeInTheDocument();
    });

    test("Header should load and have cart text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const cart = screen.getByText(/Cart/);
      expect(cart).toBeInTheDocument();
    });

    test("Header should load and on click of login text should change to logout", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const loginButton = screen.getByRole("button", {name : 'Login'});
      fireEvent.click(loginButton);
       const logoutButton = screen.getByRole("button", {name : 'Logout'});
      expect(logoutButton).toBeInTheDocument();
    });
})