import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TaskManagerService extends Service {
  @tracked tasks = [];

  addTask(title) {
    this.tasks = [...this.tasks, { title, isCompleted: false }];
  }

  toggleTaskCompletion(task) {
    this.tasks = this.tasks.map(t =>
      t === task ? { ...t, isCompleted: !t.isCompleted } : t
    );
  }
}
