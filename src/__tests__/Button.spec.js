import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const Button = props => {
  const [text, setText] = useState('');
  const handleClick = () => {
    setText('Button is Clicked');
  };
  return (
    <button onClick={handleClick} onKeyPress={handleKeyPress}>
      {text || props.text}
    </button>
  );
};

describe('Button component', () => {
  test('It shows the expected text when clicked', () => {
    act(() => {
      ReactDOM.render(<Button text="Button For Test" />, container);
    });
    const button = container.getElementsByTagName('button')[0];
    expect(button.textContent).toBe('Button For Test');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(button.textContent).toBe('Button is Clicked');
  });
});
