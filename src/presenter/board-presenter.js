import HeadFilters from '../view/head-filters';
import HeadInfo from '../view/head-info';
import HeadNavigation from '../view/head-navigation';
import ContentFilters from '../view/content-filters';
import ContentList from '../view/content-list';
import {render, RenderPosition} from '../render';
import EmptyList from '../view/empty-list';
import TravelPointPresenter from './travel-point-presenter';

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
    this.#menuContainer = menuContainer;
    this.#contentContainer = contentContainer;
    this.#filtersContainer = filtersContainer;
  }

  init = (travelPoints) => {
    this.#travelPoints = travelPoints.slice();
    this._renderHeadMenu();
    this._renderFilters();
    this._renderContentFilters();
    this._renderContentList();
    this._renderPointList();
    this._renderEmptyList();
  }

  _renderPointList = () => {
    for (const mock of this.#travelPoints) {
      const travelPoint = new TravelPointPresenter(this.#contentList);
      travelPoint.init(mock);
    }
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
    if (this.#contentList.element.firstChild === null) {
      render(this.#contentContainer, this.#contentEmpty, RenderPosition.BEFOREEND);
    }
  }
}
