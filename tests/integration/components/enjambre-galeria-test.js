import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-galeria', 'Integration | Component | enjambre galeria', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{enjambre-galeria}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#enjambre-galeria}}
      template block text
    {{/enjambre-galeria}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
