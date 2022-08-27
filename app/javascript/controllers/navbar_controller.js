import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "topnav" ]
  connect() {
    console.log("Hello")
  }

  toggle() {
    const x = this.topnavTarget
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
