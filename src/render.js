import AbstractComponentClass from './view/abstract-component-class';

export const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};


export const  render = (container, element, place) => {
  const parent = container instanceof AbstractComponentClass? container.element: container;
  const child = element instanceof AbstractComponentClass? element.element: element;
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;
    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};

export const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexciting elements');
  }
  const newChild = newElement instanceof AbstractComponentClass? newElement.element: newElement;
  const oldChild = newElement instanceof AbstractComponentClass? oldElement.element: oldElement;
  const parent = oldChild.parentElement;
  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }
  parent.replaceChild(newChild, oldChild);
};

export const remove = (component) => {
  if (component === null) {
    return;
  }
  if (!(component instanceof AbstractComponentClass)){
    throw new Error('Can remove only components');
  }
  component.element.remove();
  component.removeElement();
};

export const creatElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

