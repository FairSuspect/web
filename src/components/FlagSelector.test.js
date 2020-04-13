import React from 'react';
 //import { render } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FlagSelector from './FlagSelector';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without flags", () => {
  act(() => {
    render(<FlagSelector />, container);
  });
  expect(container.getElementsByTagName("img")[0].src).toBe("https://www.countryflags.io/ar/shiny/64.png");

  act(() => {
    render(<FlagSelector code="bb" />, container);
  });
  expect(container.getElementsByTagName("img")[0].src).toBe("https://www.countryflags.io/bb/shiny/64.png");

  act(() => {
    render(<FlagSelector name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});