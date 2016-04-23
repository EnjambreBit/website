import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-footer', 'Integration | Component | enjambre footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{enjambre-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#enjambre-footer}}
      template block text
    {{/enjambre-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
