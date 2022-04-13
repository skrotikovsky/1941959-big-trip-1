import {creatElement} from '../render';

const headNavigation = () => (`<nav class="trip-controls__trip-tabs  trip-tabs">
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                <a class="trip-tabs__btn" href="#">Stats</a>
              </nav>`);

export default class HeadNavigation {
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = creatElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return headNavigation();
  }

  removeElement() {
    this.#element = null;
  }
}
