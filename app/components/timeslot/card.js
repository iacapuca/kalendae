import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardComponent extends Component {
  @tracked isEditMode = false;
  @tracked isDisplayingIcons = false;

  @action
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  @action
  displayIcons(e) {
    e.type === 'mouseenter'
      ? (this.isDisplayingIcons = true)
      : (this.isDisplayingIcons = false);
  }

  get isCanceled() {
    return this.args.timeslot.status === 'CANCELED';
  }

  get shouldDisplayIcons() {
    return this.isDisplayingIcons || this.isCanceled;
  }
}
