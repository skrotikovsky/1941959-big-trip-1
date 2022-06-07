import HeadFilters from '../view/head-filters';
import HeadInfo from '../view/head-info';
import HeadNavigation from '../view/head-navigation';
import ContentFilters from '../view/content-filters';
import ContentList from '../view/content-list';
import {render, RenderPosition} from '../render';
import EmptyList from '../view/empty-list';
import TravelPointPresenter from './travel-point-presenter';
import {sortById, sortInfo, SortType, updateItem} from '../toolUnit';

export default class BoardPresenter {
  #contentContainer = null;
  #filtersContainer = null;
  #menuContainer = null;
  #headFilters = new HeadFilters();
  #headInfo = new HeadInfo();
  #headNavigation = new HeadNavigation();
  #contentFilters = new ContentFilters();
  #contentList = new ContentList();
  #contentEmpty = new EmptyList();
  #travelPoints = [];

  constructor(menuContainer, contentContainer, filtersContainer) {
    this._setOfPoints = new Map();
    this.#menuContainer = menuContainer;
    this.#contentContainer = contentContainer;
    this.#filtersContainer = filtersContainer;
  }

  init = (travelPoints) => {
    this.#contentFilters.setTimeClickHandler(this._setTimeFilterClickHandler);
    this.#contentFilters.setDayClickHandler(this._setDayFilterClickHandler);
    this.#contentFilters.setPriceClickHandler(this._setPriceFilterClickHandler);
    this.#travelPoints = travelPoints.slice();
    this._renderHeadMenu();
    this._renderFilters();
    this._renderContentFilters();
    this._renderContentList();
    this._renderPointList();
    this._renderSortedPointList(SortType.DAY);
    this._renderEmptyList();
  }

  _renderPointList = () => {
    for (const mock of this.#travelPoints) {
      this._renderPoint(mock);
    }
  }

  _renderSortedPointList = (sortType) => {
    const sortFilterButton = document.querySelector(`#sort-${sortType}`);
    if (sortFilterButton.getAttribute('checked') === null) {
      const idSortedSet = sortById(this._setOfPoints, sortType);
      const oldSort = this._setOfPoints;
      const oldMock = this.#travelPoints;
      this._clearAllPoints();
      for (const id of idSortedSet) {
        oldSort.get(id).init(sortInfo(id, oldMock));
      }
      idSortedSet.forEach((id) => this._renderPoint(sortInfo(id, oldMock)));
      document.querySelectorAll('.trip-sort__input').forEach((x) => x.removeAttribute('checked'));
      sortFilterButton.setAttribute('checked', 'checked');
    }
  }

  _renderPoint = (mock) => {
    const travelPoint = new TravelPointPresenter(this.#contentList, this._pointUpdateHandler, this._changeModeHandler);
    travelPoint.init(mock);
    this._setOfPoints.set(mock.pointId, travelPoint);
  }

  _renderContentList = () => {
    render(this.#contentContainer, this.#contentList, RenderPosition.BEFOREEND);
  };

  _renderHeadMenu = () => {
    render(this.#menuContainer, this.#headInfo, RenderPosition.AFTERBEGIN);
    render(this.#menuContainer, this.#headNavigation, RenderPosition.AFTERBEGIN);
  };

  _renderContentFilters = () => {
    render(this.#contentContainer, this.#contentFilters, RenderPosition.AFTERBEGIN);
  };

  _renderFilters= () => {
    render(this.#filtersContainer, this.#headFilters, RenderPosition.BEFOREEND);
  };

  _renderLoading = () => {
    //
  }

  _renderEmptyList = () => {
    if (this.#travelPoints.length === 0) {
      render(this.#contentContainer, this.#contentEmpty, RenderPosition.BEFOREEND);
    }
  }

  _clearAllPoints = () => {
    this._setOfPoints.forEach((point) => (point.destroy()));
  }

  _pointUpdateHandler = (updatedPoint) => {
    this.#travelPoints = updateItem(this.#travelPoints, updatedPoint);
    this._setOfPoints.get(updatedPoint.pointId).init(updatedPoint);
  }

  _changeModeHandler = () => {
    this._setOfPoints.forEach((presenter) => presenter.resetMode());
  }

  _setDayFilterClickHandler = () => {
    this._renderSortedPointList(SortType.DAY);
  }

  _setTimeFilterClickHandler = () => {
    this._renderSortedPointList(SortType.TIME);
  }

  _setPriceFilterClickHandler = () => {
    this._renderSortedPointList(SortType.PRICE);
  }
}
