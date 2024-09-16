import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked newTaskTitle = '';

  @action
  setNewTaskTitle(value) {
    this.newTaskTitle = value;
  }

  @action
  addTask(title) {
    this.model.addTask(title);
    this.newTaskTitle = ''; // Clear input after adding task
  }

  @action
  toggleTask(task) {
    this.model.toggleTaskCompletion(task);
  }
}
