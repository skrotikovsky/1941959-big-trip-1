import {travelPointMocks} from './mock/travel-point-mocks.js';
import BoardPresenter from './presenter/board-presenter';
const mainMenu = document.querySelector('.trip-main');
const mainMenuControls = mainMenu.querySelector('.trip-main__trip-controls');
const content = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');
const data = Array.from(Array(5),() => travelPointMocks());
const presenter = new BoardPresenter(mainMenuControls, content, filtersContainer);
presenter.init(data);

/*
const renderTravelPoint = (travelPoint, pointData) => {
  const travelPointComponent = new TravelPoint(pointData);
  const travelPointEditor = new EditPoint(pointData);
  const replacePointToEdit = () => {
    replace(travelPointEditor,travelPointComponent);
  };
  const replaceEditToPoint = () => {
    replace(travelPointComponent, travelPointEditor);
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
  travelPointComponent.setClickPointHandler(() => {
    onMouseClickDown();
    document.addEventListener('keydown', onEscKeyDown);
  });
  travelPointEditor.setClickPointHandler(() => {
    onMouseClickUp();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  render(travelPoint, travelPointComponent, RenderPosition.BEFOREEND);
};

render(mainMenu, new HeadInfo(), RenderPosition.AFTERBEGIN);
render(mainMenuControls, new HeadNavigation(), RenderPosition.AFTERBEGIN);
render(mainMenuControls, new HeadFilters(), RenderPosition.AFTERBEGIN);


render(content, new ContentFilters(), RenderPosition.AFTERBEGIN);
render(content, new ContentList(), RenderPosition.BEFOREEND);


render(contentList, new AddNewPoint(travelPointMocks()), RenderPosition.AFTERBEGIN);

;

for (const keys of data) {
  renderTravelPoint(contentList, keys);
}
if (contentList.children.length === 0) {
  render(content, new EmptyList() ,RenderPosition.BEFOREEND);
}
*/
