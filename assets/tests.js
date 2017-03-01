define('website/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('website/tests/breakpoints.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - breakpoints.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-footer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-footer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-footer.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-galeria.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-galeria.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-galeria.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-menu.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-menu.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-section.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-section.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-section.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-slider.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-slider.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-slider.js should pass jshint.');
  });
});
define('website/tests/components/enjambre-work-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/enjambre-work-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/enjambre-work-item.js should pass jshint.');
  });
});
define('website/tests/components/video-control.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/video-control.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-control.js should pass jshint.');
  });
});
define('website/tests/controllers/playground.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/playground.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/playground.js should pass jshint.');
  });
});
define('website/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('website/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('website/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'website/tests/helpers/start-app', 'website/tests/helpers/destroy-app'], function (exports, _qunit, _websiteTestsHelpersStartApp, _websiteTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _websiteTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _websiteTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('website/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('website/tests/helpers/resolver', ['exports', 'website/resolver', 'website/config/environment'], function (exports, _websiteResolver, _websiteConfigEnvironment) {

  var resolver = _websiteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _websiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _websiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('website/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('website/tests/helpers/responsive', ['exports', 'ember', 'ember-responsive/media'], function (exports, _ember, _emberResponsiveMedia) {
  exports.setBreakpointForIntegrationTest = setBreakpointForIntegrationTest;
  var getOwner = _ember['default'].getOwner;
  var classify = _ember['default'].String.classify;

  _emberResponsiveMedia['default'].reopen({
    // Change this if you want a different default breakpoint in tests.
    _defaultBreakpoint: 'desktop',

    _breakpointArr: _ember['default'].computed('breakpoints', function () {
      return Object.keys(this.get('breakpoints')) || _ember['default'].A([]);
    }),

    _forceSetBreakpoint: function _forceSetBreakpoint(breakpoint) {
      var found = false;

      var props = {};
      this.get('_breakpointArr').forEach(function (bp) {
        var val = bp === breakpoint;
        if (val) {
          found = true;
        }

        props['is' + classify(bp)] = val;
      });

      if (found) {
        this.setProperties(props);
      } else {
        throw new Error('You tried to set the breakpoint to ' + breakpoint + ', which is not in your app/breakpoint.js file.');
      }
    },

    match: function match() {}, // do not set up listeners in test

    init: function init() {
      this._super.apply(this, arguments);

      this._forceSetBreakpoint(this.get('_defaultBreakpoint'));
    }
  });

  exports['default'] = _ember['default'].Test.registerAsyncHelper('setBreakpoint', function (app, breakpoint) {
    // this should use getOwner once that's supported
    var mediaService = app.__deprecatedInstance__.lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
  });

  function setBreakpointForIntegrationTest(container, breakpoint) {
    var mediaService = getOwner(container).lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
    container.set('media', mediaService);

    return mediaService;
  }
});
define('website/tests/helpers/responsive.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/responsive.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/responsive.js should pass jshint.');
  });
});
define('website/tests/helpers/start-app', ['exports', 'ember', 'website/app', 'website/config/environment'], function (exports, _ember, _websiteApp, _websiteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _websiteConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _websiteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('website/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('website/tests/initializers/responsive.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers/responsive.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/responsive.js should pass jshint.');
  });
});
define('website/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('website/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('website/tests/routes/carousel-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/carousel-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/carousel-test.js should pass jshint.');
  });
});
define('website/tests/routes/index-v2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index-v2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index-v2.js should pass jshint.');
  });
});
define('website/tests/routes/playground.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/playground.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/playground.js should pass jshint.');
  });
});
define('website/tests/routes/test-galeria.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/test-galeria.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test-galeria.js should pass jshint.');
  });
});
define("website/tests/test-helper", ["exports"], function (exports) {});
define('website/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('website/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
