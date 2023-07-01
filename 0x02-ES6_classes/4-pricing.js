import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (currency instanceof Currency === false) {
      throw new TypeError('Currency must be of type currency');
    }

    this._currency = currency;
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    this._amount = value;
  }

  set currency(value) {
    if (value instanceof Currency === false) {
      throw new TypeError('Currency must be of type currency');
    }

    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion Rate must be a number');
    }

    return amount * conversionRate;
  }
}
