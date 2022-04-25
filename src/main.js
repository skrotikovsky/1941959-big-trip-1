import {travelPointMocks} from './mock/travel-point-mocks.js';
import BoardPresenter from './presenter/board-presenter';
const mainMenu = document.querySelector('.trip-main');
const mainMenuControls = mainMenu.querySelector('.trip-main__trip-controls');
const content = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');
const data = Array.from(Array(5),() => travelPointMocks());
const presenter = new BoardPresenter(mainMenuControls, content, filtersContainer);
presenter.init(data);
