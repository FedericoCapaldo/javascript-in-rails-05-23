import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed"
export default class extends Controller {
  static values = {
    sentences: Array
  }

  connect() {
    new Typed(this.element, {
      strings: this.sentencesValue,
      typeSpeed: 50
    })
  }
}
