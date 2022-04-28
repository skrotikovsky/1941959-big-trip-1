import AbstractComponentClass from './abstract-component-class';
import {SortType} from '../toolUnit';

export const contentFilters = () => (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--${SortType.DAY}">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--${SortType.TIME}">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--${SortType.PRICE}">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`);

export default class ContentFilters extends AbstractComponentClass{
  get template() {
    return contentFilters();
  }

  dayClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.dayClick();
  }

  setDayClickHandler = (callback) => {
    this._callback.dayClick = callback;
    this.element.querySelector('.trip-sort__item--time').addEventListener('click', this.dayClickHandler);
  }

  timeClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.dayClick();
  }

  setTimeClickHandler = (callback) => {
    this._callback.dayClick = callback;
    this.element.querySelector('.trip-sort__item--price').addEventListener('click', this.timeClickHandler);
  }

  priceClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.dayClick();
  }

  setPriceClickHandler = (callback) => {
    this._callback.dayClick = callback;
    this.element.querySelector('.trip-sort__item--day').addEventListener('click', this.priceClickHandler);
  }
}
