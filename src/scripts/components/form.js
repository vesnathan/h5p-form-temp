import Util from '@services/util';
import MainInitialization from './mixins/main-initialization';
import InputField from './inputField';

export default class Form {
  constructor(params = {}, /*callbacks = {}*/) {
    this.params = Util.extend({
    }, params);
    

    Util.addMixins(
      Form,
      [
        MainInitialization,
      ]
    );
    this.dom = this.buildDOM();

  }
  /**
   * Get DOM.
   *
   * @returns {HTMLElement} Content DOM.
   */
  getDOM() {
    return this.dom;
  }
  buildDOM() {
    const dom = document.createElement('div');
    
    this.params.inputs.map((input) => {
      const field = new InputField({ 'label': input });
      dom.append(field.getDOM());
    });
    
    
    dom.classList.add('h5p-form-field-set');
    

    return dom;
  }
}


