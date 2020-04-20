import React from 'react';
 //import { render } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FlagSelector from '../FlagSelector';
import renderer from "react-test-renderer";
import { createEvent } from '@testing-library/react';

const getSrcValue = json => json.children[1].children[1].props.src;
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

it('Simple start. Argentina is default',() =>{
  const component = renderer.create(<FlagSelector />);

  let currentSrc = getSrcValue(component.toJSON());

  expect(currentSrc).toBe("https://www.countryflags.io/ar/shiny/64.png");
  });

it('selecting  Angola, then selecting Afganistan ',() =>{
    const component = renderer.create(<FlagSelector />);

    let currentSrc = getSrcValue(component.toJSON());
  
    expect(currentSrc).toBe("https://www.countryflags.io/ar/shiny/64.png");
  
    renderer.act(() => {
      component.root
        .findByProps({ testing: "this" })
        .props.onChange({ target: { value: "ag" } });
    });
  
    currentSrc = getSrcValue(component.toJSON());
  
    expect(currentSrc).toBe("https://www.countryflags.io/ag/shiny/64.png");
    renderer.act(() => {
      component.root
        .findByProps({ testing: "this" })
        .props.onChange({ target: { value: "af" } });
    });
  
    currentSrc = getSrcValue(component.toJSON());
  
    expect(currentSrc).toBe("https://www.countryflags.io/af/shiny/64.png");
    });

    it('selecting  Azerbaijan, then selecting Germany ',() =>{
      const component = renderer.create(<FlagSelector />);
  
      let currentSrc = getSrcValue(component.toJSON());
    
      expect(currentSrc).toBe("https://www.countryflags.io/ar/shiny/64.png");
    
      renderer.act(() => {
        component.root
          .findByProps({ testing: "this" })
          .props.onChange({ target: { value: "az" } });
      });
    
      currentSrc = getSrcValue(component.toJSON());
    
      expect(currentSrc).toBe("https://www.countryflags.io/az/shiny/64.png");
      renderer.act(() => {
        component.root
          .findByProps({ testing: "this" })
          .props.onChange({ target: { value: "de" } });
      });
    
      currentSrc = getSrcValue(component.toJSON());
    
      expect(currentSrc).toBe("https://www.countryflags.io/de/shiny/64.png");
      });