class StorageMock {
  constructor() {
    this.store = [];
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value;
  }
}

export default StorageMock;