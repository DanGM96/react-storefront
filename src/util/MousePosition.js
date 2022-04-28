class MousePosition {
  mouseX = 0;
  mouseY = 0;

  constructor() {
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    window.addEventListener("mousemove", this.handleMouseMovement);
  }

  handleMouseMovement(event) {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
  }
}

export default new MousePosition();
