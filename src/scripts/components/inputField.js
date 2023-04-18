import Util from '@services/util';

export default class InputField extends H5P.EventDispatcher {

  constructor(params = {}) {

    super();
    this.params = Util.extend({
    }, params);

    this.label = this.params.label;
    this.dom = this.buildDOM(); 

  }    
  getDOM() {
    return this.dom;
  }
  buildDOM() {
    const dom = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `${this.label.toLowerCase()}-input`);
    input.addEventListener('blur', (event) => {    
      const xAPIEvent = this.createXAPIEventTemplate('interaction');
      xAPIEvent.setScoredResult(1, 1, self, true, true);
      xAPIEvent.data.statement.result.response = event.target.value;
      Util.extend(
        xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
        {
          interactionType: 'text-input',
          type: '',
          description: {
            'en-US': this.label
          }
        }
      ); 
      this.trigger(xAPIEvent);
    });
    const label = document.createElement('label');
    label.setAttribute('for', `${this.label.toLowerCase()}-input` );
    label.innerHTML = this.label;
    dom.append(label);
    dom.append(input); 
    return dom;
  }
}