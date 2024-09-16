import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AddTaskComponent extends Component {
  @action
  handleInput(event) {
    // Update the new task title with the value from the input
    this.args.setNewTaskTitle(event.target.value);
  }

  @action
  addTask() {
    // Add the task using the provided action
    this.args.addTask(this.args.newTaskTitle);
  }
}
