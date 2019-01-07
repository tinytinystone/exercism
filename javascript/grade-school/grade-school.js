export default class School {
  constructor() {
    this._db = {};
  }

  roster() {
    const result = {};
    Object.keys(this._db).forEach((level) => {
      result[level] = [...this._db[level]];
    });
    return result;
  }

  add(name, level) {
    this._db[level] = this.grade(level)
      .concat(name)
      .sort();
  }

  grade(level) {
    return this._db[level] ? [...this._db[level]].sort() : [];
  }
}
