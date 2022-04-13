import {creatElement} from '../render';

const drawEmptyList = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EmptyList{
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = creatElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return drawEmptyList();
  }

  removeElement() {
    this.#element = null;
  }
}
