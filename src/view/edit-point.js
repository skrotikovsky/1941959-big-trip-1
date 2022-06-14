import AbstractComponentClass from './abstract-component-class';
import {addListenerToRadios, offerList, setWithoutDestination, setWithoutOffers} from '../toolUnit';

const editPoint = (pointData) => (`<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${pointData.travelPointType.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi"
                          ${(pointData.travelPointType === 'Taxi' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus"
                          ${(pointData.travelPointType === 'Bus' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train"
                          ${(pointData.travelPointType === 'Train' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship"
                          ${(pointData.travelPointType === 'Ship' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive"
                          ${(pointData.travelPointType === 'Drive' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight"
                          ${(pointData.travelPointType === 'Flight' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in"
                          ${(pointData.travelPointType === 'Check-in' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing"
                          ${(pointData.travelPointType === 'Sightseeing' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant"
                          ${(pointData.travelPointType === 'Restaurant' ? 'checked = "true"' : '')}>
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointData.travelPointType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointData.destination}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${pointData.price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                ${pointData.isWithoutOffers?'':`
                  <section class="event__section  event__section--offers">

                    <h3 class="event__section-title  event__section-title--offers">Offers</h3><div class="event__available-offers">
                      ${offerList(pointData, (offer, index) => (`<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="${index}_${offer.id}" type="checkbox" name="${index}_${offer.id}" ${offer.isChecked?'checked':''}>
                        <label class="event__offer-label" for="${index}_${offer.id}">
                          <span class="event__offer-title">${offer.fullName}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.cost}</span>
                        </label>
                      </div>`))}
                    </div>
                  </section>`}
                  ${(pointData.isWithoutDestination ? '' : `<section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${pointData.description}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                      </div>
                    </div>
                  </section>`)}
                </section>
              </form>
            </li>`
);

export default class EditPoint extends AbstractComponentClass{
  constructor(point) {
    super();
    this._data = EditPoint.parsePointToData(point);
    this.#setInnerHandlers();
    this.element.querySelector('#event-destination-1').addEventListener('change', this.#destinationInputHandler);
  }

  setClickPointHandler = (callback) => {
    this._callback.downClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickPointHandler);
  }

  setSubmitEditorHandler = (callback) => {
    this._callback.submit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#submitFormHandler);
  }

  #clickPointHandler = (evt) => {
    evt.preventDefault();
    this._callback.downClick();
  }

  #submitFormHandler = (evt) => {
    evt.preventDefault();
    this._callback.submit(EditPoint.parseDataToPoint(this._data));
  }

  get template() {
    return editPoint(this._data);
  }

  withoutOffersToggleHandler = (pointType) => {
    this.updateData({
      isWithoutOffers: true,
      isWithoutDestination: false,
      travelPointType: pointType,
    });
  }

  withoutDestinationToggleHandler = (pointType) => {
    this.updateData({
      isWithoutDestination: true,
      isWithoutOffers: false,
      travelPointType: pointType,
    });
  }

  basicToggleHandler = (pointType) => {
    this.updateData({
      isWithoutDestination: false,
      isWithoutOffers: false,
      travelPointType: pointType,
    });
  }

  updateData = (update, justDataUpdating) => {
    if (!update) {
      return;
    }
    this._data = {...this._data, ...update};
    if (justDataUpdating) {
      return;
    }
    this.updateElement();
  }

  updateElement = () => {
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.element;
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  static parsePointToData = (point) => ({...point,
    isWithoutDestination: (setWithoutDestination.indexOf(point.travelPointType) + 1),
    isWithoutOffers: (setWithoutOffers.indexOf(point.travelPointType) + 1)});

  static parseDataToPoint = (data) => {
    const point = {...data};
    if (point.isWithoutDestination) {
      point.description = null;
    }
    if (point.isWithoutOffers) {
      point.offers = null;
    }
    delete point.isWithoutOffers;
    delete point.isWithoutDestination;
    return point;
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#submitFormHandler(this._callback.formSubmit);
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
  }

  #setInnerHandlers = () => {
    addListenerToRadios(this.element, this.withoutDestinationToggleHandler, this.withoutOffersToggleHandler,
      this.basicToggleHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditPoint.parseDataToPoint(this._data));

  }

  setDestinationChangeHandler = (callback) => {
    this._callback.changeDestination = callback;
    this.element.querySelector('#event-destination-1').addEventListener('change', this.#destinationInputHandler);
  }

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      destination: evt.target.value,
    }, true);
  }
}
