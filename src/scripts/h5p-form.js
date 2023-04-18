import Util from '@services/util';
// import Dictionary from '@services/dictionary';
import Form from './components/form';
// import XAPI from './mixins/xapi';

import '@styles/h5p-form.scss';

export default class H5P_Form /*extends H5P.EventDispatcher */{
  /**
   * @class
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    // super();
    
    // Sanitize parameters
    this.params = Util.extend({}, params);
    // console.log('this.params', this.params);
    this.contentId = contentId;
    this.extras = extras;

    this.form = new Form({ 'inputs': this.params.inputs });
    this.dom = this.buildDOM();   

    
  }
  /**
   * Attach library to wrapper.
   *
   * @param {H5P.jQuery} wrapper Content's container.
   * @param wrapper
   */
  attach(wrapper) {
    wrapper.get(0).classList.add('h5p-form');
    wrapper.get(0).appendChild(this.dom);
  }

  /**
   * Build main DOM.
   *
   * @returns {HTMLElement} Main DOM.
   */
  buildDOM() {
    const dom = document.createElement('div');
    dom.classList.add('h5p-form-main');
    dom.append(this.form.getDOM());
    return dom;
  }




  setContent(content) {
    if (content) {
      this.content.innerHTML = '';
      this.content.append(content);
      this.content.classList.remove('display-none');
    }
    else {
      this.content.classList.add('display-none');
    }
  }

}

/** @constant {string} Default description */
H5P_Form.DEFAULT_DESCRIPTION = 'H5P Form';
