import AbstractComponentClass from './abstract-component-class';

const drawEmptyList = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EmptyList extends AbstractComponentClass{
  get template() {
    return drawEmptyList();
  }
}
