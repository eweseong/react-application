import { fireEvent, render, screen } from '@testing-library/react';
import LoginButton from './LoginButton';

// jest is test runner/framework built into CRA
describe('LoginButton', () => {
  // create test specification
  it('should render the text of login within the button', () => {
    render(<LoginButton />);
    const loginButton = screen.getByText('Login'); // searching for HTML by the text of Login
    expect(loginButton).toBeDefined();
  });

  it('should trigger login props when clicked', () => {
    const mockedLogin = jest.fn(); // trigger a mock function that does nothing
    render(<LoginButton login={mockedLogin} />);
    const loginButton = screen.getByText('Login'); // searching for HTML by the text of Login
    expect(mockedLogin).not.toBeCalled();
    fireEvent.click(loginButton);
    expect(mockedLogin).toBeCalled();
  });
});
