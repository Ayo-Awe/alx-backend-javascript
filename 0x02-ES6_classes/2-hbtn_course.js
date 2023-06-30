export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }

    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }

    if (!isArrayOfStrings(students)) {
      throw new TypeError("Students must be an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
}

function isArrayOfStrings(value) {
  if (!Array.isArray(value)) return false;

  if (!value.every((student) => typeof student === "string")) return false;

  return true;
}
