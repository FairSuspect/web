import React from 'react';
 //import { render } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FlagSelector from '../FlagSelector';

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


it('should select needed country on change',() =>{
    // When component is mounted
    act(() => {
      render(<FlagSelector />, container);
    });
    const selector = container.querySelector('select');
    expect(selector).not.toBeNull;
    act(() => {
        selector.dispatchEvent(new MouseEvent('onChange', {value: "ge"}));
      });
    expect(selector.selectedOptions[0].value).toBe("ge");
    })