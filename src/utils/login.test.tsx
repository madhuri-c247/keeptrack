import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test('email should not be empty', () => {
    render(<Login/>);
    const inputEmail = screen.getByPlaceholderText('email');
    expect(inputEmail).not.toBe('') 
  });

test('password should not be empty', () => {
    render(<Login/>);
    const inputEmail = screen.getByPlaceholderText('password');
    expect(inputEmail).not.toBe('') 
  });

