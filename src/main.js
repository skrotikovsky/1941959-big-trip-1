//import {ContentList} from './view/content-list.js';
import {contentFilters} from './view/content-filters.js';
import {headNavigation} from './view/head-navigation.js';
import {headFilters} from './view/head-filters.js';
import {headInfo} from './view/head-info.js';
import {addNewPoint} from './view/add-new-point.js';
//import {AddWithoutDestination} from './view/add-without-destination.js';
//import {AddWithoutOffers} from './view/add-without-offers.js';
import {travelPointMocks} from './mock/travel-point-mocks.js';
import {travelPoint} from './view/travel-point';
import {AddNewPointMock} from './mock/add-new-point-mock';
import {RenderPosition, renderTemplate} from './render';

const siteList = document.querySelector('.page-body');

const headInfoContainer =  siteList.querySelector('.trip-main');
renderTemplate(headInfoContainer, headInfo(), RenderPosition.AFTERBEGIN);

const contentFilter =  siteList.querySelector('.trip-events');
renderTemplate(contentFilter, contentFilters(), RenderPosition.AFTERBEGIN);

const siteFilterList = siteList.querySelector('.trip-controls__navigation');
renderTemplate(siteFilterList, headNavigation(), RenderPosition.BEFOREEND);

const headFiltersContainer =  siteList.querySelector('.trip-controls__filters');
renderTemplate(headFiltersContainer, headFilters(), RenderPosition.BEFOREEND);

//const addWithoutDestination = siteList.querySelector('.trip-events__list');
//renderTemplate(addWithoutDestination, AddWithoutDestination(), RenderPosition.BEFOREBEGIN);

//const addWithoutOffers = siteList.querySelector('.trip-events__list');
//renderTemplate(addWithoutOffers, AddWithoutOffers(), RenderPosition.BEFOREBEGIN);

const mocki = Array.from(Array(5),() => travelPointMocks());

const addNewPointContainer = siteList.querySelector('.trip-events__list');
renderTemplate(addNewPointContainer, addNewPoint(AddNewPointMock()), RenderPosition.AFTERBEGIN);

for (const mockiKey of mocki) {
  const travelPointContainer =  siteList.querySelector('.trip-events__list');
  renderTemplate(travelPointContainer, travelPoint(mockiKey), RenderPosition.BEFOREEND);

}
