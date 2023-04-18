
/**
 * Mixin containing main init stuff.
 */
export default class MainInitialization {

  /**
   * Build the DOM.
   */
  buildDOM() {
    this.dom = document.createElement('div');
    this.dom.classList.add('h5p-form-container'); 
  }
}
