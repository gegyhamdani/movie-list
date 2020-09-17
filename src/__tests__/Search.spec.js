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

const Search = props => {
  const [text, setText] = useState('');
  const handleKeyPress = () => {
    setText('Field is Pressed by a Key');
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.searchbox}
      onChange={onChange}
      onKeyPress={handleKeyPress}
    >
      {text || props.text}
    </input>
  );
};

describe('Input Field component', () => {
  test('Give an alert when a key is pressed o', () => {
    act(() => {
      ReactDOM.render(<Search text="Input For Test" />, container);
    });
    const input = container.getElementsByTagName('input')[0];
    expect(input.textContent).toBe('input For Test');
    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: 'Enter',
          key: 'Enter',
          charKode: 13,
          keyCode: 13,
          view: window,
          bubbles: true
        })
      );
    });
    expect(input.textContent).toBe('Input Field is Pressed by a Key');
  });
});
