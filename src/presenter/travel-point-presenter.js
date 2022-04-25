import TravelPoint from '../view/travel-point';
import EditPoint from '../view/edit-point';
import {remove, render, RenderPosition, replace} from '../render';

export default class TravelPointPresenter {
  #listContainer = null;
  #pointData = null;
  #travelPointComponent = null;
  #travelPointEditor = null;
  constructor(listContainer) {
    this.#listContainer = listContainer;
  }

  init = (pointData) => {
    this.#pointData = pointData;
    const prevPoint = this.#travelPointComponent;
    const prevPointEditor = this.#travelPointEditor;
    this.#travelPointComponent = new TravelPoint(this.#pointData);
    this.#travelPointEditor = new EditPoint(this.#pointData);
    this._setClickHandlerToPoint();
    this._setClickHandlerToEditor();
    if (prevPointEditor === null || prevPoint === null) {
      this._renderTravelPoint();
      return;
    }
    if (this.#listContainer.element.contains(prevPoint.element())) {
      replace(this.#travelPointComponent, prevPoint);
    }
    if (this.#listContainer.element.contains(prevPointEditor.element())) {
      replace(this.#travelPointEditor, prevPointEditor);
    }
    remove(prevPoint);
    remove(prevPointEditor);
  }

  destroy = () => {
    remove(this.#travelPointEditor);
    remove(this.#travelPointComponent);
  }

  _renderTravelPoint = () => {
    render(this.#listContainer, this.#travelPointComponent, RenderPosition.BEFOREEND);
  };

  _replacePointToEdit = () => {
    replace(this.#travelPointEditor, this.#travelPointComponent);
  };

  _replaceEditToPoint = () => {
    replace(this.#travelPointComponent, this.#travelPointEditor);
  };

  _onMouseClickDown = () => {
    this._replacePointToEdit();
  };

  _onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this._replaceEditToPoint();
      document.removeEventListener('keydown', this._onEscKeyDown);
    }
  };

  _setClickHandlerToPoint = () => {
    this.#travelPointComponent.setClickPointHandler(() => {
      this._onMouseClickDown();
      document.addEventListener('keydown', this._onEscKeyDown);
    });
  }

  _setClickHandlerToEditor = () => {
    this.#travelPointEditor.setClickPointHandler(() => {
      this._replaceEditToPoint();
      document.removeEventListener('keydown', this._onEscKeyDown);
    });
  }

  _setClickHandlerToStar = () => {
    const star = this.#travelPointComponent.element.querySelector('.event__favorite-btn');
    star.addEventListener('click',(evt) => {
      evt.preventDefault();
      this.#pointData.isFavorite = true;
    });
  }
}


