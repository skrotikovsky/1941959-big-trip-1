import AbstractComponentClass from './abstract-component-class';

const contentList = () => ('<ul class="trip-events__list"></ul>');

export default class ContentList extends AbstractComponentClass{
  get template() {
    return contentList();
  }
}
