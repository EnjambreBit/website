import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-footer', 'Integration | Component | enjambre footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{enjambre-footer}}`);
  assert.equal(this.$().text().trim(), '© 2016 Enjambre Bit SRL.');
});
