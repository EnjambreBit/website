import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enjambre-work-item', 'Integration | Component | enjambre work item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{enjambre-work-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#enjambre-work-item}}
      template block text
    {{/enjambre-work-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
