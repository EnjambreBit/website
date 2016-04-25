import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-slider', 'Integration | Component | enjambre slider', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{enjambre-slider}}`);
  assert.ok(this.$().text().trim(), "Tiene contenido visible en formato texto.");
});
