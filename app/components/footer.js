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
  handleSubmit(evt) {
    console.log(evt)
  }

  @action
  updateMessageBody(evt) {
    this.body = evt.target.value;
  }
}
