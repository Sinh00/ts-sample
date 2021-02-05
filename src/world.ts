export default class World {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }

  private Koncha(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
