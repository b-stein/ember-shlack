import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FooterComponent extends Component {
  @tracked
  body = '';

  get isDisabled() {
    return !this.body
  }
  
  @action
  updateMessageBody(evt) {
    this.body = evt.target.value;
  }
  
  @action
  async handleSubmit(evt) {
    evt.preventDefault();

    //action sent as an arg in the template
    await this.args.sendMessage(this.body);
    this.body = '';
  }
}
