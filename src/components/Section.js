export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }
  addFirst(element) {
    this._container.prepend(element);
  }

  render() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }
}
