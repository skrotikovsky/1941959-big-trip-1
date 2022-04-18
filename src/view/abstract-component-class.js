import {creatElement} from '../render';

export default class AbstractComponentClass {
  _callback = {};
  #element = null;
  constructor() {
    if (new.target === AbstractComponentClass) {
      throw new Error('It\'s abstract class. Use it for inheritance');
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = creatElement(this.template);
    }
    return this.#element;
  }

  get template() {
    throw new Error('This method is not implemented. Overload this abstract method');
  }

  removeElement() {
    this.#element = null;
  }
}
