export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  static [Symbol.species]() {
    return this;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    this._motor = value;
  }

  set brand(value) {
    this._brand = value;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
