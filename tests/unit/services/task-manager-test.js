import { module, test } from 'qunit';
import { setupTest } from 'my-todo-app/tests/helpers';

module('Unit | Service | task-manager', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:task-manager');
    assert.ok(service);
  });
});
