import ContentFilters from './view/content-filters.js';
import HeadNavigation from './view/head-navigation.js';
import HeadFilters from './view/head-filters.js';
import HeadInfo from './view/head-info.js';
import AddNewPoint from './view/add-new-point.js';
import TravelPoint from './view/travel-point';
import {travelPointMocks} from './mock/travel-point-mocks.js';
import {render, RenderPosition} from './render';
import ContentList from './view/content-list';
import EditPoint from './view/edit-point';
import EmptyList from './view/empty-list';

const mainMenu = document.querySelector('.trip-main');
const mainMenuControls = mainMenu.querySelector('.trip-main__trip-controls');

const renderTravelPoint = (travelPoint, pointData) => {
  const travelPointComponent = new TravelPoint(pointData);
  const travelPointEditor = new EditPoint(pointData);
  const replacePointToEdit = () => {
    travelPoint.replaceChild(travelPointEditor.element, travelPointComponent.element);
  };
  const replaceEditToPoint = () => {
    travelPoint.replaceChild(travelPointComponent.element, travelPointEditor.element);
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  const onMouseClickDown = () => {
    replacePointToEdit();
  };
  const onMouseClickUp = () => {
    replaceEditToPoint();
  };
  travelPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    onMouseClickDown();
    document.addEventListener('keydown', onEscKeyDown);
  });
  travelPointEditor.element.querySelector('.event__rollup-btn').addEventListener('click', () => onMouseClickUp());
  travelPointEditor.element.querySelector('form').addEventListener('submit',(evt) => {
    onMouseClickUp();
    evt.preventDefault();
    replaceEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  render(travelPoint, travelPointComponent.element, RenderPosition.BEFOREEND);
};

render(mainMenu, new HeadInfo().element, RenderPosition.AFTERBEGIN);
render(mainMenuControls, new HeadNavigation().element, RenderPosition.AFTERBEGIN);
render(mainMenuControls, new HeadFilters().element, RenderPosition.AFTERBEGIN);

const content = document.querySelector('.trip-events');
render(content, new ContentFilters().element, RenderPosition.AFTERBEGIN);
render(content, new ContentList().element, RenderPosition.BEFOREEND);

const contentList = content.querySelector('.trip-events__list');
render(contentList, new AddNewPoint(travelPointMocks()).element, RenderPosition.AFTERBEGIN);

//render(contentList, new EditPoint(travelPointMocks()).element, RenderPosition.AFTERBEGIN);
const data = Array.from(Array(5),() => travelPointMocks());

for (const keys of data) {
  renderTravelPoint(contentList, keys);
}
if (contentList.children.length === 0) {
  render(content, new EmptyList().element ,RenderPosition.BEFOREEND);
}
