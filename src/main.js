import {ContentList} from './view/content-list.js';
import {ContentFilters} from './view/content-filters.js';
import {HeadNavigation} from './view/head-navigation.js';
import {HeadFilters} from './view/head-filters.js';
import {HeadInfo} from './view/head-info.js';
import {AddNewPoint} from './view/add-new-point.js';
import {AddWithoutDestination} from './view/add-without-destination.js';
import {AddWithoutOffers} from './view/add-without-offers.js';

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

const headInfo =  document.querySelector('.trip-main');
renderTemplate(headInfo, HeadInfo(), RenderPosition.AFTERBEGIN);

const contentFilter =  document.querySelector('.trip-events');
renderTemplate(contentFilter, ContentFilters(), RenderPosition.AFTERBEGIN);

const contentList =  document.querySelector('.trip-events');
renderTemplate(contentList, ContentList(), RenderPosition.BEFOREEND);

const siteFilterList = siteList.querySelector('.trip-controls__navigation');
renderTemplate(siteFilterList, HeadNavigation(), RenderPosition.BEFOREEND);

const headFilters =  document.querySelector('.trip-controls__filters');
renderTemplate(headFilters, HeadFilters(), RenderPosition.BEFOREEND);

const addNewPoint = siteList.querySelector('.trip-events__list');
renderTemplate(addNewPoint, AddNewPoint(), RenderPosition.BEFOREBEGIN);

const addWithoutDestination = siteList.querySelector('.trip-events__list');
renderTemplate(addWithoutDestination, AddWithoutDestination(), RenderPosition.BEFOREBEGIN);

const addWithoutOffers = siteList.querySelector('.trip-events__list');
renderTemplate(addWithoutOffers, AddWithoutOffers(), RenderPosition.BEFOREBEGIN);

//const addEventBtn = document.querySelector('.trip-main__event-add-btn');
//const addNewPoint = siteList.querySelector('.trip-events__list');
//addEventBtn.addEventListener('click', () => {
//  renderTemplate(addNewPoint, AddNewPoint(), RenderPosition.BEFOREBEGIN);
//  addEventBtn.style.disabled = true;
//});
