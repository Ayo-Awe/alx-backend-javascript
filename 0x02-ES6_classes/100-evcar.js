import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, range);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }
}
