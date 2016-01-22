export default class Kernel {

  protected bindings: Object = {};

  bind(key: string, value) {
    this.bindings[key] = value;
  }

  get(key: string) {
    return this.bindings[key]
  }
}