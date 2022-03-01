const RenderPosition = {
  BEFOREBEGIN : 'beforebegin',
  AFTERBEGIN : 'afterbegin',
  BEFOREEND : 'beforeend',
  AFTEREND : 'afterend',
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

import {ContentFilters} from './view/content-filters.js';
const siteList = document.querySelector('.main');
const siteListElement = siteList.querySelector('.trip-events');
renderTemplate(siteListElement, ContentFilters, RenderPosition.AFTERBEGIN);

import {ContentList} from './view/content-list.js';
const filterList = document.querySelector('.main');
const siteFilterList = filterList.querySelector('.trip-events');
renderTemplate(siteFilterList, ContentList, RenderPosition.BEFOREEND);

