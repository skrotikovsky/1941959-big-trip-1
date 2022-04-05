//import {ContentList} from './view/content-list.js';
import {ContentFilters} from './view/content-filters.js';
import {HeadNavigation} from './view/head-navigation.js';
import {HeadFilters} from './view/head-filters.js';
import {HeadInfo} from './view/head-info.js';
import {AddNewPoint} from './view/add-new-point.js';
import {AddWithoutDestination} from './view/add-without-destination.js';
import {AddWithoutOffers} from './view/add-without-offers.js';
import {travelPointMocks} from './mock/travel-point-mocks.js';
import {TravelPoint} from './view/travel-point';

const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteList = document.querySelector('.page-body');

const headInfo =  siteList.querySelector('.trip-main');
renderTemplate(headInfo, HeadInfo(), RenderPosition.AFTERBEGIN);

const contentFilter =  siteList.querySelector('.trip-events');
renderTemplate(contentFilter, ContentFilters(), RenderPosition.AFTERBEGIN);

const siteFilterList = siteList.querySelector('.trip-controls__navigation');
renderTemplate(siteFilterList, HeadNavigation(), RenderPosition.BEFOREEND);

const headFilters =  siteList.querySelector('.trip-controls__filters');
renderTemplate(headFilters, HeadFilters(), RenderPosition.BEFOREEND);

const addWithoutDestination = siteList.querySelector('.trip-events__list');
renderTemplate(addWithoutDestination, AddWithoutDestination(), RenderPosition.BEFOREBEGIN);

const addWithoutOffers = siteList.querySelector('.trip-events__list');
renderTemplate(addWithoutOffers, AddWithoutOffers(), RenderPosition.BEFOREBEGIN);

const mocki = Array.from(Array(5),() => travelPointMocks());
console.log(mocki);

for (const mockiKey of mocki) {
  const travelPoint =  siteList.querySelector('.trip-events__list');
  renderTemplate(travelPoint, TravelPoint(mockiKey), RenderPosition.BEFOREEND);
  const addNewPoint = siteList.querySelector('.trip-events__list');
  renderTemplate(addNewPoint, AddNewPoint(mockiKey), RenderPosition.AFTERBEGIN);
}
