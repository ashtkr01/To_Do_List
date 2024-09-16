import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service taskManager;

  model() {
    // Using the taskManager service as the model for simplicity.
    return this.taskManager;
  }
}
