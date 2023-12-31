export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    if (
      this.constructor !== Building
      && 'evacuationWarningMessage' in this === false
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = value;
  }
}
