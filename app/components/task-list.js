import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TaskListComponent extends Component {
  @action
  toggleTask(task) {
    this.args.toggleTask(task);
  }
}
