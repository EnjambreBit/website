import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-work-item', 'Integration | Component | enjambre work item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{enjambre-work-item}}`);
  assert.ok(this.$());
});
