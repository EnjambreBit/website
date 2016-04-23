import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-menu', 'Integration | Component | enjambre menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{enjambre-menu}}`);
  assert.ok(this.$().text().trim());
});
