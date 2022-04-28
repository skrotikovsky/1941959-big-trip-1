import TravelPoint from '../view/travel-point';
import EditPoint from '../view/edit-point';
import {remove, render, RenderPosition, replace} from '../render';
const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class TravelPointPresenter {
  #listContainer = null;
  #pointData = null;
  #travelPointComponent = null;
  #travelPointEditor = null;

  constructor(listContainer,changeData, changeMode) {
    this.#listContainer = listContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._mode = Mode.DEFAULT;
  }

  init = (pointData) => {
    this.#pointData = pointData;
    const prevPoint = this.#travelPointComponent;
    const prevPointEditor = this.#travelPointEditor;
    this.#travelPointComponent = new TravelPoint(this.#pointData);
    this.#travelPointEditor = new EditPoint(this.#pointData);
    this.#travelPointComponent.setFavoriteClickHandler(this._setClickHandlerToStar);
    this.#travelPointEditor.setClickPointHandler(this._setClickHandlerToEditor);
    this.#travelPointComponent.setClickPointHandler(this._setClickHandlerToPoint);
    this.#travelPointEditor.setSubmitEditorHandler(this._setFormSubmitHandler);
    if (prevPointEditor === null || prevPoint === null) {
      this._renderTravelPoint();
      return;
    }
    if (this._mode === Mode.DEFAULT) {
      replace(this.#travelPointComponent, prevPoint);
    }
    if (this._mode === Mode.EDITING) {
      replace(this.#travelPointEditor, prevPointEditor);
    }
    remove(prevPoint);
    remove(prevPointEditor);
  }

  destroy = () => {
    remove(this.#travelPointEditor);
    remove(this.#travelPointComponent);
  }

  get data() {return this.#pointData;}

  _renderTravelPoint = () => {
    render(this.#listContainer, this.#travelPointComponent, RenderPosition.BEFOREEND);
  };

  _replacePointToEdit = () => {
    replace(this.#travelPointEditor, this.#travelPointComponent);
    document.addEventListener('keydown', this._onEscKeyDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  };

  _replaceEditToPoint = () => {
    replace(this.#travelPointComponent, this.#travelPointEditor);
    this._mode = Mode.DEFAULT;
    document.removeEventListener('keydown', this._onEscKeyDown);
  };

  _onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this._replaceEditToPoint();
      document.removeEventListener('keydown', this._onEscKeyDown);
    }
  };

  _setClickHandlerToPoint = () => {
    this._replacePointToEdit();
  }

  _setClickHandlerToEditor = () => {
    this._replaceEditToPoint();
  }

  _setClickHandlerToStar = () => {
    this._pointData.isFavorite = !this._pointData.isFavorite;
    this._changeData(this._pointData);
  }

  _setFormSubmitHandler = (pointData) => {
    this._changeData(pointData);
    this._replaceEditToPoint();
  }

  resetMode = () => {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToPoint();
    }
  }
}


