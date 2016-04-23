import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-menu', 'Integration | Component | enjambre menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{enjambre-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#enjambre-menu}}
      template block text
    {{/enjambre-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
