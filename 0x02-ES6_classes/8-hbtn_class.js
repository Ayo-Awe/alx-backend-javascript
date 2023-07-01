export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }

    this._size = value;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._location = value;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this._location;
    }

    if (type === 'number') {
      return this._size;
    }

    return this;
  }
}
