'use strict';

angular.module('toyota', ['ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./app/views/home.html"
    }).state('build-all', {
        url: '/build-all',
        templateUrl: './app/views/build-all.html'
    }).state('build-tacoma', {
        url: '/build-tacoma',
        templateUrl: './app/views/build-tacoma.html',
        controller: 'build-tacoma'
    });
});
// module.exports =  {
//    database: "postgres://fuelabhf:IpEbVtebA3qOAy4s-91u-1wvyYbq1qzS@stampy.db.elephantsql.com:5432/fuelabhf",
//    user: "fuelabhf",
//    password: "IpEbVtebA3qOAy4s-91u-1wvyYbq1qzS"
// }
"use strict";

// host=server
// port 5432  
// config.database
// config.user
// config.password
// massive ( URL here 

// )
"use strict";
'use strict';

angular.module('toyota').controller('build-tacoma', function ($scope) {
  $scope.broken = 'working';

  $scope.myInterval = 5000;
  var slides = $scope.slides = ["https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/1/864_477_PNG/af00b31-ed3b036-d5b169f-88ac67c-e7e9359-fe3c93a-4048061-cb4bfdb-75ff6b4-1cce8f3-0e3ddd3-0e44209-c9df76a-096cb71-30f9e80-54f8546-c13d5e1-90455cf-265e76d-ec56c89.png", "https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/ff8551f-ba459c1-3e65d71-954aca8-9c7d687-1d1b70b-e39f3ed-0f5b482-aa06481-7f50678-120b780-98e5b37-0db9f89-5c6bef0-98c10f3-6fb64ca-b21c68f-264e4f4-b5fcbaf-4146097-7394438.png"];
  $scope.addSlide = function () {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/400/200/people' + newWidth + '/300',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
});
'use strict';

angular.module('toyota').controller('controller', function ($scope) {
    $scope.broken = 'working';
});
"use strict";

angular.module("toyota").directive("build-all-cars-minivans", function () {
    return {
        restrict: "E",
        templateUrl: "build-all-cars-minivans.html"
    };
});
'use strict';

angular.module('toyota').service('service', function () {});
"use strict";

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.collapse", "ui.bootstrap.dropdown", "ui.bootstrap.multiMap", "ui.bootstrap.position", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.modal", "ui.bootstrap.stackedMap"]);
angular.module('ui.bootstrap.collapse', []).directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function ($animate, $q, $parse, $injector) {
  var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
  return {
    link: function link(scope, element, attrs) {
      var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

      init();

      function init() {
        horizontal = !!('horizontal' in attrs);
        if (horizontal) {
          css = {
            width: ''
          };
          cssTo = { width: '0' };
        } else {
          css = {
            height: ''
          };
          cssTo = { height: '0' };
        }
        if (!scope.$eval(attrs.uibCollapse)) {
          element.addClass('in').addClass('collapse').attr('aria-expanded', true).attr('aria-hidden', false).css(css);
        }
      }

      function getScrollFromElement(element) {
        if (horizontal) {
          return { width: element.scrollWidth + 'px' };
        }
        return { height: element.scrollHeight + 'px' };
      }

      function expand() {
        if (element.hasClass('collapse') && element.hasClass('in')) {
          return;
        }

        $q.resolve(expandingExpr(scope)).then(function () {
          element.removeClass('collapse').addClass('collapsing').attr('aria-expanded', true).attr('aria-hidden', false);

          if ($animateCss) {
            $animateCss(element, {
              addClass: 'in',
              easing: 'ease',
              css: {
                overflow: 'hidden'
              },
              to: getScrollFromElement(element[0])
            }).start()['finally'](expandDone);
          } else {
            $animate.addClass(element, 'in', {
              css: {
                overflow: 'hidden'
              },
              to: getScrollFromElement(element[0])
            }).then(expandDone);
          }
        }, angular.noop);
      }

      function expandDone() {
        element.removeClass('collapsing').addClass('collapse').css(css);
        expandedExpr(scope);
      }

      function collapse() {
        if (!element.hasClass('collapse') && !element.hasClass('in')) {
          return collapseDone();
        }

        $q.resolve(collapsingExpr(scope)).then(function () {
          element
          // IMPORTANT: The width must be set before adding "collapsing" class.
          // Otherwise, the browser attempts to animate from width 0 (in
          // collapsing class) to the given width here.
          .css(getScrollFromElement(element[0])
          // initially all panel collapse have the collapse class, this removal
          // prevents the animation from jumping to collapsed state
          ).removeClass('collapse').addClass('collapsing').attr('aria-expanded', false).attr('aria-hidden', true);

          if ($animateCss) {
            $animateCss(element, {
              removeClass: 'in',
              to: cssTo
            }).start()['finally'](collapseDone);
          } else {
            $animate.removeClass(element, 'in', {
              to: cssTo
            }).then(collapseDone);
          }
        }, angular.noop);
      }

      function collapseDone() {
        element.css(cssTo); // Required so that collapse works when animation is disabled
        element.removeClass('collapsing').addClass('collapse');
        collapsedExpr(scope);
      }

      scope.$watch(attrs.uibCollapse, function (shouldCollapse) {
        if (shouldCollapse) {
          collapse();
        } else {
          expand();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position']).constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
}).service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function ($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function (dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function (toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function (dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function (dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function (dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function (toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function closeDropdown(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope || !openScope.isOpen) {
      return;
    }

    if (evt && openScope.getAutoClose() === 'disabled') {
      return;
    }

    if (evt && evt.which === 3) {
      return;
    }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' && dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function (evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}]).controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function ($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
      scope = $scope.$new(),
      // create a child scope so we are not polluting original one
  templateScope,
      appendToOpenClass = dropdownConfig.appendToOpenClass,
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      keynavEnabled = false,
      selectedOption = null,
      body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function () {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function (value) {
        scope.isOpen = !!value;
      });
    }

    keynavEnabled = angular.isDefined($attrs.keyboardNav);
  };

  this.toggle = function (open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function () {
    return scope.isOpen;
  };

  scope.getToggleElement = function () {
    return self.toggleElement;
  };

  scope.getAutoClose = function () {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function () {
    return $element;
  };

  scope.isKeynavEnabled = function () {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function (keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
    angular.element(self.dropdownMenu).find('a') : $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40:
        {
          if (!angular.isNumber(self.selectedOption)) {
            self.selectedOption = 0;
          } else {
            self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1;
          }
          break;
        }
      case 38:
        {
          if (!angular.isNumber(self.selectedOption)) {
            self.selectedOption = elems.length - 1;
          } else {
            self.selectedOption = self.selectedOption === 0 ? 0 : self.selectedOption - 1;
          }
          break;
        }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function () {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function () {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  function removeDropdownMenu() {
    $element.append(self.dropdownMenu);
  }

  scope.$watch('isOpen', function (isOpen, wasOpen) {
    var appendTo = null,
        appendToBody = false;

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    if (angular.isDefined($attrs.dropdownAppendToBody)) {
      var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
      if (appendToBodyValue !== false) {
        appendToBody = true;
      }
    }

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      if (isOpen) {
        appendTo.append(self.dropdownMenu);
        $element.on('$destroy', removeDropdownMenu);
      } else {
        $element.off('$destroy', removeDropdownMenu);
        removeDropdownMenu();
      }
    }

    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
          css,
          rightalign,
          scrollbarPadding,
          scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth - (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth - (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function () {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function (tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function (dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}]).directive('uibDropdown', function () {
  return {
    controller: 'UibDropdownController',
    link: function link(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
}).directive('uibDropdownMenu', function () {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function link(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
}).directive('uibDropdownToggle', function () {
  return {
    require: '?^uibDropdown',
    link: function link(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function toggleDropdown(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function () {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function () {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.multiMap', []
/**
 * A helper, internal data structure that stores all references attached to key
 */
).factory('$$multiMap', function () {
  return {
    createNew: function createNew() {
      var map = {};

      return {
        entries: function entries() {
          return Object.keys(map).map(function (key) {
            return {
              key: key,
              value: map[key]
            };
          });
        },
        get: function get(key) {
          return map[key];
        },
        hasKey: function hasKey(key) {
          return !!map[key];
        },
        keys: function keys() {
          return Object.keys(map);
        },
        put: function put(key, value) {
          if (!map[key]) {
            map[key] = [];
          }

          map[key].push(value);
        },
        remove: function remove(key, value) {
          var values = map[key];

          if (!values) {
            return;
          }

          var idx = values.indexOf(value);

          if (idx !== -1) {
            values.splice(idx, 1);
          }

          if (!values.length) {
            delete map[key];
          }
        }
      };
    }
  };
});

angular.module('ui.bootstrap.position', []

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
).factory('$uibPosition', ['$document', '$window', function ($document, $window) {
  /**
   * Used by scrollbarWidth() function to cache scrollbar's width.
   * Do not access this variable directly, use scrollbarWidth() instead.
   */
  var SCROLLBAR_WIDTH;
  /**
   * scrollbar on body and html element in IE and Edge overlay
   * content and should be considered 0 width.
   */
  var BODY_SCROLLBAR_WIDTH;
  var OVERFLOW_REGEX = {
    normal: /(auto|scroll)/,
    hidden: /(auto|scroll|hidden)/
  };
  var PLACEMENT_REGEX = {
    auto: /\s?auto?\s?/i,
    primary: /^(top|bottom|left|right)$/,
    secondary: /^(top|bottom|left|right|center)$/,
    vertical: /^(top|bottom)$/
  };
  var BODY_REGEX = /(HTML|BODY)/;

  return {

    /**
     * Provides a raw DOM element from a jQuery/jQLite element.
     *
     * @param {element} elem - The element to convert.
     *
     * @returns {element} A HTML element.
     */
    getRawNode: function getRawNode(elem) {
      return elem.nodeName ? elem : elem[0] || elem;
    },

    /**
     * Provides a parsed number for a style property.  Strips
     * units and casts invalid numbers to 0.
     *
     * @param {string} value - The style value to parse.
     *
     * @returns {number} A valid number.
     */
    parseStyle: function parseStyle(value) {
      value = parseFloat(value);
      return isFinite(value) ? value : 0;
    },

    /**
     * Provides the closest positioned ancestor.
     *
     * @param {element} element - The element to get the offest parent for.
     *
     * @returns {element} The closest positioned ancestor.
     */
    offsetParent: function offsetParent(elem) {
      elem = this.getRawNode(elem);

      var offsetParent = elem.offsetParent || $document[0].documentElement;

      function isStaticPositioned(el) {
        return ($window.getComputedStyle(el).position || 'static') === 'static';
      }

      while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }

      return offsetParent || $document[0].documentElement;
    },

    /**
     * Provides the scrollbar width, concept from TWBS measureScrollbar()
     * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
     * In IE and Edge, scollbar on body and html element overlay and should
     * return a width of 0.
     *
     * @returns {number} The width of the browser scollbar.
     */
    scrollbarWidth: function scrollbarWidth(isBody) {
      if (isBody) {
        if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
          var bodyElem = $document.find('body');
          bodyElem.addClass('uib-position-body-scrollbar-measure');
          BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
          BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
          bodyElem.removeClass('uib-position-body-scrollbar-measure');
        }
        return BODY_SCROLLBAR_WIDTH;
      }

      if (angular.isUndefined(SCROLLBAR_WIDTH)) {
        var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
        $document.find('body').append(scrollElem);
        SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
        SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
        scrollElem.remove();
      }

      return SCROLLBAR_WIDTH;
    },

    /**
     * Provides the padding required on an element to replace the scrollbar.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**scrollbarWidth**: the width of the scrollbar</li>
     *     <li>**widthOverflow**: whether the the width is overflowing</li>
     *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
     *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
     *     <li>**heightOverflow**: whether the the height is overflowing</li>
     *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
     *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
     *   </ul>
     */
    scrollbarPadding: function scrollbarPadding(elem) {
      elem = this.getRawNode(elem);

      var elemStyle = $window.getComputedStyle(elem);
      var paddingRight = this.parseStyle(elemStyle.paddingRight);
      var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
      var scrollParent = this.scrollParent(elem, false, true);
      var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

      return {
        scrollbarWidth: scrollbarWidth,
        widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
        right: paddingRight + scrollbarWidth,
        originalRight: paddingRight,
        heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
        bottom: paddingBottom + scrollbarWidth,
        originalBottom: paddingBottom
      };
    },

    /**
     * Checks to see if the element is scrollable.
     *
     * @param {element} elem - The element to check.
     * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
     *   default is false.
     *
     * @returns {boolean} Whether the element is scrollable.
     */
    isScrollable: function isScrollable(elem, includeHidden) {
      elem = this.getRawNode(elem);

      var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
      var elemStyle = $window.getComputedStyle(elem);
      return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
    },

    /**
     * Provides the closest scrollable ancestor.
     * A port of the jQuery UI scrollParent method:
     * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
     *
     * @param {element} elem - The element to find the scroll parent of.
     * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
     *   default is false.
     * @param {boolean=} [includeSelf=false] - Should the element being passed be
     * included in the scrollable llokup.
     *
     * @returns {element} A HTML element.
     */
    scrollParent: function scrollParent(elem, includeHidden, includeSelf) {
      elem = this.getRawNode(elem);

      var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
      var documentEl = $document[0].documentElement;
      var elemStyle = $window.getComputedStyle(elem);
      if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
        return elem;
      }
      var excludeStatic = elemStyle.position === 'absolute';
      var scrollParent = elem.parentElement || documentEl;

      if (scrollParent === documentEl || elemStyle.position === 'fixed') {
        return documentEl;
      }

      while (scrollParent.parentElement && scrollParent !== documentEl) {
        var spStyle = $window.getComputedStyle(scrollParent);
        if (excludeStatic && spStyle.position !== 'static') {
          excludeStatic = false;
        }

        if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
          break;
        }
        scrollParent = scrollParent.parentElement;
      }

      return scrollParent;
    },

    /**
     * Provides read-only equivalent of jQuery's position function:
     * http://api.jquery.com/position/ - distance to closest positioned
     * ancestor.  Does not account for margins by default like jQuery position.
     *
     * @param {element} elem - The element to caclulate the position on.
     * @param {boolean=} [includeMargins=false] - Should margins be accounted
     * for, default is false.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**width**: the width of the element</li>
     *     <li>**height**: the height of the element</li>
     *     <li>**top**: distance to top edge of offset parent</li>
     *     <li>**left**: distance to left edge of offset parent</li>
     *   </ul>
     */
    position: function position(elem, includeMagins) {
      elem = this.getRawNode(elem);

      var elemOffset = this.offset(elem);
      if (includeMagins) {
        var elemStyle = $window.getComputedStyle(elem);
        elemOffset.top -= this.parseStyle(elemStyle.marginTop);
        elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
      }
      var parent = this.offsetParent(elem);
      var parentOffset = { top: 0, left: 0 };

      if (parent !== $document[0].documentElement) {
        parentOffset = this.offset(parent);
        parentOffset.top += parent.clientTop - parent.scrollTop;
        parentOffset.left += parent.clientLeft - parent.scrollLeft;
      }

      return {
        width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
        height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
        top: Math.round(elemOffset.top - parentOffset.top),
        left: Math.round(elemOffset.left - parentOffset.left)
      };
    },

    /**
     * Provides read-only equivalent of jQuery's offset function:
     * http://api.jquery.com/offset/ - distance to viewport.  Does
     * not account for borders, margins, or padding on the body
     * element.
     *
     * @param {element} elem - The element to calculate the offset on.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**width**: the width of the element</li>
     *     <li>**height**: the height of the element</li>
     *     <li>**top**: distance to top edge of viewport</li>
     *     <li>**right**: distance to bottom edge of viewport</li>
     *   </ul>
     */
    offset: function offset(elem) {
      elem = this.getRawNode(elem);

      var elemBCR = elem.getBoundingClientRect();
      return {
        width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
        height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
        top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
        left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
      };
    },

    /**
     * Provides offset distance to the closest scrollable ancestor
     * or viewport.  Accounts for border and scrollbar width.
     *
     * Right and bottom dimensions represent the distance to the
     * respective edge of the viewport element.  If the element
     * edge extends beyond the viewport, a negative value will be
     * reported.
     *
     * @param {element} elem - The element to get the viewport offset for.
     * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
     * of the first scrollable element, default is false.
     * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
     * be accounted for, default is true.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**top**: distance to the top content edge of viewport element</li>
     *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
     *     <li>**left**: distance to the left content edge of viewport element</li>
     *     <li>**right**: distance to the right content edge of viewport element</li>
     *   </ul>
     */
    viewportOffset: function viewportOffset(elem, useDocument, includePadding) {
      elem = this.getRawNode(elem);
      includePadding = includePadding !== false ? true : false;

      var elemBCR = elem.getBoundingClientRect();
      var offsetBCR = { top: 0, left: 0, bottom: 0, right: 0 };

      var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
      var offsetParentBCR = offsetParent.getBoundingClientRect();

      offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
      offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
      if (offsetParent === $document[0].documentElement) {
        offsetBCR.top += $window.pageYOffset;
        offsetBCR.left += $window.pageXOffset;
      }
      offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
      offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

      if (includePadding) {
        var offsetParentStyle = $window.getComputedStyle(offsetParent);
        offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
        offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
        offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
        offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
      }

      return {
        top: Math.round(elemBCR.top - offsetBCR.top),
        bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
        left: Math.round(elemBCR.left - offsetBCR.left),
        right: Math.round(offsetBCR.right - elemBCR.right)
      };
    },

    /**
     * Provides an array of placement values parsed from a placement string.
     * Along with the 'auto' indicator, supported placement strings are:
     *   <ul>
     *     <li>top: element on top, horizontally centered on host element.</li>
     *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
     *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
     *     <li>bottom: element on bottom, horizontally centered on host element.</li>
     *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
     *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
     *     <li>left: element on left, vertically centered on host element.</li>
     *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
     *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
     *     <li>right: element on right, vertically centered on host element.</li>
     *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
     *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
     *   </ul>
     * A placement string with an 'auto' indicator is expected to be
     * space separated from the placement, i.e: 'auto bottom-left'  If
     * the primary and secondary placement values do not match 'top,
     * bottom, left, right' then 'top' will be the primary placement and
     * 'center' will be the secondary placement.  If 'auto' is passed, true
     * will be returned as the 3rd value of the array.
     *
     * @param {string} placement - The placement string to parse.
     *
     * @returns {array} An array with the following values
     * <ul>
     *   <li>**[0]**: The primary placement.</li>
     *   <li>**[1]**: The secondary placement.</li>
     *   <li>**[2]**: If auto is passed: true, else undefined.</li>
     * </ul>
     */
    parsePlacement: function parsePlacement(placement) {
      var autoPlace = PLACEMENT_REGEX.auto.test(placement);
      if (autoPlace) {
        placement = placement.replace(PLACEMENT_REGEX.auto, '');
      }

      placement = placement.split('-');

      placement[0] = placement[0] || 'top';
      if (!PLACEMENT_REGEX.primary.test(placement[0])) {
        placement[0] = 'top';
      }

      placement[1] = placement[1] || 'center';
      if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
        placement[1] = 'center';
      }

      if (autoPlace) {
        placement[2] = true;
      } else {
        placement[2] = false;
      }

      return placement;
    },

    /**
     * Provides coordinates for an element to be positioned relative to
     * another element.  Passing 'auto' as part of the placement parameter
     * will enable smart placement - where the element fits. i.e:
     * 'auto left-top' will check to see if there is enough space to the left
     * of the hostElem to fit the targetElem, if not place right (same for secondary
     * top placement).  Available space is calculated using the viewportOffset
     * function.
     *
     * @param {element} hostElem - The element to position against.
     * @param {element} targetElem - The element to position.
     * @param {string=} [placement=top] - The placement for the targetElem,
     *   default is 'top'. 'center' is assumed as secondary placement for
     *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
     *   <ul>
     *     <li>top</li>
     *     <li>top-right</li>
     *     <li>top-left</li>
     *     <li>bottom</li>
     *     <li>bottom-left</li>
     *     <li>bottom-right</li>
     *     <li>left</li>
     *     <li>left-top</li>
     *     <li>left-bottom</li>
     *     <li>right</li>
     *     <li>right-top</li>
     *     <li>right-bottom</li>
     *   </ul>
     * @param {boolean=} [appendToBody=false] - Should the top and left values returned
     *   be calculated from the body element, default is false.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**top**: Value for targetElem top.</li>
     *     <li>**left**: Value for targetElem left.</li>
     *     <li>**placement**: The resolved placement.</li>
     *   </ul>
     */
    positionElements: function positionElements(hostElem, targetElem, placement, appendToBody) {
      hostElem = this.getRawNode(hostElem);
      targetElem = this.getRawNode(targetElem);

      // need to read from prop to support tests.
      var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
      var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

      placement = this.parsePlacement(placement);

      var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
      var targetElemPos = { top: 0, left: 0, placement: '' };

      if (placement[2]) {
        var viewportOffset = this.viewportOffset(hostElem, appendToBody);

        var targetElemStyle = $window.getComputedStyle(targetElem);
        var adjustedSize = {
          width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
          height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
        };

        placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' : placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' : placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' : placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' : placement[0];

        placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' : placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' : placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' : placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' : placement[1];

        if (placement[1] === 'center') {
          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
            var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
            if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
              placement[1] = 'left';
            } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
              placement[1] = 'right';
            }
          } else {
            var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
            if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
              placement[1] = 'top';
            } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
              placement[1] = 'bottom';
            }
          }
        }
      }

      switch (placement[0]) {
        case 'top':
          targetElemPos.top = hostElemPos.top - targetHeight;
          break;
        case 'bottom':
          targetElemPos.top = hostElemPos.top + hostElemPos.height;
          break;
        case 'left':
          targetElemPos.left = hostElemPos.left - targetWidth;
          break;
        case 'right':
          targetElemPos.left = hostElemPos.left + hostElemPos.width;
          break;
      }

      switch (placement[1]) {
        case 'top':
          targetElemPos.top = hostElemPos.top;
          break;
        case 'bottom':
          targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
          break;
        case 'left':
          targetElemPos.left = hostElemPos.left;
          break;
        case 'right':
          targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
          break;
        case 'center':
          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
            targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
          } else {
            targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
          }
          break;
      }

      targetElemPos.top = Math.round(targetElemPos.top);
      targetElemPos.left = Math.round(targetElemPos.left);
      targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

      return targetElemPos;
    },

    /**
     * Provides a way to adjust the top positioning after first
     * render to correctly align element to top after content
     * rendering causes resized element height
     *
     * @param {array} placementClasses - The array of strings of classes
     * element should have.
     * @param {object} containerPosition - The object with container
     * position information
     * @param {number} initialHeight - The initial height for the elem.
     * @param {number} currentHeight - The current height for the elem.
     */
    adjustTop: function adjustTop(placementClasses, containerPosition, initialHeight, currentHeight) {
      if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
        return {
          top: containerPosition.top - currentHeight + 'px'
        };
      }
    },

    /**
     * Provides a way for positioning tooltip & dropdown
     * arrows when using placement options beyond the standard
     * left, right, top, or bottom.
     *
     * @param {element} elem - The tooltip/dropdown element.
     * @param {string} placement - The placement for the elem.
     */
    positionArrow: function positionArrow(elem, placement) {
      elem = this.getRawNode(elem);

      var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
      if (!innerElem) {
        return;
      }

      var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

      var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
      if (!arrowElem) {
        return;
      }

      var arrowCss = {
        top: '',
        bottom: '',
        left: '',
        right: ''
      };

      placement = this.parsePlacement(placement);
      if (placement[1] === 'center') {
        // no adjustment necessary - just reset styles
        angular.element(arrowElem).css(arrowCss);
        return;
      }

      var borderProp = 'border-' + placement[0] + '-width';
      var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

      var borderRadiusProp = 'border-';
      if (PLACEMENT_REGEX.vertical.test(placement[0])) {
        borderRadiusProp += placement[0] + '-' + placement[1];
      } else {
        borderRadiusProp += placement[1] + '-' + placement[0];
      }
      borderRadiusProp += '-radius';
      var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

      switch (placement[0]) {
        case 'top':
          arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'bottom':
          arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'left':
          arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'right':
          arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
          break;
      }

      arrowCss[placement[1]] = borderRadius;

      angular.element(arrowElem).css(arrowCss);
    }
  };
}]);

angular.module('ui.bootstrap.buttons', []).constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('UibButtonsController', ['uibButtonConfig', function (buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}]).directive('uibBtnRadio', ['$parse', function ($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function link(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({ display: 'none' });

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function () {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function (uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}]).directive('uibBtnCheckbox', function () {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function link(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];

      element.find('input').css({ display: 'none' });

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function () {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', []).controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function ($scope, $element, $interval, $timeout, $animate) {
  var self = this,
      slides = self.slides = $scope.slides = [],
      SLIDE_DIRECTION = 'uib-slideDirection',
      currentIndex = $scope.active,
      currentInterval,
      isPlaying;

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function (slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function (a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function () {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function () {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function () {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function (slide) {
    var index = findSlideIndex(slide);

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function (nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex && !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function (slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function (slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function () {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function () {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function () {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function () {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function () {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function (noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function (index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, { direction: direction });
    angular.extend(slides[currentIndex].slide || {}, { direction: direction });
    if ($animate.enabled($element) && !$scope.$currentTransition && slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function (element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}]).directive('uibCarousel', function () {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function templateUrl(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
}).directive('uibSlide', ['$animate', function ($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function templateUrl(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function link(scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function () {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function (active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}]).animation('.item', ['$animateCss', function ($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function beforeAddClass(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);

        return function () {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function beforeRemoveClass(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);

        return function () {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position']
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
).provider('$uibResolve', function () {
  var resolve = this;
  this.resolver = null;

  this.setResolver = function (resolver) {
    this.resolver = resolver;
  };

  this.$get = ['$injector', '$q', function ($injector, $q) {
    var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
    return {
      resolve: function resolve(invocables, locals, parent, self) {
        if (resolver) {
          return resolver.resolve(invocables, locals, parent, self);
        }

        var promises = [];

        angular.forEach(invocables, function (value) {
          if (angular.isFunction(value) || angular.isArray(value)) {
            promises.push($q.resolve($injector.invoke(value)));
          } else if (angular.isString(value)) {
            promises.push($q.resolve($injector.get(value)));
          } else {
            promises.push($q.resolve(value));
          }
        });

        return $q.all(promises).then(function (resolves) {
          var resolveObj = {};
          var resolveIter = 0;
          angular.forEach(invocables, function (value, key) {
            resolveObj[key] = resolves[resolveIter++];
          });

          return resolveObj;
        });
      }
    };
  }];
}

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
).directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack', function ($animate, $injector, $modalStack) {
  return {
    restrict: 'A',
    compile: function compile(tElement, tAttrs) {
      tElement.addClass(tAttrs.backdropClass);
      return linkFn;
    }
  };

  function linkFn(scope, element, attrs) {
    if (attrs.modalInClass) {
      $animate.addClass(element, attrs.modalInClass);

      scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
        var done = setIsAsync();
        if (scope.modalOptions.animation) {
          $animate.removeClass(element, attrs.modalInClass).then(done);
        } else {
          done();
        }
      });
    }
  }
}]).directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document', function ($modalStack, $q, $animateCss, $document) {
  return {
    scope: {
      index: '@'
    },
    restrict: 'A',
    transclude: true,
    templateUrl: function templateUrl(tElement, tAttrs) {
      return tAttrs.templateUrl || 'uib/template/modal/window.html';
    },
    link: function link(scope, element, attrs) {
      element.addClass(attrs.windowTopClass || '');
      scope.size = attrs.size;

      scope.close = function (evt) {
        var modal = $modalStack.getTop();
        if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && evt.target === evt.currentTarget) {
          evt.preventDefault();
          evt.stopPropagation();
          $modalStack.dismiss(modal.key, 'backdrop click');
        }
      };

      // moved from template to fix issue #2280
      element.on('click', scope.close);

      // This property is only added to the scope for the purpose of detecting when this directive is rendered.
      // We can detect that by using this property in the template associated with this directive and then use
      // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
      scope.$isRendered = true;

      // Deferred object that will be resolved when this modal is rendered.
      var modalRenderDeferObj = $q.defer();
      // Resolve render promise post-digest
      scope.$$postDigest(function () {
        modalRenderDeferObj.resolve();
      });

      modalRenderDeferObj.promise.then(function () {
        var animationPromise = null;

        if (attrs.modalInClass) {
          animationPromise = $animateCss(element, {
            addClass: attrs.modalInClass
          }).start();

          scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
            var done = setIsAsync();
            $animateCss(element, {
              removeClass: attrs.modalInClass
            }).start().then(done);
          });
        }

        $q.when(animationPromise).then(function () {
          // Notify {@link $modalStack} that modal is rendered.
          var modal = $modalStack.getTop();
          if (modal) {
            $modalStack.modalRendered(modal.key);
          }

          /**
           * If something within the freshly-opened modal already has focus (perhaps via a
           * directive that causes focus) then there's no need to try to focus anything.
           */
          if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
            var inputWithAutofocus = element[0].querySelector('[autofocus]');
            /**
             * Auto-focusing of a freshly-opened modal element causes any child elements
             * with the autofocus attribute to lose focus. This is an issue on touch
             * based devices which will show and then hide the onscreen keyboard.
             * Attempts to refocus the autofocus element via JavaScript will not reopen
             * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
             * the modal element if the modal does not contain an autofocus element.
             */
            if (inputWithAutofocus) {
              inputWithAutofocus.focus();
            } else {
              element[0].focus();
            }
          }
        });
      });
    }
  };
}]).directive('uibModalAnimationClass', function () {
  return {
    compile: function compile(tElement, tAttrs) {
      if (tAttrs.modalAnimation) {
        tElement.addClass(tAttrs.uibModalAnimationClass);
      }
    }
  };
}).directive('uibModalTransclude', ['$animate', function ($animate) {
  return {
    link: function link(scope, element, attrs, controller, transclude) {
      transclude(scope.$parent, function (clone) {
        element.empty();
        $animate.enter(clone, element);
      });
    }
  };
}]).factory('$uibModalStack', ['$animate', '$animateCss', '$document', '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition', function ($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
  var OPENED_MODAL_CLASS = 'modal-open';

  var backdropDomEl, backdropScope;
  var openedWindows = $$stackedMap.createNew();
  var openedClasses = $$multiMap.createNew();
  var $modalStack = {
    NOW_CLOSING_EVENT: 'modal.stack.now-closing'
  };
  var topModalIndex = 0;
  var previousTopOpenedModal = null;
  var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

  //Modal focus behavior
  var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' + 'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' + 'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
  var scrollbarPadding;
  var SNAKE_CASE_REGEXP = /[A-Z]/g;

  // TODO: extract into common dependency with tooltip
  function snake_case(name) {
    var separator = '-';
    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  function isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  }

  function backdropIndex() {
    var topBackdropIndex = -1;
    var opened = openedWindows.keys();
    for (var i = 0; i < opened.length; i++) {
      if (openedWindows.get(opened[i]).value.backdrop) {
        topBackdropIndex = i;
      }
    }

    // If any backdrop exist, ensure that it's index is always
    // right below the top modal
    if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
      topBackdropIndex = topModalIndex;
    }
    return topBackdropIndex;
  }

  $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
    if (backdropScope) {
      backdropScope.index = newBackdropIndex;
    }
  });

  function removeModalWindow(modalInstance, elementToReceiveFocus) {
    var modalWindow = openedWindows.get(modalInstance).value;
    var appendToElement = modalWindow.appendTo;

    //clean up the stack
    openedWindows.remove(modalInstance);
    previousTopOpenedModal = openedWindows.top();
    if (previousTopOpenedModal) {
      topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
    }

    removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function () {
      var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
      openedClasses.remove(modalBodyClass, modalInstance);
      var areAnyOpen = openedClasses.hasKey(modalBodyClass);
      appendToElement.toggleClass(modalBodyClass, areAnyOpen);
      if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
        if (scrollbarPadding.originalRight) {
          appendToElement.css({ paddingRight: scrollbarPadding.originalRight + 'px' });
        } else {
          appendToElement.css({ paddingRight: '' });
        }
        scrollbarPadding = null;
      }
      toggleTopWindowClass(true);
    }, modalWindow.closedDeferred);
    checkRemoveBackdrop();

    //move focus to specified element if available, or else to body
    if (elementToReceiveFocus && elementToReceiveFocus.focus) {
      elementToReceiveFocus.focus();
    } else if (appendToElement.focus) {
      appendToElement.focus();
    }
  }

  // Add or remove "windowTopClass" from the top window in the stack
  function toggleTopWindowClass(toggleSwitch) {
    var modalWindow;

    if (openedWindows.length() > 0) {
      modalWindow = openedWindows.top().value;
      modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
    }
  }

  function checkRemoveBackdrop() {
    //remove backdrop if no longer needed
    if (backdropDomEl && backdropIndex() === -1) {
      var backdropScopeRef = backdropScope;
      removeAfterAnimate(backdropDomEl, backdropScope, function () {
        backdropScopeRef = null;
      });
      backdropDomEl = undefined;
      backdropScope = undefined;
    }
  }

  function removeAfterAnimate(domEl, scope, done, closedDeferred) {
    var asyncDeferred;
    var asyncPromise = null;
    var setIsAsync = function setIsAsync() {
      if (!asyncDeferred) {
        asyncDeferred = $q.defer();
        asyncPromise = asyncDeferred.promise;
      }

      return function asyncDone() {
        asyncDeferred.resolve();
      };
    };
    scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

    // Note that it's intentional that asyncPromise might be null.
    // That's when setIsAsync has not been called during the
    // NOW_CLOSING_EVENT broadcast.
    return $q.when(asyncPromise).then(afterAnimating);

    function afterAnimating() {
      if (afterAnimating.done) {
        return;
      }
      afterAnimating.done = true;

      $animate.leave(domEl).then(function () {
        if (done) {
          done();
        }

        domEl.remove();
        if (closedDeferred) {
          closedDeferred.resolve();
        }
      });

      scope.$destroy();
    }
  }

  $document.on('keydown', keydownListener);

  $rootScope.$on('$destroy', function () {
    $document.off('keydown', keydownListener);
  });

  function keydownListener(evt) {
    if (evt.isDefaultPrevented()) {
      return evt;
    }

    var modal = openedWindows.top();
    if (modal) {
      switch (evt.which) {
        case 27:
          {
            if (modal.value.keyboard) {
              evt.preventDefault();
              $rootScope.$apply(function () {
                $modalStack.dismiss(modal.key, 'escape key press');
              });
            }
            break;
          }
        case 9:
          {
            var list = $modalStack.loadFocusElementList(modal);
            var focusChanged = false;
            if (evt.shiftKey) {
              if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                focusChanged = $modalStack.focusLastFocusableElement(list);
              }
            } else {
              if ($modalStack.isFocusInLastItem(evt, list)) {
                focusChanged = $modalStack.focusFirstFocusableElement(list);
              }
            }

            if (focusChanged) {
              evt.preventDefault();
              evt.stopPropagation();
            }

            break;
          }
      }
    }
  }

  $modalStack.open = function (modalInstance, modal) {
    var modalOpener = $document[0].activeElement,
        modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

    toggleTopWindowClass(false);

    // Store the current top first, to determine what index we ought to use
    // for the current top modal
    previousTopOpenedModal = openedWindows.top();

    openedWindows.add(modalInstance, {
      deferred: modal.deferred,
      renderDeferred: modal.renderDeferred,
      closedDeferred: modal.closedDeferred,
      modalScope: modal.scope,
      backdrop: modal.backdrop,
      keyboard: modal.keyboard,
      openedClass: modal.openedClass,
      windowTopClass: modal.windowTopClass,
      animation: modal.animation,
      appendTo: modal.appendTo
    });

    openedClasses.put(modalBodyClass, modalInstance);

    var appendToElement = modal.appendTo,
        currBackdropIndex = backdropIndex();

    if (currBackdropIndex >= 0 && !backdropDomEl) {
      backdropScope = $rootScope.$new(true);
      backdropScope.modalOptions = modal;
      backdropScope.index = currBackdropIndex;
      backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
      backdropDomEl.attr({
        'class': 'modal-backdrop',
        'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
        'uib-modal-animation-class': 'fade',
        'modal-in-class': 'in'
      });
      if (modal.backdropClass) {
        backdropDomEl.addClass(modal.backdropClass);
      }

      if (modal.animation) {
        backdropDomEl.attr('modal-animation', 'true');
      }
      $compile(backdropDomEl)(backdropScope);
      $animate.enter(backdropDomEl, appendToElement);
      if ($uibPosition.isScrollable(appendToElement)) {
        scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          appendToElement.css({ paddingRight: scrollbarPadding.right + 'px' });
        }
      }
    }

    var content;
    if (modal.component) {
      content = document.createElement(snake_case(modal.component.name));
      content = angular.element(content);
      content.attr({
        resolve: '$resolve',
        'modal-instance': '$uibModalInstance',
        close: '$close($value)',
        dismiss: '$dismiss($value)'
      });
    } else {
      content = modal.content;
    }

    // Set the top modal index based on the index of the previous top modal
    topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
    var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
    angularDomEl.attr({
      'class': 'modal',
      'template-url': modal.windowTemplateUrl,
      'window-top-class': modal.windowTopClass,
      'role': 'dialog',
      'aria-labelledby': modal.ariaLabelledBy,
      'aria-describedby': modal.ariaDescribedBy,
      'size': modal.size,
      'index': topModalIndex,
      'animate': 'animate',
      'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
      'tabindex': -1,
      'uib-modal-animation-class': 'fade',
      'modal-in-class': 'in'
    }).append(content);
    if (modal.windowClass) {
      angularDomEl.addClass(modal.windowClass);
    }

    if (modal.animation) {
      angularDomEl.attr('modal-animation', 'true');
    }

    appendToElement.addClass(modalBodyClass);
    if (modal.scope) {
      // we need to explicitly add the modal index to the modal scope
      // because it is needed by ngStyle to compute the zIndex property.
      modal.scope.$$topModalIndex = topModalIndex;
    }
    $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

    openedWindows.top().value.modalDomEl = angularDomEl;
    openedWindows.top().value.modalOpener = modalOpener;

    applyAriaHidden(angularDomEl);

    function applyAriaHidden(el) {
      if (!el || el[0].tagName === 'BODY') {
        return;
      }

      getSiblings(el).forEach(function (sibling) {
        var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
            ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

        if (!ariaHiddenCount) {
          ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
        }

        sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
        sibling.setAttribute('aria-hidden', 'true');
      });

      return applyAriaHidden(el.parent());

      function getSiblings(el) {
        var children = el.parent() ? el.parent().children() : [];

        return Array.prototype.filter.call(children, function (child) {
          return child !== el[0];
        });
      }
    }
  };

  function broadcastClosing(modalWindow, resultOrReason, closing) {
    return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
  }

  function unhideBackgroundElements() {
    Array.prototype.forEach.call(document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'), function (hiddenEl) {
      var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
          newHiddenCount = ariaHiddenCount - 1;
      hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

      if (!newHiddenCount) {
        hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
        hiddenEl.removeAttribute('aria-hidden');
      }
    });
  }

  $modalStack.close = function (modalInstance, result) {
    var modalWindow = openedWindows.get(modalInstance);
    unhideBackgroundElements();
    if (modalWindow && broadcastClosing(modalWindow, result, true)) {
      modalWindow.value.modalScope.$$uibDestructionScheduled = true;
      modalWindow.value.deferred.resolve(result);
      removeModalWindow(modalInstance, modalWindow.value.modalOpener);
      return true;
    }

    return !modalWindow;
  };

  $modalStack.dismiss = function (modalInstance, reason) {
    var modalWindow = openedWindows.get(modalInstance);
    unhideBackgroundElements();
    if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
      modalWindow.value.modalScope.$$uibDestructionScheduled = true;
      modalWindow.value.deferred.reject(reason);
      removeModalWindow(modalInstance, modalWindow.value.modalOpener);
      return true;
    }
    return !modalWindow;
  };

  $modalStack.dismissAll = function (reason) {
    var topModal = this.getTop();
    while (topModal && this.dismiss(topModal.key, reason)) {
      topModal = this.getTop();
    }
  };

  $modalStack.getTop = function () {
    return openedWindows.top();
  };

  $modalStack.modalRendered = function (modalInstance) {
    var modalWindow = openedWindows.get(modalInstance);
    if (modalWindow) {
      modalWindow.value.renderDeferred.resolve();
    }
  };

  $modalStack.focusFirstFocusableElement = function (list) {
    if (list.length > 0) {
      list[0].focus();
      return true;
    }
    return false;
  };

  $modalStack.focusLastFocusableElement = function (list) {
    if (list.length > 0) {
      list[list.length - 1].focus();
      return true;
    }
    return false;
  };

  $modalStack.isModalFocused = function (evt, modalWindow) {
    if (evt && modalWindow) {
      var modalDomEl = modalWindow.value.modalDomEl;
      if (modalDomEl && modalDomEl.length) {
        return (evt.target || evt.srcElement) === modalDomEl[0];
      }
    }
    return false;
  };

  $modalStack.isFocusInFirstItem = function (evt, list) {
    if (list.length > 0) {
      return (evt.target || evt.srcElement) === list[0];
    }
    return false;
  };

  $modalStack.isFocusInLastItem = function (evt, list) {
    if (list.length > 0) {
      return (evt.target || evt.srcElement) === list[list.length - 1];
    }
    return false;
  };

  $modalStack.loadFocusElementList = function (modalWindow) {
    if (modalWindow) {
      var modalDomE1 = modalWindow.value.modalDomEl;
      if (modalDomE1 && modalDomE1.length) {
        var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
        return elements ? Array.prototype.filter.call(elements, function (element) {
          return isVisible(element);
        }) : elements;
      }
    }
  };

  return $modalStack;
}]).provider('$uibModal', function () {
  var $modalProvider = {
    options: {
      animation: true,
      backdrop: true, //can also be false or 'static'
      keyboard: true
    },
    $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack', function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
      var $modal = {};

      function getTemplatePromise(options) {
        return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl);
      }

      var promiseChain = null;
      $modal.getPromiseChain = function () {
        return promiseChain;
      };

      $modal.open = function (modalOptions) {
        var modalResultDeferred = $q.defer();
        var modalOpenedDeferred = $q.defer();
        var modalClosedDeferred = $q.defer();
        var modalRenderDeferred = $q.defer();

        //prepare an instance of a modal to be injected into controllers and returned to a caller
        var modalInstance = {
          result: modalResultDeferred.promise,
          opened: modalOpenedDeferred.promise,
          closed: modalClosedDeferred.promise,
          rendered: modalRenderDeferred.promise,
          close: function close(result) {
            return $modalStack.close(modalInstance, result);
          },
          dismiss: function dismiss(reason) {
            return $modalStack.dismiss(modalInstance, reason);
          }
        };

        //merge and clean up options
        modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
        modalOptions.resolve = modalOptions.resolve || {};
        modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

        if (!modalOptions.appendTo.length) {
          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
        }

        //verify options
        if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
          throw new Error('One of component or template or templateUrl options is required.');
        }

        var templateAndResolvePromise;
        if (modalOptions.component) {
          templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
        } else {
          templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
        }

        function resolveWithTemplate() {
          return templateAndResolvePromise;
        }

        // Wait for the resolution of the existing promise chain.
        // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
        // Then add to $modalStack and resolve opened.
        // Finally clean up the chain variable if no subsequent modal has overwritten it.
        var samePromise;
        samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function resolveSuccess(tplAndVars) {
          var providedScope = modalOptions.scope || $rootScope;

          var modalScope = providedScope.$new();
          modalScope.$close = modalInstance.close;
          modalScope.$dismiss = modalInstance.dismiss;

          modalScope.$on('$destroy', function () {
            if (!modalScope.$$uibDestructionScheduled) {
              modalScope.$dismiss('$uibUnscheduledDestruction');
            }
          });

          var modal = {
            scope: modalScope,
            deferred: modalResultDeferred,
            renderDeferred: modalRenderDeferred,
            closedDeferred: modalClosedDeferred,
            animation: modalOptions.animation,
            backdrop: modalOptions.backdrop,
            keyboard: modalOptions.keyboard,
            backdropClass: modalOptions.backdropClass,
            windowTopClass: modalOptions.windowTopClass,
            windowClass: modalOptions.windowClass,
            windowTemplateUrl: modalOptions.windowTemplateUrl,
            ariaLabelledBy: modalOptions.ariaLabelledBy,
            ariaDescribedBy: modalOptions.ariaDescribedBy,
            size: modalOptions.size,
            openedClass: modalOptions.openedClass,
            appendTo: modalOptions.appendTo
          };

          var component = {};
          var ctrlInstance,
              ctrlInstantiate,
              ctrlLocals = {};

          if (modalOptions.component) {
            constructLocals(component, false, true, false);
            component.name = modalOptions.component;
            modal.component = component;
          } else if (modalOptions.controller) {
            constructLocals(ctrlLocals, true, false, true);

            // the third param will make the controller instantiate later,private api
            // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
            ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
            if (modalOptions.controllerAs && modalOptions.bindToController) {
              ctrlInstance = ctrlInstantiate.instance;
              ctrlInstance.$close = modalScope.$close;
              ctrlInstance.$dismiss = modalScope.$dismiss;
              angular.extend(ctrlInstance, {
                $resolve: ctrlLocals.$scope.$resolve
              }, providedScope);
            }

            ctrlInstance = ctrlInstantiate();

            if (angular.isFunction(ctrlInstance.$onInit)) {
              ctrlInstance.$onInit();
            }
          }

          if (!modalOptions.component) {
            modal.content = tplAndVars[0];
          }

          $modalStack.open(modalInstance, modal);
          modalOpenedDeferred.resolve(true);

          function constructLocals(obj, template, instanceOnScope, injectable) {
            obj.$scope = modalScope;
            obj.$scope.$resolve = {};
            if (instanceOnScope) {
              obj.$scope.$uibModalInstance = modalInstance;
            } else {
              obj.$uibModalInstance = modalInstance;
            }

            var resolves = template ? tplAndVars[1] : tplAndVars;
            angular.forEach(resolves, function (value, key) {
              if (injectable) {
                obj[key] = value;
              }

              obj.$scope.$resolve[key] = value;
            });
          }
        }, function resolveError(reason) {
          modalOpenedDeferred.reject(reason);
          modalResultDeferred.reject(reason);
        })['finally'](function () {
          if (promiseChain === samePromise) {
            promiseChain = null;
          }
        });

        return modalInstance;
      };

      return $modal;
    }]
  };

  return $modalProvider;
});

angular.module('ui.bootstrap.stackedMap', []
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
).factory('$$stackedMap', function () {
  return {
    createNew: function createNew() {
      var stack = [];

      return {
        add: function add(key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function get(key) {
          for (var i = 0; i < stack.length; i++) {
            if (key === stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function keys() {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function top() {
          return stack[stack.length - 1];
        },
        remove: function remove(key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key === stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function removeTop() {
          return stack.pop();
        },
        length: function length() {
          return stack.length;
        }
      };
    }
  };
});angular.module('ui.bootstrap.position').run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>');angular.$$uibPositionCss = true;
});
angular.module('ui.bootstrap.carousel').run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');angular.$$uibCarouselCss = true;
});
"use strict";

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.collapse", "ui.bootstrap.dropdown", "ui.bootstrap.multiMap", "ui.bootstrap.position", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.modal", "ui.bootstrap.stackedMap"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (e, t, n, o) {
  var i = o.has("$animateCss") ? o.get("$animateCss") : null;return { link: function link(o, r, a) {
      function l() {
        v = !!("horizontal" in a), v ? (b = { width: "" }, w = { width: "0" }) : (b = { height: "" }, w = { height: "0" }), o.$eval(a.uibCollapse) || r.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css(b);
      }function s(e) {
        return v ? { width: e.scrollWidth + "px" } : { height: e.scrollHeight + "px" };
      }function u() {
        r.hasClass("collapse") && r.hasClass("in") || t.resolve(f(o)).then(function () {
          r.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), i ? i(r, { addClass: "in", easing: "ease", css: { overflow: "hidden" }, to: s(r[0]) }).start()["finally"](d) : e.addClass(r, "in", { css: { overflow: "hidden" }, to: s(r[0]) }).then(d);
        }, angular.noop);
      }function d() {
        r.removeClass("collapsing").addClass("collapse").css(b), h(o);
      }function c() {
        return r.hasClass("collapse") || r.hasClass("in") ? void t.resolve(m(o)).then(function () {
          r.css(s(r[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), i ? i(r, { removeClass: "in", to: w }).start()["finally"](p) : e.removeClass(r, "in", { to: w }).then(p);
        }, angular.noop) : p();
      }function p() {
        r.css(w), r.removeClass("collapsing").addClass("collapse"), g(o);
      }var f = n(a.expanding),
          h = n(a.expanded),
          m = n(a.collapsing),
          g = n(a.collapsed),
          v = !1,
          b = {},
          w = {};l(), o.$watch(a.uibCollapse, function (e) {
        e ? c() : u();
      });
    } };
}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.multiMap", "ui.bootstrap.position"]).constant("uibDropdownConfig", { appendToOpenClass: "uib-dropdown-open", openClass: "open" }).service("uibDropdownService", ["$document", "$rootScope", "$$multiMap", function (e, t, n) {
  var o = null,
      i = n.createNew();this.isOnlyOpen = function (e, t) {
    var n = i.get(t);if (n) {
      var o = n.reduce(function (t, n) {
        return n.scope === e ? n : t;
      }, {});if (o) return 1 === n.length;
    }return !1;
  }, this.open = function (t, n, a) {
    if (o || e.on("click", r), o && o !== t && (o.isOpen = !1), o = t, a) {
      var l = i.get(a);if (l) {
        var s = l.map(function (e) {
          return e.scope;
        });-1 === s.indexOf(t) && i.put(a, { scope: t });
      } else i.put(a, { scope: t });
    }
  }, this.close = function (t, n, a) {
    if (o === t && (e.off("click", r), e.off("keydown", this.keybindFilter), o = null), a) {
      var l = i.get(a);if (l) {
        var s = l.reduce(function (e, n) {
          return n.scope === t ? n : e;
        }, {});s && i.remove(a, s);
      }
    }
  };var r = function r(e) {
    if (o && o.isOpen && !(e && "disabled" === o.getAutoClose() || e && 3 === e.which)) {
      var n = o.getToggleElement();if (!(e && n && n[0].contains(e.target))) {
        var i = o.getDropdownElement();e && "outsideClick" === o.getAutoClose() && i && i[0].contains(e.target) || (o.focusToggleElement(), o.isOpen = !1, t.$$phase || o.$apply());
      }
    }
  };this.keybindFilter = function (e) {
    if (o) {
      var t = o.getDropdownElement(),
          n = o.getToggleElement(),
          i = t && t[0].contains(e.target),
          a = n && n[0].contains(e.target);27 === e.which ? (e.stopPropagation(), o.focusToggleElement(), r()) : o.isKeynavEnabled() && -1 !== [38, 40].indexOf(e.which) && o.isOpen && (i || a) && (e.preventDefault(), e.stopPropagation(), o.focusDropdownEntry(e.which));
    }
  };
}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (e, t, n, o, i, r, a, l, s, u, d) {
  function c() {
    t.append(h.dropdownMenu);
  }var p,
      f,
      h = this,
      m = e.$new(),
      g = i.appendToOpenClass,
      v = i.openClass,
      b = angular.noop,
      w = n.onToggle ? o(n.onToggle) : angular.noop,
      $ = !1,
      C = s.find("body");t.addClass("dropdown"), this.init = function () {
    n.isOpen && (f = o(n.isOpen), b = f.assign, e.$watch(f, function (e) {
      m.isOpen = !!e;
    })), $ = angular.isDefined(n.keyboardNav);
  }, this.toggle = function (e) {
    return m.isOpen = arguments.length ? !!e : !m.isOpen, angular.isFunction(b) && b(m, m.isOpen), m.isOpen;
  }, this.isOpen = function () {
    return m.isOpen;
  }, m.getToggleElement = function () {
    return h.toggleElement;
  }, m.getAutoClose = function () {
    return n.autoClose || "always";
  }, m.getElement = function () {
    return t;
  }, m.isKeynavEnabled = function () {
    return $;
  }, m.focusDropdownEntry = function (e) {
    var n = h.dropdownMenu ? angular.element(h.dropdownMenu).find("a") : t.find("ul").eq(0).find("a");switch (e) {case 40:
        h.selectedOption = angular.isNumber(h.selectedOption) ? h.selectedOption === n.length - 1 ? h.selectedOption : h.selectedOption + 1 : 0;break;case 38:
        h.selectedOption = angular.isNumber(h.selectedOption) ? 0 === h.selectedOption ? 0 : h.selectedOption - 1 : n.length - 1;}n[h.selectedOption].focus();
  }, m.getDropdownElement = function () {
    return h.dropdownMenu;
  }, m.focusToggleElement = function () {
    h.toggleElement && h.toggleElement[0].focus();
  }, m.$watch("isOpen", function (i, f) {
    var $ = null,
        y = !1;if (angular.isDefined(n.dropdownAppendTo)) {
      var k = o(n.dropdownAppendTo)(m);k && ($ = angular.element(k));
    }if (angular.isDefined(n.dropdownAppendToBody)) {
      var x = o(n.dropdownAppendToBody)(m);x !== !1 && (y = !0);
    }if (y && !$ && ($ = C), $ && h.dropdownMenu && (i ? ($.append(h.dropdownMenu), t.on("$destroy", c)) : (t.off("$destroy", c), c())), $ && h.dropdownMenu) {
      var E,
          M,
          T,
          O = l.positionElements(t, h.dropdownMenu, "bottom-left", !0),
          D = 0;if (E = { top: O.top + "px", display: i ? "block" : "none" }, M = h.dropdownMenu.hasClass("dropdown-menu-right"), M ? (E.left = "auto", T = l.scrollbarPadding($), T.heightOverflow && T.scrollbarWidth && (D = T.scrollbarWidth), E.right = window.innerWidth - D - (O.left + t.prop("offsetWidth")) + "px") : (E.left = O.left + "px", E.right = "auto"), !y) {
        var S = l.offset($);E.top = O.top - S.top + "px", M ? E.right = window.innerWidth - (O.left - S.left + t.prop("offsetWidth")) + "px" : E.left = O.left - S.left + "px";
      }h.dropdownMenu.css(E);
    }var N = $ ? $ : t,
        A = $ ? g : v,
        I = N.hasClass(A),
        R = r.isOnlyOpen(e, $);if (I === !i) {
      var W;W = $ ? R ? "removeClass" : "addClass" : i ? "addClass" : "removeClass", a[W](N, A).then(function () {
        angular.isDefined(i) && i !== f && w(e, { open: !!i });
      });
    }if (i) h.dropdownMenuTemplateUrl ? d(h.dropdownMenuTemplateUrl).then(function (e) {
      p = m.$new(), u(e.trim())(p, function (e) {
        var t = e;h.dropdownMenu.replaceWith(t), h.dropdownMenu = t, s.on("keydown", r.keybindFilter);
      });
    }) : s.on("keydown", r.keybindFilter), m.focusToggleElement(), r.open(m, t, $);else {
      if (r.close(m, t, $), h.dropdownMenuTemplateUrl) {
        p && p.$destroy();var U = angular.element('<ul class="dropdown-menu"></ul>');h.dropdownMenu.replaceWith(U), h.dropdownMenu = U;
      }h.selectedOption = null;
    }angular.isFunction(b) && b(e, i);
  });
}]).directive("uibDropdown", function () {
  return { controller: "UibDropdownController", link: function link(e, t, n, o) {
      o.init();
    } };
}).directive("uibDropdownMenu", function () {
  return { restrict: "A", require: "?^uibDropdown", link: function link(e, t, n, o) {
      if (o && !angular.isDefined(n.dropdownNested)) {
        t.addClass("dropdown-menu");var i = n.templateUrl;i && (o.dropdownMenuTemplateUrl = i), o.dropdownMenu || (o.dropdownMenu = t);
      }
    } };
}).directive("uibDropdownToggle", function () {
  return { require: "?^uibDropdown", link: function link(e, t, n, o) {
      if (o) {
        t.addClass("dropdown-toggle"), o.toggleElement = t;var i = function i(_i) {
          _i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
            o.toggle();
          });
        };t.on("click", i), t.attr({ "aria-haspopup": !0, "aria-expanded": !1 }), e.$watch(o.isOpen, function (e) {
          t.attr("aria-expanded", !!e);
        }), e.$on("$destroy", function () {
          t.off("click", i);
        });
      }
    } };
}), angular.module("ui.bootstrap.multiMap", []).factory("$$multiMap", function () {
  return { createNew: function createNew() {
      var e = {};return { entries: function entries() {
          return Object.keys(e).map(function (t) {
            return { key: t, value: e[t] };
          });
        }, get: function get(t) {
          return e[t];
        }, hasKey: function hasKey(t) {
          return !!e[t];
        }, keys: function keys() {
          return Object.keys(e);
        }, put: function put(t, n) {
          e[t] || (e[t] = []), e[t].push(n);
        }, remove: function remove(t, n) {
          var o = e[t];if (o) {
            var i = o.indexOf(n);-1 !== i && o.splice(i, 1), o.length || delete e[t];
          }
        } };
    } };
}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (e, t) {
  var n,
      o,
      i = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
      r = { auto: /\s?auto?\s?/i, primary: /^(top|bottom|left|right)$/, secondary: /^(top|bottom|left|right|center)$/, vertical: /^(top|bottom)$/ },
      a = /(HTML|BODY)/;return { getRawNode: function getRawNode(e) {
      return e.nodeName ? e : e[0] || e;
    }, parseStyle: function parseStyle(e) {
      return e = parseFloat(e), isFinite(e) ? e : 0;
    }, offsetParent: function offsetParent(n) {
      function o(e) {
        return "static" === (t.getComputedStyle(e).position || "static");
      }n = this.getRawNode(n);for (var i = n.offsetParent || e[0].documentElement; i && i !== e[0].documentElement && o(i);) {
        i = i.offsetParent;
      }return i || e[0].documentElement;
    }, scrollbarWidth: function scrollbarWidth(i) {
      if (i) {
        if (angular.isUndefined(o)) {
          var r = e.find("body");r.addClass("uib-position-body-scrollbar-measure"), o = t.innerWidth - r[0].clientWidth, o = isFinite(o) ? o : 0, r.removeClass("uib-position-body-scrollbar-measure");
        }return o;
      }if (angular.isUndefined(n)) {
        var a = angular.element('<div class="uib-position-scrollbar-measure"></div>');e.find("body").append(a), n = a[0].offsetWidth - a[0].clientWidth, n = isFinite(n) ? n : 0, a.remove();
      }return n;
    }, scrollbarPadding: function scrollbarPadding(e) {
      e = this.getRawNode(e);var n = t.getComputedStyle(e),
          o = this.parseStyle(n.paddingRight),
          i = this.parseStyle(n.paddingBottom),
          r = this.scrollParent(e, !1, !0),
          l = this.scrollbarWidth(a.test(r.tagName));return { scrollbarWidth: l, widthOverflow: r.scrollWidth > r.clientWidth, right: o + l, originalRight: o, heightOverflow: r.scrollHeight > r.clientHeight, bottom: i + l, originalBottom: i };
    }, isScrollable: function isScrollable(e, n) {
      e = this.getRawNode(e);var o = n ? i.hidden : i.normal,
          r = t.getComputedStyle(e);return o.test(r.overflow + r.overflowY + r.overflowX);
    }, scrollParent: function scrollParent(n, o, r) {
      n = this.getRawNode(n);var a = o ? i.hidden : i.normal,
          l = e[0].documentElement,
          s = t.getComputedStyle(n);if (r && a.test(s.overflow + s.overflowY + s.overflowX)) return n;var u = "absolute" === s.position,
          d = n.parentElement || l;if (d === l || "fixed" === s.position) return l;for (; d.parentElement && d !== l;) {
        var c = t.getComputedStyle(d);if (u && "static" !== c.position && (u = !1), !u && a.test(c.overflow + c.overflowY + c.overflowX)) break;d = d.parentElement;
      }return d;
    }, position: function position(n, o) {
      n = this.getRawNode(n);var i = this.offset(n);if (o) {
        var r = t.getComputedStyle(n);i.top -= this.parseStyle(r.marginTop), i.left -= this.parseStyle(r.marginLeft);
      }var a = this.offsetParent(n),
          l = { top: 0, left: 0 };return a !== e[0].documentElement && (l = this.offset(a), l.top += a.clientTop - a.scrollTop, l.left += a.clientLeft - a.scrollLeft), { width: Math.round(angular.isNumber(i.width) ? i.width : n.offsetWidth), height: Math.round(angular.isNumber(i.height) ? i.height : n.offsetHeight), top: Math.round(i.top - l.top), left: Math.round(i.left - l.left) };
    }, offset: function offset(n) {
      n = this.getRawNode(n);var o = n.getBoundingClientRect();return { width: Math.round(angular.isNumber(o.width) ? o.width : n.offsetWidth), height: Math.round(angular.isNumber(o.height) ? o.height : n.offsetHeight), top: Math.round(o.top + (t.pageYOffset || e[0].documentElement.scrollTop)), left: Math.round(o.left + (t.pageXOffset || e[0].documentElement.scrollLeft)) };
    }, viewportOffset: function viewportOffset(n, o, i) {
      n = this.getRawNode(n), i = i !== !1 ? !0 : !1;var r = n.getBoundingClientRect(),
          a = { top: 0, left: 0, bottom: 0, right: 0 },
          l = o ? e[0].documentElement : this.scrollParent(n),
          s = l.getBoundingClientRect();if (a.top = s.top + l.clientTop, a.left = s.left + l.clientLeft, l === e[0].documentElement && (a.top += t.pageYOffset, a.left += t.pageXOffset), a.bottom = a.top + l.clientHeight, a.right = a.left + l.clientWidth, i) {
        var u = t.getComputedStyle(l);a.top += this.parseStyle(u.paddingTop), a.bottom -= this.parseStyle(u.paddingBottom), a.left += this.parseStyle(u.paddingLeft), a.right -= this.parseStyle(u.paddingRight);
      }return { top: Math.round(r.top - a.top), bottom: Math.round(a.bottom - r.bottom), left: Math.round(r.left - a.left), right: Math.round(a.right - r.right) };
    }, parsePlacement: function parsePlacement(e) {
      var t = r.auto.test(e);return t && (e = e.replace(r.auto, "")), e = e.split("-"), e[0] = e[0] || "top", r.primary.test(e[0]) || (e[0] = "top"), e[1] = e[1] || "center", r.secondary.test(e[1]) || (e[1] = "center"), e[2] = t ? !0 : !1, e;
    }, positionElements: function positionElements(e, n, o, i) {
      e = this.getRawNode(e), n = this.getRawNode(n);var a = angular.isDefined(n.offsetWidth) ? n.offsetWidth : n.prop("offsetWidth"),
          l = angular.isDefined(n.offsetHeight) ? n.offsetHeight : n.prop("offsetHeight");o = this.parsePlacement(o);var s = i ? this.offset(e) : this.position(e),
          u = { top: 0, left: 0, placement: "" };if (o[2]) {
        var d = this.viewportOffset(e, i),
            c = t.getComputedStyle(n),
            p = { width: a + Math.round(Math.abs(this.parseStyle(c.marginLeft) + this.parseStyle(c.marginRight))), height: l + Math.round(Math.abs(this.parseStyle(c.marginTop) + this.parseStyle(c.marginBottom))) };if (o[0] = "top" === o[0] && p.height > d.top && p.height <= d.bottom ? "bottom" : "bottom" === o[0] && p.height > d.bottom && p.height <= d.top ? "top" : "left" === o[0] && p.width > d.left && p.width <= d.right ? "right" : "right" === o[0] && p.width > d.right && p.width <= d.left ? "left" : o[0], o[1] = "top" === o[1] && p.height - s.height > d.bottom && p.height - s.height <= d.top ? "bottom" : "bottom" === o[1] && p.height - s.height > d.top && p.height - s.height <= d.bottom ? "top" : "left" === o[1] && p.width - s.width > d.right && p.width - s.width <= d.left ? "right" : "right" === o[1] && p.width - s.width > d.left && p.width - s.width <= d.right ? "left" : o[1], "center" === o[1]) if (r.vertical.test(o[0])) {
          var f = s.width / 2 - a / 2;d.left + f < 0 && p.width - s.width <= d.right ? o[1] = "left" : d.right + f < 0 && p.width - s.width <= d.left && (o[1] = "right");
        } else {
          var h = s.height / 2 - p.height / 2;d.top + h < 0 && p.height - s.height <= d.bottom ? o[1] = "top" : d.bottom + h < 0 && p.height - s.height <= d.top && (o[1] = "bottom");
        }
      }switch (o[0]) {case "top":
          u.top = s.top - l;break;case "bottom":
          u.top = s.top + s.height;break;case "left":
          u.left = s.left - a;break;case "right":
          u.left = s.left + s.width;}switch (o[1]) {case "top":
          u.top = s.top;break;case "bottom":
          u.top = s.top + s.height - l;break;case "left":
          u.left = s.left;break;case "right":
          u.left = s.left + s.width - a;break;case "center":
          r.vertical.test(o[0]) ? u.left = s.left + s.width / 2 - a / 2 : u.top = s.top + s.height / 2 - l / 2;}return u.top = Math.round(u.top), u.left = Math.round(u.left), u.placement = "center" === o[1] ? o[0] : o[0] + "-" + o[1], u;
    }, adjustTop: function adjustTop(e, t, n, o) {
      return -1 !== e.indexOf("top") && n !== o ? { top: t.top - o + "px" } : void 0;
    }, positionArrow: function positionArrow(e, n) {
      e = this.getRawNode(e);var o = e.querySelector(".tooltip-inner, .popover-inner");if (o) {
        var i = angular.element(o).hasClass("tooltip-inner"),
            a = e.querySelector(i ? ".tooltip-arrow" : ".arrow");if (a) {
          var l = { top: "", bottom: "", left: "", right: "" };if (n = this.parsePlacement(n), "center" === n[1]) return void angular.element(a).css(l);var s = "border-" + n[0] + "-width",
              u = t.getComputedStyle(a)[s],
              d = "border-";d += r.vertical.test(n[0]) ? n[0] + "-" + n[1] : n[1] + "-" + n[0], d += "-radius";var c = t.getComputedStyle(i ? o : e)[d];switch (n[0]) {case "top":
              l.bottom = i ? "0" : "-" + u;break;case "bottom":
              l.top = i ? "0" : "-" + u;break;case "left":
              l.right = i ? "0" : "-" + u;break;case "right":
              l.left = i ? "0" : "-" + u;}l[n[1]] = c, angular.element(a).css(l);
        }
      }
    } };
}]), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", { activeClass: "active", toggleEvent: "click" }).controller("UibButtonsController", ["uibButtonConfig", function (e) {
  this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click";
}]).directive("uibBtnRadio", ["$parse", function (e) {
  return { require: ["uibBtnRadio", "ngModel"], controller: "UibButtonsController", controllerAs: "buttons", link: function link(t, n, o, i) {
      var r = i[0],
          a = i[1],
          l = e(o.uibUncheckable);n.find("input").css({ display: "none" }), a.$render = function () {
        n.toggleClass(r.activeClass, angular.equals(a.$modelValue, t.$eval(o.uibBtnRadio)));
      }, n.on(r.toggleEvent, function () {
        if (!o.disabled) {
          var e = n.hasClass(r.activeClass);(!e || angular.isDefined(o.uncheckable)) && t.$apply(function () {
            a.$setViewValue(e ? null : t.$eval(o.uibBtnRadio)), a.$render();
          });
        }
      }), o.uibUncheckable && t.$watch(l, function (e) {
        o.$set("uncheckable", e ? "" : void 0);
      });
    } };
}]).directive("uibBtnCheckbox", function () {
  return { require: ["uibBtnCheckbox", "ngModel"], controller: "UibButtonsController", controllerAs: "button", link: function link(e, t, n, o) {
      function i() {
        return a(n.btnCheckboxTrue, !0);
      }function r() {
        return a(n.btnCheckboxFalse, !1);
      }function a(t, n) {
        return angular.isDefined(t) ? e.$eval(t) : n;
      }var l = o[0],
          s = o[1];t.find("input").css({ display: "none" }), s.$render = function () {
        t.toggleClass(l.activeClass, angular.equals(s.$modelValue, i()));
      }, t.on(l.toggleEvent, function () {
        n.disabled || e.$apply(function () {
          s.$setViewValue(t.hasClass(l.activeClass) ? r() : i()), s.$render();
        });
      });
    } };
}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (e, t, n, o, i) {
  function r(e) {
    for (var t = 0; t < m.length; t++) {
      m[t].slide.active = t === e;
    }
  }function a(n, o, a) {
    if (!b) {
      if (angular.extend(n, { direction: a }), angular.extend(m[v].slide || {}, { direction: a }), i.enabled(t) && !e.$currentTransition && m[o].element && h.slides.length > 1) {
        m[o].element.data(g, n.direction);var l = h.getCurrentIndex();angular.isNumber(l) && m[l].element && m[l].element.data(g, n.direction), e.$currentTransition = !0, i.on("addClass", m[o].element, function (t, n) {
          "close" === n && (e.$currentTransition = null, i.off("addClass", t));
        });
      }e.active = n.index, v = n.index, r(o), d();
    }
  }function l(e) {
    for (var t = 0; t < m.length; t++) {
      if (m[t].slide === e) return t;
    }
  }function s() {
    p && (n.cancel(p), p = null);
  }function u(t) {
    t.length || (e.$currentTransition = null);
  }function d() {
    s();var t = +e.interval;!isNaN(t) && t > 0 && (p = n(c, t));
  }function c() {
    var t = +e.interval;f && !isNaN(t) && t > 0 && m.length ? e.next() : e.pause();
  }var p,
      f,
      h = this,
      m = h.slides = e.slides = [],
      g = "uib-slideDirection",
      v = e.active,
      b = !1;t.addClass("carousel"), h.addSlide = function (t, n) {
    m.push({ slide: t, element: n }), m.sort(function (e, t) {
      return +e.slide.index - +t.slide.index;
    }), (t.index === e.active || 1 === m.length && !angular.isNumber(e.active)) && (e.$currentTransition && (e.$currentTransition = null), v = t.index, e.active = t.index, r(v), h.select(m[l(t)]), 1 === m.length && e.play());
  }, h.getCurrentIndex = function () {
    for (var e = 0; e < m.length; e++) {
      if (m[e].slide.index === v) return e;
    }
  }, h.next = e.next = function () {
    var t = (h.getCurrentIndex() + 1) % m.length;return 0 === t && e.noWrap() ? void e.pause() : h.select(m[t], "next");
  }, h.prev = e.prev = function () {
    var t = h.getCurrentIndex() - 1 < 0 ? m.length - 1 : h.getCurrentIndex() - 1;return e.noWrap() && t === m.length - 1 ? void e.pause() : h.select(m[t], "prev");
  }, h.removeSlide = function (t) {
    var n = l(t);m.splice(n, 1), m.length > 0 && v === n ? n >= m.length ? (v = m.length - 1, e.active = v, r(v), h.select(m[m.length - 1])) : (v = n, e.active = v, r(v), h.select(m[n])) : v > n && (v--, e.active = v), 0 === m.length && (v = null, e.active = null);
  }, h.select = e.select = function (t, n) {
    var o = l(t.slide);void 0 === n && (n = o > h.getCurrentIndex() ? "next" : "prev"), t.slide.index === v || e.$currentTransition || a(t.slide, o, n);
  }, e.indexOfSlide = function (e) {
    return +e.slide.index;
  }, e.isActive = function (t) {
    return e.active === t.slide.index;
  }, e.isPrevDisabled = function () {
    return 0 === e.active && e.noWrap();
  }, e.isNextDisabled = function () {
    return e.active === m.length - 1 && e.noWrap();
  }, e.pause = function () {
    e.noPause || (f = !1, s());
  }, e.play = function () {
    f || (f = !0, d());
  }, t.on("mouseenter", e.pause), t.on("mouseleave", e.play), e.$on("$destroy", function () {
    b = !0, s();
  }), e.$watch("noTransition", function (e) {
    i.enabled(t, !e);
  }), e.$watch("interval", d), e.$watchCollection("slides", u), e.$watch("active", function (e) {
    if (angular.isNumber(e) && v !== e) {
      for (var t = 0; t < m.length; t++) {
        if (m[t].slide.index === e) {
          e = t;break;
        }
      }var n = m[e];n && (r(e), h.select(m[e]), v = e);
    }
  });
}]).directive("uibCarousel", function () {
  return { transclude: !0, controller: "UibCarouselController", controllerAs: "carousel", restrict: "A", templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/carousel/carousel.html";
    }, scope: { active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&" } };
}).directive("uibSlide", ["$animate", function (e) {
  return { require: "^uibCarousel", restrict: "A", transclude: !0, templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/carousel/slide.html";
    }, scope: { actual: "=?", index: "=?" }, link: function link(t, n, o, i) {
      n.addClass("item"), i.addSlide(t, n), t.$on("$destroy", function () {
        i.removeSlide(t);
      }), t.$watch("active", function (t) {
        e[t ? "addClass" : "removeClass"](n, "active");
      });
    } };
}]).animation(".item", ["$animateCss", function (e) {
  function t(e, t, n) {
    e.removeClass(t), n && n();
  }var n = "uib-slideDirection";return { beforeAddClass: function beforeAddClass(o, i, r) {
      if ("active" === i) {
        var a = !1,
            l = o.data(n),
            s = "next" === l ? "left" : "right",
            u = t.bind(this, o, s + " " + l, r);return o.addClass(l), e(o, { addClass: s }).start().done(u), function () {
          a = !0;
        };
      }r();
    }, beforeRemoveClass: function beforeRemoveClass(o, i, r) {
      if ("active" === i) {
        var a = !1,
            l = o.data(n),
            s = "next" === l ? "left" : "right",
            u = t.bind(this, o, s, r);return e(o, { addClass: s }).start().done(u), function () {
          a = !0;
        };
      }r();
    } };
}]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.multiMap", "ui.bootstrap.stackedMap", "ui.bootstrap.position"]).provider("$uibResolve", function () {
  var e = this;this.resolver = null, this.setResolver = function (e) {
    this.resolver = e;
  }, this.$get = ["$injector", "$q", function (t, n) {
    var o = e.resolver ? t.get(e.resolver) : null;return { resolve: function resolve(e, i, r, a) {
        if (o) return o.resolve(e, i, r, a);var l = [];return angular.forEach(e, function (e) {
          l.push(angular.isFunction(e) || angular.isArray(e) ? n.resolve(t.invoke(e)) : angular.isString(e) ? n.resolve(t.get(e)) : n.resolve(e));
        }), n.all(l).then(function (t) {
          var n = {},
              o = 0;return angular.forEach(e, function (e, i) {
            n[i] = t[o++];
          }), n;
        });
      } };
  }];
}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (e, t, n) {
  function o(t, o, i) {
    i.modalInClass && (e.addClass(o, i.modalInClass), t.$on(n.NOW_CLOSING_EVENT, function (n, r) {
      var a = r();t.modalOptions.animation ? e.removeClass(o, i.modalInClass).then(a) : a();
    }));
  }return { restrict: "A", compile: function compile(e, t) {
      return e.addClass(t.backdropClass), o;
    } };
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (e, t, n, o) {
  return { scope: { index: "@" }, restrict: "A", transclude: !0, templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/modal/window.html";
    }, link: function link(i, r, a) {
      r.addClass(a.windowTopClass || ""), i.size = a.size, i.close = function (t) {
        var n = e.getTop();n && n.value.backdrop && "static" !== n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"));
      }, r.on("click", i.close), i.$isRendered = !0;var l = t.defer();i.$$postDigest(function () {
        l.resolve();
      }), l.promise.then(function () {
        var l = null;a.modalInClass && (l = n(r, { addClass: a.modalInClass }).start(), i.$on(e.NOW_CLOSING_EVENT, function (e, t) {
          var o = t();n(r, { removeClass: a.modalInClass }).start().then(o);
        })), t.when(l).then(function () {
          var t = e.getTop();if (t && e.modalRendered(t.key), !o[0].activeElement || !r[0].contains(o[0].activeElement)) {
            var n = r[0].querySelector("[autofocus]");n ? n.focus() : r[0].focus();
          }
        });
      });
    } };
}]).directive("uibModalAnimationClass", function () {
  return { compile: function compile(e, t) {
      t.modalAnimation && e.addClass(t.uibModalAnimationClass);
    } };
}).directive("uibModalTransclude", ["$animate", function (e) {
  return { link: function link(t, n, o, i, r) {
      r(t.$parent, function (t) {
        n.empty(), e.enter(t, n);
      });
    } };
}]).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (e, t, n, o, i, r, a, l, s) {
  function u(e) {
    var t = "-";return e.replace(S, function (e, n) {
      return (n ? t : "") + e.toLowerCase();
    });
  }function d(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }function c() {
    for (var e = -1, t = k.keys(), n = 0; n < t.length; n++) {
      k.get(t[n]).value.backdrop && (e = n);
    }return e > -1 && M > e && (e = M), e;
  }function p(e, t) {
    var n = k.get(e).value,
        o = n.appendTo;k.remove(e), T = k.top(), T && (M = parseInt(T.value.modalDomEl.attr("index"), 10)), m(n.modalDomEl, n.modalScope, function () {
      var t = n.openedClass || y;x.remove(t, e);var i = x.hasKey(t);o.toggleClass(t, i), !i && C && C.heightOverflow && C.scrollbarWidth && (o.css(C.originalRight ? { paddingRight: C.originalRight + "px" } : { paddingRight: "" }), C = null), f(!0);
    }, n.closedDeferred), h(), t && t.focus ? t.focus() : o.focus && o.focus();
  }function f(e) {
    var t;k.length() > 0 && (t = k.top().value, t.modalDomEl.toggleClass(t.windowTopClass || "", e));
  }function h() {
    if (w && -1 === c()) {
      var e = $;m(w, $, function () {
        e = null;
      }), w = void 0, $ = void 0;
    }
  }function m(t, n, o, i) {
    function a() {
      a.done || (a.done = !0, e.leave(t).then(function () {
        o && o(), t.remove(), i && i.resolve();
      }), n.$destroy());
    }var l,
        s = null,
        u = function u() {
      return l || (l = r.defer(), s = l.promise), function () {
        l.resolve();
      };
    };return n.$broadcast(E.NOW_CLOSING_EVENT, u), r.when(s).then(a);
  }function g(e) {
    if (e.isDefaultPrevented()) return e;var t = k.top();if (t) switch (e.which) {case 27:
        t.value.keyboard && (e.preventDefault(), i.$apply(function () {
          E.dismiss(t.key, "escape key press");
        }));break;case 9:
        var n = E.loadFocusElementList(t),
            o = !1;e.shiftKey ? (E.isFocusInFirstItem(e, n) || E.isModalFocused(e, t)) && (o = E.focusLastFocusableElement(n)) : E.isFocusInLastItem(e, n) && (o = E.focusFirstFocusableElement(n)), o && (e.preventDefault(), e.stopPropagation());}
  }function v(e, t, n) {
    return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented;
  }function b() {
    Array.prototype.forEach.call(document.querySelectorAll("[" + O + "]"), function (e) {
      var t = parseInt(e.getAttribute(O), 10),
          n = t - 1;e.setAttribute(O, n), n || (e.removeAttribute(O), e.removeAttribute("aria-hidden"));
    });
  }var w,
      $,
      C,
      y = "modal-open",
      k = l.createNew(),
      x = a.createNew(),
      E = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
      M = 0,
      T = null,
      O = "data-bootstrap-modal-aria-hidden-count",
      D = "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",
      S = /[A-Z]/g;return i.$watch(c, function (e) {
    $ && ($.index = e);
  }), n.on("keydown", g), i.$on("$destroy", function () {
    n.off("keydown", g);
  }), E.open = function (t, r) {
    function a(e) {
      function t(e) {
        var t = e.parent() ? e.parent().children() : [];return Array.prototype.filter.call(t, function (t) {
          return t !== e[0];
        });
      }if (e && "BODY" !== e[0].tagName) return t(e).forEach(function (e) {
        var t = "true" === e.getAttribute("aria-hidden"),
            n = parseInt(e.getAttribute(O), 10);n || (n = t ? 1 : 0), e.setAttribute(O, n + 1), e.setAttribute("aria-hidden", "true");
      }), a(e.parent());
    }var l = n[0].activeElement,
        d = r.openedClass || y;f(!1), T = k.top(), k.add(t, { deferred: r.deferred, renderDeferred: r.renderDeferred, closedDeferred: r.closedDeferred, modalScope: r.scope, backdrop: r.backdrop, keyboard: r.keyboard, openedClass: r.openedClass, windowTopClass: r.windowTopClass, animation: r.animation, appendTo: r.appendTo }), x.put(d, t);var p = r.appendTo,
        h = c();h >= 0 && !w && ($ = i.$new(!0), $.modalOptions = r, $.index = h, w = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), w.attr({ "class": "modal-backdrop", "ng-style": "{'z-index': 1040 + (index && 1 || 0) + index*10}", "uib-modal-animation-class": "fade", "modal-in-class": "in" }), r.backdropClass && w.addClass(r.backdropClass), r.animation && w.attr("modal-animation", "true"), o(w)($), e.enter(w, p), s.isScrollable(p) && (C = s.scrollbarPadding(p), C.heightOverflow && C.scrollbarWidth && p.css({ paddingRight: C.right + "px" })));var m;r.component ? (m = document.createElement(u(r.component.name)), m = angular.element(m), m.attr({ resolve: "$resolve", "modal-instance": "$uibModalInstance", close: "$close($value)", dismiss: "$dismiss($value)" })) : m = r.content, M = T ? parseInt(T.value.modalDomEl.attr("index"), 10) + 1 : 0;var g = angular.element('<div uib-modal-window="modal-window"></div>');g.attr({ "class": "modal", "template-url": r.windowTemplateUrl, "window-top-class": r.windowTopClass, role: "dialog", "aria-labelledby": r.ariaLabelledBy, "aria-describedby": r.ariaDescribedBy, size: r.size, index: M, animate: "animate", "ng-style": "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}", tabindex: -1, "uib-modal-animation-class": "fade", "modal-in-class": "in" }).append(m), r.windowClass && g.addClass(r.windowClass), r.animation && g.attr("modal-animation", "true"), p.addClass(d), r.scope && (r.scope.$$topModalIndex = M), e.enter(o(g)(r.scope), p), k.top().value.modalDomEl = g, k.top().value.modalOpener = l, a(g);
  }, E.close = function (e, t) {
    var n = k.get(e);return b(), n && v(n, t, !0) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.resolve(t), p(e, n.value.modalOpener), !0) : !n;
  }, E.dismiss = function (e, t) {
    var n = k.get(e);return b(), n && v(n, t, !1) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.reject(t), p(e, n.value.modalOpener), !0) : !n;
  }, E.dismissAll = function (e) {
    for (var t = this.getTop(); t && this.dismiss(t.key, e);) {
      t = this.getTop();
    }
  }, E.getTop = function () {
    return k.top();
  }, E.modalRendered = function (e) {
    var t = k.get(e);t && t.value.renderDeferred.resolve();
  }, E.focusFirstFocusableElement = function (e) {
    return e.length > 0 ? (e[0].focus(), !0) : !1;
  }, E.focusLastFocusableElement = function (e) {
    return e.length > 0 ? (e[e.length - 1].focus(), !0) : !1;
  }, E.isModalFocused = function (e, t) {
    if (e && t) {
      var n = t.value.modalDomEl;if (n && n.length) return (e.target || e.srcElement) === n[0];
    }return !1;
  }, E.isFocusInFirstItem = function (e, t) {
    return t.length > 0 ? (e.target || e.srcElement) === t[0] : !1;
  }, E.isFocusInLastItem = function (e, t) {
    return t.length > 0 ? (e.target || e.srcElement) === t[t.length - 1] : !1;
  }, E.loadFocusElementList = function (e) {
    if (e) {
      var t = e.value.modalDomEl;if (t && t.length) {
        var n = t[0].querySelectorAll(D);return n ? Array.prototype.filter.call(n, function (e) {
          return d(e);
        }) : n;
      }
    }
  }, E;
}]).provider("$uibModal", function () {
  var e = { options: { animation: !0, backdrop: !0, keyboard: !0 }, $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (t, n, o, i, r, a, l) {
      function s(e) {
        return e.template ? n.when(e.template) : i(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl);
      }var u = {},
          d = null;return u.getPromiseChain = function () {
        return d;
      }, u.open = function (i) {
        function u() {
          return g;
        }var c = n.defer(),
            p = n.defer(),
            f = n.defer(),
            h = n.defer(),
            m = { result: c.promise, opened: p.promise, closed: f.promise, rendered: h.promise, close: function close(e) {
            return l.close(m, e);
          }, dismiss: function dismiss(e) {
            return l.dismiss(m, e);
          } };if (i = angular.extend({}, e.options, i), i.resolve = i.resolve || {}, i.appendTo = i.appendTo || o.find("body").eq(0), !i.appendTo.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if (!i.component && !i.template && !i.templateUrl) throw new Error("One of component or template or templateUrl options is required.");var g;g = i.component ? n.when(a.resolve(i.resolve, {}, null, null)) : n.all([s(i), a.resolve(i.resolve, {}, null, null)]);var v;return v = d = n.all([d]).then(u, u).then(function (e) {
          function n(t, n, o, i) {
            t.$scope = a, t.$scope.$resolve = {}, o ? t.$scope.$uibModalInstance = m : t.$uibModalInstance = m;var r = n ? e[1] : e;angular.forEach(r, function (e, n) {
              i && (t[n] = e), t.$scope.$resolve[n] = e;
            });
          }var o = i.scope || t,
              a = o.$new();a.$close = m.close, a.$dismiss = m.dismiss, a.$on("$destroy", function () {
            a.$$uibDestructionScheduled || a.$dismiss("$uibUnscheduledDestruction");
          });var s,
              u,
              d = { scope: a, deferred: c, renderDeferred: h, closedDeferred: f, animation: i.animation, backdrop: i.backdrop, keyboard: i.keyboard, backdropClass: i.backdropClass, windowTopClass: i.windowTopClass, windowClass: i.windowClass, windowTemplateUrl: i.windowTemplateUrl, ariaLabelledBy: i.ariaLabelledBy, ariaDescribedBy: i.ariaDescribedBy, size: i.size, openedClass: i.openedClass, appendTo: i.appendTo },
              g = {},
              v = {};i.component ? (n(g, !1, !0, !1), g.name = i.component, d.component = g) : i.controller && (n(v, !0, !1, !0), u = r(i.controller, v, !0, i.controllerAs), i.controllerAs && i.bindToController && (s = u.instance, s.$close = a.$close, s.$dismiss = a.$dismiss, angular.extend(s, { $resolve: v.$scope.$resolve }, o)), s = u(), angular.isFunction(s.$onInit) && s.$onInit()), i.component || (d.content = e[0]), l.open(m, d), p.resolve(!0);
        }, function (e) {
          p.reject(e), c.reject(e);
        })["finally"](function () {
          d === v && (d = null);
        }), m;
      }, u;
    }] };return e;
}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
  return { createNew: function createNew() {
      var e = [];return { add: function add(t, n) {
          e.push({ key: t, value: n });
        }, get: function get(t) {
          for (var n = 0; n < e.length; n++) {
            if (t === e[n].key) return e[n];
          }
        }, keys: function keys() {
          for (var t = [], n = 0; n < e.length; n++) {
            t.push(e[n].key);
          }return t;
        }, top: function top() {
          return e[e.length - 1];
        }, remove: function remove(t) {
          for (var n = -1, o = 0; o < e.length; o++) {
            if (t === e[o].key) {
              n = o;break;
            }
          }return e.splice(n, 1)[0];
        }, removeTop: function removeTop() {
          return e.pop();
        }, length: function length() {
          return e.length;
        } };
    } };
}), angular.module("ui.bootstrap.position").run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0;
}), angular.module("ui.bootstrap.carousel").run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0;
});
"use strict";

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.dropdown", "ui.bootstrap.multiMap", "ui.bootstrap.position", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.modal", "ui.bootstrap.stackedMap"]);
angular.module("ui.bootstrap.tpls", ["uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/modal/window.html"]);
angular.module('ui.bootstrap.collapse', []).directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function ($animate, $q, $parse, $injector) {
  var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
  return {
    link: function link(scope, element, attrs) {
      var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

      init();

      function init() {
        horizontal = !!('horizontal' in attrs);
        if (horizontal) {
          css = {
            width: ''
          };
          cssTo = { width: '0' };
        } else {
          css = {
            height: ''
          };
          cssTo = { height: '0' };
        }
        if (!scope.$eval(attrs.uibCollapse)) {
          element.addClass('in').addClass('collapse').attr('aria-expanded', true).attr('aria-hidden', false).css(css);
        }
      }

      function getScrollFromElement(element) {
        if (horizontal) {
          return { width: element.scrollWidth + 'px' };
        }
        return { height: element.scrollHeight + 'px' };
      }

      function expand() {
        if (element.hasClass('collapse') && element.hasClass('in')) {
          return;
        }

        $q.resolve(expandingExpr(scope)).then(function () {
          element.removeClass('collapse').addClass('collapsing').attr('aria-expanded', true).attr('aria-hidden', false);

          if ($animateCss) {
            $animateCss(element, {
              addClass: 'in',
              easing: 'ease',
              css: {
                overflow: 'hidden'
              },
              to: getScrollFromElement(element[0])
            }).start()['finally'](expandDone);
          } else {
            $animate.addClass(element, 'in', {
              css: {
                overflow: 'hidden'
              },
              to: getScrollFromElement(element[0])
            }).then(expandDone);
          }
        }, angular.noop);
      }

      function expandDone() {
        element.removeClass('collapsing').addClass('collapse').css(css);
        expandedExpr(scope);
      }

      function collapse() {
        if (!element.hasClass('collapse') && !element.hasClass('in')) {
          return collapseDone();
        }

        $q.resolve(collapsingExpr(scope)).then(function () {
          element
          // IMPORTANT: The width must be set before adding "collapsing" class.
          // Otherwise, the browser attempts to animate from width 0 (in
          // collapsing class) to the given width here.
          .css(getScrollFromElement(element[0])
          // initially all panel collapse have the collapse class, this removal
          // prevents the animation from jumping to collapsed state
          ).removeClass('collapse').addClass('collapsing').attr('aria-expanded', false).attr('aria-hidden', true);

          if ($animateCss) {
            $animateCss(element, {
              removeClass: 'in',
              to: cssTo
            }).start()['finally'](collapseDone);
          } else {
            $animate.removeClass(element, 'in', {
              to: cssTo
            }).then(collapseDone);
          }
        }, angular.noop);
      }

      function collapseDone() {
        element.css(cssTo); // Required so that collapse works when animation is disabled
        element.removeClass('collapsing').addClass('collapse');
        collapsedExpr(scope);
      }

      scope.$watch(attrs.uibCollapse, function (shouldCollapse) {
        if (shouldCollapse) {
          collapse();
        } else {
          expand();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position']).constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
}).service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function ($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function (dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function (toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function (dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function (dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function (dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function (toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function closeDropdown(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope || !openScope.isOpen) {
      return;
    }

    if (evt && openScope.getAutoClose() === 'disabled') {
      return;
    }

    if (evt && evt.which === 3) {
      return;
    }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' && dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function (evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}]).controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function ($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
      scope = $scope.$new(),
      // create a child scope so we are not polluting original one
  templateScope,
      appendToOpenClass = dropdownConfig.appendToOpenClass,
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      keynavEnabled = false,
      selectedOption = null,
      body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function () {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function (value) {
        scope.isOpen = !!value;
      });
    }

    keynavEnabled = angular.isDefined($attrs.keyboardNav);
  };

  this.toggle = function (open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function () {
    return scope.isOpen;
  };

  scope.getToggleElement = function () {
    return self.toggleElement;
  };

  scope.getAutoClose = function () {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function () {
    return $element;
  };

  scope.isKeynavEnabled = function () {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function (keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
    angular.element(self.dropdownMenu).find('a') : $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40:
        {
          if (!angular.isNumber(self.selectedOption)) {
            self.selectedOption = 0;
          } else {
            self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1;
          }
          break;
        }
      case 38:
        {
          if (!angular.isNumber(self.selectedOption)) {
            self.selectedOption = elems.length - 1;
          } else {
            self.selectedOption = self.selectedOption === 0 ? 0 : self.selectedOption - 1;
          }
          break;
        }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function () {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function () {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  function removeDropdownMenu() {
    $element.append(self.dropdownMenu);
  }

  scope.$watch('isOpen', function (isOpen, wasOpen) {
    var appendTo = null,
        appendToBody = false;

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    if (angular.isDefined($attrs.dropdownAppendToBody)) {
      var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
      if (appendToBodyValue !== false) {
        appendToBody = true;
      }
    }

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      if (isOpen) {
        appendTo.append(self.dropdownMenu);
        $element.on('$destroy', removeDropdownMenu);
      } else {
        $element.off('$destroy', removeDropdownMenu);
        removeDropdownMenu();
      }
    }

    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
          css,
          rightalign,
          scrollbarPadding,
          scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth - (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth - (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function () {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function (tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function (dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}]).directive('uibDropdown', function () {
  return {
    controller: 'UibDropdownController',
    link: function link(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
}).directive('uibDropdownMenu', function () {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function link(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
}).directive('uibDropdownToggle', function () {
  return {
    require: '?^uibDropdown',
    link: function link(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function toggleDropdown(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function () {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function () {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.multiMap', []
/**
 * A helper, internal data structure that stores all references attached to key
 */
).factory('$$multiMap', function () {
  return {
    createNew: function createNew() {
      var map = {};

      return {
        entries: function entries() {
          return Object.keys(map).map(function (key) {
            return {
              key: key,
              value: map[key]
            };
          });
        },
        get: function get(key) {
          return map[key];
        },
        hasKey: function hasKey(key) {
          return !!map[key];
        },
        keys: function keys() {
          return Object.keys(map);
        },
        put: function put(key, value) {
          if (!map[key]) {
            map[key] = [];
          }

          map[key].push(value);
        },
        remove: function remove(key, value) {
          var values = map[key];

          if (!values) {
            return;
          }

          var idx = values.indexOf(value);

          if (idx !== -1) {
            values.splice(idx, 1);
          }

          if (!values.length) {
            delete map[key];
          }
        }
      };
    }
  };
});

angular.module('ui.bootstrap.position', []

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
).factory('$uibPosition', ['$document', '$window', function ($document, $window) {
  /**
   * Used by scrollbarWidth() function to cache scrollbar's width.
   * Do not access this variable directly, use scrollbarWidth() instead.
   */
  var SCROLLBAR_WIDTH;
  /**
   * scrollbar on body and html element in IE and Edge overlay
   * content and should be considered 0 width.
   */
  var BODY_SCROLLBAR_WIDTH;
  var OVERFLOW_REGEX = {
    normal: /(auto|scroll)/,
    hidden: /(auto|scroll|hidden)/
  };
  var PLACEMENT_REGEX = {
    auto: /\s?auto?\s?/i,
    primary: /^(top|bottom|left|right)$/,
    secondary: /^(top|bottom|left|right|center)$/,
    vertical: /^(top|bottom)$/
  };
  var BODY_REGEX = /(HTML|BODY)/;

  return {

    /**
     * Provides a raw DOM element from a jQuery/jQLite element.
     *
     * @param {element} elem - The element to convert.
     *
     * @returns {element} A HTML element.
     */
    getRawNode: function getRawNode(elem) {
      return elem.nodeName ? elem : elem[0] || elem;
    },

    /**
     * Provides a parsed number for a style property.  Strips
     * units and casts invalid numbers to 0.
     *
     * @param {string} value - The style value to parse.
     *
     * @returns {number} A valid number.
     */
    parseStyle: function parseStyle(value) {
      value = parseFloat(value);
      return isFinite(value) ? value : 0;
    },

    /**
     * Provides the closest positioned ancestor.
     *
     * @param {element} element - The element to get the offest parent for.
     *
     * @returns {element} The closest positioned ancestor.
     */
    offsetParent: function offsetParent(elem) {
      elem = this.getRawNode(elem);

      var offsetParent = elem.offsetParent || $document[0].documentElement;

      function isStaticPositioned(el) {
        return ($window.getComputedStyle(el).position || 'static') === 'static';
      }

      while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }

      return offsetParent || $document[0].documentElement;
    },

    /**
     * Provides the scrollbar width, concept from TWBS measureScrollbar()
     * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
     * In IE and Edge, scollbar on body and html element overlay and should
     * return a width of 0.
     *
     * @returns {number} The width of the browser scollbar.
     */
    scrollbarWidth: function scrollbarWidth(isBody) {
      if (isBody) {
        if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
          var bodyElem = $document.find('body');
          bodyElem.addClass('uib-position-body-scrollbar-measure');
          BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
          BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
          bodyElem.removeClass('uib-position-body-scrollbar-measure');
        }
        return BODY_SCROLLBAR_WIDTH;
      }

      if (angular.isUndefined(SCROLLBAR_WIDTH)) {
        var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
        $document.find('body').append(scrollElem);
        SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
        SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
        scrollElem.remove();
      }

      return SCROLLBAR_WIDTH;
    },

    /**
     * Provides the padding required on an element to replace the scrollbar.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**scrollbarWidth**: the width of the scrollbar</li>
     *     <li>**widthOverflow**: whether the the width is overflowing</li>
     *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
     *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
     *     <li>**heightOverflow**: whether the the height is overflowing</li>
     *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
     *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
     *   </ul>
     */
    scrollbarPadding: function scrollbarPadding(elem) {
      elem = this.getRawNode(elem);

      var elemStyle = $window.getComputedStyle(elem);
      var paddingRight = this.parseStyle(elemStyle.paddingRight);
      var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
      var scrollParent = this.scrollParent(elem, false, true);
      var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

      return {
        scrollbarWidth: scrollbarWidth,
        widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
        right: paddingRight + scrollbarWidth,
        originalRight: paddingRight,
        heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
        bottom: paddingBottom + scrollbarWidth,
        originalBottom: paddingBottom
      };
    },

    /**
     * Checks to see if the element is scrollable.
     *
     * @param {element} elem - The element to check.
     * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
     *   default is false.
     *
     * @returns {boolean} Whether the element is scrollable.
     */
    isScrollable: function isScrollable(elem, includeHidden) {
      elem = this.getRawNode(elem);

      var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
      var elemStyle = $window.getComputedStyle(elem);
      return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
    },

    /**
     * Provides the closest scrollable ancestor.
     * A port of the jQuery UI scrollParent method:
     * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
     *
     * @param {element} elem - The element to find the scroll parent of.
     * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
     *   default is false.
     * @param {boolean=} [includeSelf=false] - Should the element being passed be
     * included in the scrollable llokup.
     *
     * @returns {element} A HTML element.
     */
    scrollParent: function scrollParent(elem, includeHidden, includeSelf) {
      elem = this.getRawNode(elem);

      var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
      var documentEl = $document[0].documentElement;
      var elemStyle = $window.getComputedStyle(elem);
      if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
        return elem;
      }
      var excludeStatic = elemStyle.position === 'absolute';
      var scrollParent = elem.parentElement || documentEl;

      if (scrollParent === documentEl || elemStyle.position === 'fixed') {
        return documentEl;
      }

      while (scrollParent.parentElement && scrollParent !== documentEl) {
        var spStyle = $window.getComputedStyle(scrollParent);
        if (excludeStatic && spStyle.position !== 'static') {
          excludeStatic = false;
        }

        if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
          break;
        }
        scrollParent = scrollParent.parentElement;
      }

      return scrollParent;
    },

    /**
     * Provides read-only equivalent of jQuery's position function:
     * http://api.jquery.com/position/ - distance to closest positioned
     * ancestor.  Does not account for margins by default like jQuery position.
     *
     * @param {element} elem - The element to caclulate the position on.
     * @param {boolean=} [includeMargins=false] - Should margins be accounted
     * for, default is false.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**width**: the width of the element</li>
     *     <li>**height**: the height of the element</li>
     *     <li>**top**: distance to top edge of offset parent</li>
     *     <li>**left**: distance to left edge of offset parent</li>
     *   </ul>
     */
    position: function position(elem, includeMagins) {
      elem = this.getRawNode(elem);

      var elemOffset = this.offset(elem);
      if (includeMagins) {
        var elemStyle = $window.getComputedStyle(elem);
        elemOffset.top -= this.parseStyle(elemStyle.marginTop);
        elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
      }
      var parent = this.offsetParent(elem);
      var parentOffset = { top: 0, left: 0 };

      if (parent !== $document[0].documentElement) {
        parentOffset = this.offset(parent);
        parentOffset.top += parent.clientTop - parent.scrollTop;
        parentOffset.left += parent.clientLeft - parent.scrollLeft;
      }

      return {
        width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
        height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
        top: Math.round(elemOffset.top - parentOffset.top),
        left: Math.round(elemOffset.left - parentOffset.left)
      };
    },

    /**
     * Provides read-only equivalent of jQuery's offset function:
     * http://api.jquery.com/offset/ - distance to viewport.  Does
     * not account for borders, margins, or padding on the body
     * element.
     *
     * @param {element} elem - The element to calculate the offset on.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**width**: the width of the element</li>
     *     <li>**height**: the height of the element</li>
     *     <li>**top**: distance to top edge of viewport</li>
     *     <li>**right**: distance to bottom edge of viewport</li>
     *   </ul>
     */
    offset: function offset(elem) {
      elem = this.getRawNode(elem);

      var elemBCR = elem.getBoundingClientRect();
      return {
        width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
        height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
        top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
        left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
      };
    },

    /**
     * Provides offset distance to the closest scrollable ancestor
     * or viewport.  Accounts for border and scrollbar width.
     *
     * Right and bottom dimensions represent the distance to the
     * respective edge of the viewport element.  If the element
     * edge extends beyond the viewport, a negative value will be
     * reported.
     *
     * @param {element} elem - The element to get the viewport offset for.
     * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
     * of the first scrollable element, default is false.
     * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
     * be accounted for, default is true.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**top**: distance to the top content edge of viewport element</li>
     *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
     *     <li>**left**: distance to the left content edge of viewport element</li>
     *     <li>**right**: distance to the right content edge of viewport element</li>
     *   </ul>
     */
    viewportOffset: function viewportOffset(elem, useDocument, includePadding) {
      elem = this.getRawNode(elem);
      includePadding = includePadding !== false ? true : false;

      var elemBCR = elem.getBoundingClientRect();
      var offsetBCR = { top: 0, left: 0, bottom: 0, right: 0 };

      var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
      var offsetParentBCR = offsetParent.getBoundingClientRect();

      offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
      offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
      if (offsetParent === $document[0].documentElement) {
        offsetBCR.top += $window.pageYOffset;
        offsetBCR.left += $window.pageXOffset;
      }
      offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
      offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

      if (includePadding) {
        var offsetParentStyle = $window.getComputedStyle(offsetParent);
        offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
        offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
        offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
        offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
      }

      return {
        top: Math.round(elemBCR.top - offsetBCR.top),
        bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
        left: Math.round(elemBCR.left - offsetBCR.left),
        right: Math.round(offsetBCR.right - elemBCR.right)
      };
    },

    /**
     * Provides an array of placement values parsed from a placement string.
     * Along with the 'auto' indicator, supported placement strings are:
     *   <ul>
     *     <li>top: element on top, horizontally centered on host element.</li>
     *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
     *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
     *     <li>bottom: element on bottom, horizontally centered on host element.</li>
     *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
     *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
     *     <li>left: element on left, vertically centered on host element.</li>
     *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
     *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
     *     <li>right: element on right, vertically centered on host element.</li>
     *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
     *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
     *   </ul>
     * A placement string with an 'auto' indicator is expected to be
     * space separated from the placement, i.e: 'auto bottom-left'  If
     * the primary and secondary placement values do not match 'top,
     * bottom, left, right' then 'top' will be the primary placement and
     * 'center' will be the secondary placement.  If 'auto' is passed, true
     * will be returned as the 3rd value of the array.
     *
     * @param {string} placement - The placement string to parse.
     *
     * @returns {array} An array with the following values
     * <ul>
     *   <li>**[0]**: The primary placement.</li>
     *   <li>**[1]**: The secondary placement.</li>
     *   <li>**[2]**: If auto is passed: true, else undefined.</li>
     * </ul>
     */
    parsePlacement: function parsePlacement(placement) {
      var autoPlace = PLACEMENT_REGEX.auto.test(placement);
      if (autoPlace) {
        placement = placement.replace(PLACEMENT_REGEX.auto, '');
      }

      placement = placement.split('-');

      placement[0] = placement[0] || 'top';
      if (!PLACEMENT_REGEX.primary.test(placement[0])) {
        placement[0] = 'top';
      }

      placement[1] = placement[1] || 'center';
      if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
        placement[1] = 'center';
      }

      if (autoPlace) {
        placement[2] = true;
      } else {
        placement[2] = false;
      }

      return placement;
    },

    /**
     * Provides coordinates for an element to be positioned relative to
     * another element.  Passing 'auto' as part of the placement parameter
     * will enable smart placement - where the element fits. i.e:
     * 'auto left-top' will check to see if there is enough space to the left
     * of the hostElem to fit the targetElem, if not place right (same for secondary
     * top placement).  Available space is calculated using the viewportOffset
     * function.
     *
     * @param {element} hostElem - The element to position against.
     * @param {element} targetElem - The element to position.
     * @param {string=} [placement=top] - The placement for the targetElem,
     *   default is 'top'. 'center' is assumed as secondary placement for
     *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
     *   <ul>
     *     <li>top</li>
     *     <li>top-right</li>
     *     <li>top-left</li>
     *     <li>bottom</li>
     *     <li>bottom-left</li>
     *     <li>bottom-right</li>
     *     <li>left</li>
     *     <li>left-top</li>
     *     <li>left-bottom</li>
     *     <li>right</li>
     *     <li>right-top</li>
     *     <li>right-bottom</li>
     *   </ul>
     * @param {boolean=} [appendToBody=false] - Should the top and left values returned
     *   be calculated from the body element, default is false.
     *
     * @returns {object} An object with the following properties:
     *   <ul>
     *     <li>**top**: Value for targetElem top.</li>
     *     <li>**left**: Value for targetElem left.</li>
     *     <li>**placement**: The resolved placement.</li>
     *   </ul>
     */
    positionElements: function positionElements(hostElem, targetElem, placement, appendToBody) {
      hostElem = this.getRawNode(hostElem);
      targetElem = this.getRawNode(targetElem);

      // need to read from prop to support tests.
      var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
      var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

      placement = this.parsePlacement(placement);

      var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
      var targetElemPos = { top: 0, left: 0, placement: '' };

      if (placement[2]) {
        var viewportOffset = this.viewportOffset(hostElem, appendToBody);

        var targetElemStyle = $window.getComputedStyle(targetElem);
        var adjustedSize = {
          width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
          height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
        };

        placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' : placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' : placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' : placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' : placement[0];

        placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' : placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' : placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' : placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' : placement[1];

        if (placement[1] === 'center') {
          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
            var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
            if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
              placement[1] = 'left';
            } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
              placement[1] = 'right';
            }
          } else {
            var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
            if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
              placement[1] = 'top';
            } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
              placement[1] = 'bottom';
            }
          }
        }
      }

      switch (placement[0]) {
        case 'top':
          targetElemPos.top = hostElemPos.top - targetHeight;
          break;
        case 'bottom':
          targetElemPos.top = hostElemPos.top + hostElemPos.height;
          break;
        case 'left':
          targetElemPos.left = hostElemPos.left - targetWidth;
          break;
        case 'right':
          targetElemPos.left = hostElemPos.left + hostElemPos.width;
          break;
      }

      switch (placement[1]) {
        case 'top':
          targetElemPos.top = hostElemPos.top;
          break;
        case 'bottom':
          targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
          break;
        case 'left':
          targetElemPos.left = hostElemPos.left;
          break;
        case 'right':
          targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
          break;
        case 'center':
          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
            targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
          } else {
            targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
          }
          break;
      }

      targetElemPos.top = Math.round(targetElemPos.top);
      targetElemPos.left = Math.round(targetElemPos.left);
      targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

      return targetElemPos;
    },

    /**
     * Provides a way to adjust the top positioning after first
     * render to correctly align element to top after content
     * rendering causes resized element height
     *
     * @param {array} placementClasses - The array of strings of classes
     * element should have.
     * @param {object} containerPosition - The object with container
     * position information
     * @param {number} initialHeight - The initial height for the elem.
     * @param {number} currentHeight - The current height for the elem.
     */
    adjustTop: function adjustTop(placementClasses, containerPosition, initialHeight, currentHeight) {
      if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
        return {
          top: containerPosition.top - currentHeight + 'px'
        };
      }
    },

    /**
     * Provides a way for positioning tooltip & dropdown
     * arrows when using placement options beyond the standard
     * left, right, top, or bottom.
     *
     * @param {element} elem - The tooltip/dropdown element.
     * @param {string} placement - The placement for the elem.
     */
    positionArrow: function positionArrow(elem, placement) {
      elem = this.getRawNode(elem);

      var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
      if (!innerElem) {
        return;
      }

      var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

      var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
      if (!arrowElem) {
        return;
      }

      var arrowCss = {
        top: '',
        bottom: '',
        left: '',
        right: ''
      };

      placement = this.parsePlacement(placement);
      if (placement[1] === 'center') {
        // no adjustment necessary - just reset styles
        angular.element(arrowElem).css(arrowCss);
        return;
      }

      var borderProp = 'border-' + placement[0] + '-width';
      var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

      var borderRadiusProp = 'border-';
      if (PLACEMENT_REGEX.vertical.test(placement[0])) {
        borderRadiusProp += placement[0] + '-' + placement[1];
      } else {
        borderRadiusProp += placement[1] + '-' + placement[0];
      }
      borderRadiusProp += '-radius';
      var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

      switch (placement[0]) {
        case 'top':
          arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'bottom':
          arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'left':
          arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
          break;
        case 'right':
          arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
          break;
      }

      arrowCss[placement[1]] = borderRadius;

      angular.element(arrowElem).css(arrowCss);
    }
  };
}]);

angular.module('ui.bootstrap.buttons', []).constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('UibButtonsController', ['uibButtonConfig', function (buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}]).directive('uibBtnRadio', ['$parse', function ($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function link(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({ display: 'none' });

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function () {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function (uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}]).directive('uibBtnCheckbox', function () {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function link(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0],
          ngModelCtrl = ctrls[1];

      element.find('input').css({ display: 'none' });

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function () {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', []).controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function ($scope, $element, $interval, $timeout, $animate) {
  var self = this,
      slides = self.slides = $scope.slides = [],
      SLIDE_DIRECTION = 'uib-slideDirection',
      currentIndex = $scope.active,
      currentInterval,
      isPlaying;

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function (slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function (a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function () {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function () {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function () {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function (slide) {
    var index = findSlideIndex(slide);

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function (nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex && !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function (slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function (slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function () {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function () {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function () {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function () {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function () {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function (noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function (index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, { direction: direction });
    angular.extend(slides[currentIndex].slide || {}, { direction: direction });
    if ($animate.enabled($element) && !$scope.$currentTransition && slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function (element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}]).directive('uibCarousel', function () {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function templateUrl(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
}).directive('uibSlide', ['$animate', function ($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function templateUrl(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function link(scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function () {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function (active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}]).animation('.item', ['$animateCss', function ($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function beforeAddClass(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);

        return function () {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function beforeRemoveClass(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, { addClass: directionClass }).start().done(removeClassFn);

        return function () {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position']
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
).provider('$uibResolve', function () {
  var resolve = this;
  this.resolver = null;

  this.setResolver = function (resolver) {
    this.resolver = resolver;
  };

  this.$get = ['$injector', '$q', function ($injector, $q) {
    var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
    return {
      resolve: function resolve(invocables, locals, parent, self) {
        if (resolver) {
          return resolver.resolve(invocables, locals, parent, self);
        }

        var promises = [];

        angular.forEach(invocables, function (value) {
          if (angular.isFunction(value) || angular.isArray(value)) {
            promises.push($q.resolve($injector.invoke(value)));
          } else if (angular.isString(value)) {
            promises.push($q.resolve($injector.get(value)));
          } else {
            promises.push($q.resolve(value));
          }
        });

        return $q.all(promises).then(function (resolves) {
          var resolveObj = {};
          var resolveIter = 0;
          angular.forEach(invocables, function (value, key) {
            resolveObj[key] = resolves[resolveIter++];
          });

          return resolveObj;
        });
      }
    };
  }];
}

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
).directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack', function ($animate, $injector, $modalStack) {
  return {
    restrict: 'A',
    compile: function compile(tElement, tAttrs) {
      tElement.addClass(tAttrs.backdropClass);
      return linkFn;
    }
  };

  function linkFn(scope, element, attrs) {
    if (attrs.modalInClass) {
      $animate.addClass(element, attrs.modalInClass);

      scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
        var done = setIsAsync();
        if (scope.modalOptions.animation) {
          $animate.removeClass(element, attrs.modalInClass).then(done);
        } else {
          done();
        }
      });
    }
  }
}]).directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document', function ($modalStack, $q, $animateCss, $document) {
  return {
    scope: {
      index: '@'
    },
    restrict: 'A',
    transclude: true,
    templateUrl: function templateUrl(tElement, tAttrs) {
      return tAttrs.templateUrl || 'uib/template/modal/window.html';
    },
    link: function link(scope, element, attrs) {
      element.addClass(attrs.windowTopClass || '');
      scope.size = attrs.size;

      scope.close = function (evt) {
        var modal = $modalStack.getTop();
        if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && evt.target === evt.currentTarget) {
          evt.preventDefault();
          evt.stopPropagation();
          $modalStack.dismiss(modal.key, 'backdrop click');
        }
      };

      // moved from template to fix issue #2280
      element.on('click', scope.close);

      // This property is only added to the scope for the purpose of detecting when this directive is rendered.
      // We can detect that by using this property in the template associated with this directive and then use
      // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
      scope.$isRendered = true;

      // Deferred object that will be resolved when this modal is rendered.
      var modalRenderDeferObj = $q.defer();
      // Resolve render promise post-digest
      scope.$$postDigest(function () {
        modalRenderDeferObj.resolve();
      });

      modalRenderDeferObj.promise.then(function () {
        var animationPromise = null;

        if (attrs.modalInClass) {
          animationPromise = $animateCss(element, {
            addClass: attrs.modalInClass
          }).start();

          scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
            var done = setIsAsync();
            $animateCss(element, {
              removeClass: attrs.modalInClass
            }).start().then(done);
          });
        }

        $q.when(animationPromise).then(function () {
          // Notify {@link $modalStack} that modal is rendered.
          var modal = $modalStack.getTop();
          if (modal) {
            $modalStack.modalRendered(modal.key);
          }

          /**
           * If something within the freshly-opened modal already has focus (perhaps via a
           * directive that causes focus) then there's no need to try to focus anything.
           */
          if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
            var inputWithAutofocus = element[0].querySelector('[autofocus]');
            /**
             * Auto-focusing of a freshly-opened modal element causes any child elements
             * with the autofocus attribute to lose focus. This is an issue on touch
             * based devices which will show and then hide the onscreen keyboard.
             * Attempts to refocus the autofocus element via JavaScript will not reopen
             * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
             * the modal element if the modal does not contain an autofocus element.
             */
            if (inputWithAutofocus) {
              inputWithAutofocus.focus();
            } else {
              element[0].focus();
            }
          }
        });
      });
    }
  };
}]).directive('uibModalAnimationClass', function () {
  return {
    compile: function compile(tElement, tAttrs) {
      if (tAttrs.modalAnimation) {
        tElement.addClass(tAttrs.uibModalAnimationClass);
      }
    }
  };
}).directive('uibModalTransclude', ['$animate', function ($animate) {
  return {
    link: function link(scope, element, attrs, controller, transclude) {
      transclude(scope.$parent, function (clone) {
        element.empty();
        $animate.enter(clone, element);
      });
    }
  };
}]).factory('$uibModalStack', ['$animate', '$animateCss', '$document', '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition', function ($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
  var OPENED_MODAL_CLASS = 'modal-open';

  var backdropDomEl, backdropScope;
  var openedWindows = $$stackedMap.createNew();
  var openedClasses = $$multiMap.createNew();
  var $modalStack = {
    NOW_CLOSING_EVENT: 'modal.stack.now-closing'
  };
  var topModalIndex = 0;
  var previousTopOpenedModal = null;
  var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

  //Modal focus behavior
  var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' + 'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' + 'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
  var scrollbarPadding;
  var SNAKE_CASE_REGEXP = /[A-Z]/g;

  // TODO: extract into common dependency with tooltip
  function snake_case(name) {
    var separator = '-';
    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  function isVisible(element) {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
  }

  function backdropIndex() {
    var topBackdropIndex = -1;
    var opened = openedWindows.keys();
    for (var i = 0; i < opened.length; i++) {
      if (openedWindows.get(opened[i]).value.backdrop) {
        topBackdropIndex = i;
      }
    }

    // If any backdrop exist, ensure that it's index is always
    // right below the top modal
    if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
      topBackdropIndex = topModalIndex;
    }
    return topBackdropIndex;
  }

  $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
    if (backdropScope) {
      backdropScope.index = newBackdropIndex;
    }
  });

  function removeModalWindow(modalInstance, elementToReceiveFocus) {
    var modalWindow = openedWindows.get(modalInstance).value;
    var appendToElement = modalWindow.appendTo;

    //clean up the stack
    openedWindows.remove(modalInstance);
    previousTopOpenedModal = openedWindows.top();
    if (previousTopOpenedModal) {
      topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
    }

    removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function () {
      var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
      openedClasses.remove(modalBodyClass, modalInstance);
      var areAnyOpen = openedClasses.hasKey(modalBodyClass);
      appendToElement.toggleClass(modalBodyClass, areAnyOpen);
      if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
        if (scrollbarPadding.originalRight) {
          appendToElement.css({ paddingRight: scrollbarPadding.originalRight + 'px' });
        } else {
          appendToElement.css({ paddingRight: '' });
        }
        scrollbarPadding = null;
      }
      toggleTopWindowClass(true);
    }, modalWindow.closedDeferred);
    checkRemoveBackdrop();

    //move focus to specified element if available, or else to body
    if (elementToReceiveFocus && elementToReceiveFocus.focus) {
      elementToReceiveFocus.focus();
    } else if (appendToElement.focus) {
      appendToElement.focus();
    }
  }

  // Add or remove "windowTopClass" from the top window in the stack
  function toggleTopWindowClass(toggleSwitch) {
    var modalWindow;

    if (openedWindows.length() > 0) {
      modalWindow = openedWindows.top().value;
      modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
    }
  }

  function checkRemoveBackdrop() {
    //remove backdrop if no longer needed
    if (backdropDomEl && backdropIndex() === -1) {
      var backdropScopeRef = backdropScope;
      removeAfterAnimate(backdropDomEl, backdropScope, function () {
        backdropScopeRef = null;
      });
      backdropDomEl = undefined;
      backdropScope = undefined;
    }
  }

  function removeAfterAnimate(domEl, scope, done, closedDeferred) {
    var asyncDeferred;
    var asyncPromise = null;
    var setIsAsync = function setIsAsync() {
      if (!asyncDeferred) {
        asyncDeferred = $q.defer();
        asyncPromise = asyncDeferred.promise;
      }

      return function asyncDone() {
        asyncDeferred.resolve();
      };
    };
    scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

    // Note that it's intentional that asyncPromise might be null.
    // That's when setIsAsync has not been called during the
    // NOW_CLOSING_EVENT broadcast.
    return $q.when(asyncPromise).then(afterAnimating);

    function afterAnimating() {
      if (afterAnimating.done) {
        return;
      }
      afterAnimating.done = true;

      $animate.leave(domEl).then(function () {
        if (done) {
          done();
        }

        domEl.remove();
        if (closedDeferred) {
          closedDeferred.resolve();
        }
      });

      scope.$destroy();
    }
  }

  $document.on('keydown', keydownListener);

  $rootScope.$on('$destroy', function () {
    $document.off('keydown', keydownListener);
  });

  function keydownListener(evt) {
    if (evt.isDefaultPrevented()) {
      return evt;
    }

    var modal = openedWindows.top();
    if (modal) {
      switch (evt.which) {
        case 27:
          {
            if (modal.value.keyboard) {
              evt.preventDefault();
              $rootScope.$apply(function () {
                $modalStack.dismiss(modal.key, 'escape key press');
              });
            }
            break;
          }
        case 9:
          {
            var list = $modalStack.loadFocusElementList(modal);
            var focusChanged = false;
            if (evt.shiftKey) {
              if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                focusChanged = $modalStack.focusLastFocusableElement(list);
              }
            } else {
              if ($modalStack.isFocusInLastItem(evt, list)) {
                focusChanged = $modalStack.focusFirstFocusableElement(list);
              }
            }

            if (focusChanged) {
              evt.preventDefault();
              evt.stopPropagation();
            }

            break;
          }
      }
    }
  }

  $modalStack.open = function (modalInstance, modal) {
    var modalOpener = $document[0].activeElement,
        modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

    toggleTopWindowClass(false);

    // Store the current top first, to determine what index we ought to use
    // for the current top modal
    previousTopOpenedModal = openedWindows.top();

    openedWindows.add(modalInstance, {
      deferred: modal.deferred,
      renderDeferred: modal.renderDeferred,
      closedDeferred: modal.closedDeferred,
      modalScope: modal.scope,
      backdrop: modal.backdrop,
      keyboard: modal.keyboard,
      openedClass: modal.openedClass,
      windowTopClass: modal.windowTopClass,
      animation: modal.animation,
      appendTo: modal.appendTo
    });

    openedClasses.put(modalBodyClass, modalInstance);

    var appendToElement = modal.appendTo,
        currBackdropIndex = backdropIndex();

    if (currBackdropIndex >= 0 && !backdropDomEl) {
      backdropScope = $rootScope.$new(true);
      backdropScope.modalOptions = modal;
      backdropScope.index = currBackdropIndex;
      backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
      backdropDomEl.attr({
        'class': 'modal-backdrop',
        'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
        'uib-modal-animation-class': 'fade',
        'modal-in-class': 'in'
      });
      if (modal.backdropClass) {
        backdropDomEl.addClass(modal.backdropClass);
      }

      if (modal.animation) {
        backdropDomEl.attr('modal-animation', 'true');
      }
      $compile(backdropDomEl)(backdropScope);
      $animate.enter(backdropDomEl, appendToElement);
      if ($uibPosition.isScrollable(appendToElement)) {
        scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          appendToElement.css({ paddingRight: scrollbarPadding.right + 'px' });
        }
      }
    }

    var content;
    if (modal.component) {
      content = document.createElement(snake_case(modal.component.name));
      content = angular.element(content);
      content.attr({
        resolve: '$resolve',
        'modal-instance': '$uibModalInstance',
        close: '$close($value)',
        dismiss: '$dismiss($value)'
      });
    } else {
      content = modal.content;
    }

    // Set the top modal index based on the index of the previous top modal
    topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
    var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
    angularDomEl.attr({
      'class': 'modal',
      'template-url': modal.windowTemplateUrl,
      'window-top-class': modal.windowTopClass,
      'role': 'dialog',
      'aria-labelledby': modal.ariaLabelledBy,
      'aria-describedby': modal.ariaDescribedBy,
      'size': modal.size,
      'index': topModalIndex,
      'animate': 'animate',
      'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
      'tabindex': -1,
      'uib-modal-animation-class': 'fade',
      'modal-in-class': 'in'
    }).append(content);
    if (modal.windowClass) {
      angularDomEl.addClass(modal.windowClass);
    }

    if (modal.animation) {
      angularDomEl.attr('modal-animation', 'true');
    }

    appendToElement.addClass(modalBodyClass);
    if (modal.scope) {
      // we need to explicitly add the modal index to the modal scope
      // because it is needed by ngStyle to compute the zIndex property.
      modal.scope.$$topModalIndex = topModalIndex;
    }
    $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

    openedWindows.top().value.modalDomEl = angularDomEl;
    openedWindows.top().value.modalOpener = modalOpener;

    applyAriaHidden(angularDomEl);

    function applyAriaHidden(el) {
      if (!el || el[0].tagName === 'BODY') {
        return;
      }

      getSiblings(el).forEach(function (sibling) {
        var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
            ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

        if (!ariaHiddenCount) {
          ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
        }

        sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
        sibling.setAttribute('aria-hidden', 'true');
      });

      return applyAriaHidden(el.parent());

      function getSiblings(el) {
        var children = el.parent() ? el.parent().children() : [];

        return Array.prototype.filter.call(children, function (child) {
          return child !== el[0];
        });
      }
    }
  };

  function broadcastClosing(modalWindow, resultOrReason, closing) {
    return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
  }

  function unhideBackgroundElements() {
    Array.prototype.forEach.call(document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'), function (hiddenEl) {
      var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
          newHiddenCount = ariaHiddenCount - 1;
      hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

      if (!newHiddenCount) {
        hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
        hiddenEl.removeAttribute('aria-hidden');
      }
    });
  }

  $modalStack.close = function (modalInstance, result) {
    var modalWindow = openedWindows.get(modalInstance);
    unhideBackgroundElements();
    if (modalWindow && broadcastClosing(modalWindow, result, true)) {
      modalWindow.value.modalScope.$$uibDestructionScheduled = true;
      modalWindow.value.deferred.resolve(result);
      removeModalWindow(modalInstance, modalWindow.value.modalOpener);
      return true;
    }

    return !modalWindow;
  };

  $modalStack.dismiss = function (modalInstance, reason) {
    var modalWindow = openedWindows.get(modalInstance);
    unhideBackgroundElements();
    if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
      modalWindow.value.modalScope.$$uibDestructionScheduled = true;
      modalWindow.value.deferred.reject(reason);
      removeModalWindow(modalInstance, modalWindow.value.modalOpener);
      return true;
    }
    return !modalWindow;
  };

  $modalStack.dismissAll = function (reason) {
    var topModal = this.getTop();
    while (topModal && this.dismiss(topModal.key, reason)) {
      topModal = this.getTop();
    }
  };

  $modalStack.getTop = function () {
    return openedWindows.top();
  };

  $modalStack.modalRendered = function (modalInstance) {
    var modalWindow = openedWindows.get(modalInstance);
    if (modalWindow) {
      modalWindow.value.renderDeferred.resolve();
    }
  };

  $modalStack.focusFirstFocusableElement = function (list) {
    if (list.length > 0) {
      list[0].focus();
      return true;
    }
    return false;
  };

  $modalStack.focusLastFocusableElement = function (list) {
    if (list.length > 0) {
      list[list.length - 1].focus();
      return true;
    }
    return false;
  };

  $modalStack.isModalFocused = function (evt, modalWindow) {
    if (evt && modalWindow) {
      var modalDomEl = modalWindow.value.modalDomEl;
      if (modalDomEl && modalDomEl.length) {
        return (evt.target || evt.srcElement) === modalDomEl[0];
      }
    }
    return false;
  };

  $modalStack.isFocusInFirstItem = function (evt, list) {
    if (list.length > 0) {
      return (evt.target || evt.srcElement) === list[0];
    }
    return false;
  };

  $modalStack.isFocusInLastItem = function (evt, list) {
    if (list.length > 0) {
      return (evt.target || evt.srcElement) === list[list.length - 1];
    }
    return false;
  };

  $modalStack.loadFocusElementList = function (modalWindow) {
    if (modalWindow) {
      var modalDomE1 = modalWindow.value.modalDomEl;
      if (modalDomE1 && modalDomE1.length) {
        var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
        return elements ? Array.prototype.filter.call(elements, function (element) {
          return isVisible(element);
        }) : elements;
      }
    }
  };

  return $modalStack;
}]).provider('$uibModal', function () {
  var $modalProvider = {
    options: {
      animation: true,
      backdrop: true, //can also be false or 'static'
      keyboard: true
    },
    $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack', function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
      var $modal = {};

      function getTemplatePromise(options) {
        return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl);
      }

      var promiseChain = null;
      $modal.getPromiseChain = function () {
        return promiseChain;
      };

      $modal.open = function (modalOptions) {
        var modalResultDeferred = $q.defer();
        var modalOpenedDeferred = $q.defer();
        var modalClosedDeferred = $q.defer();
        var modalRenderDeferred = $q.defer();

        //prepare an instance of a modal to be injected into controllers and returned to a caller
        var modalInstance = {
          result: modalResultDeferred.promise,
          opened: modalOpenedDeferred.promise,
          closed: modalClosedDeferred.promise,
          rendered: modalRenderDeferred.promise,
          close: function close(result) {
            return $modalStack.close(modalInstance, result);
          },
          dismiss: function dismiss(reason) {
            return $modalStack.dismiss(modalInstance, reason);
          }
        };

        //merge and clean up options
        modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
        modalOptions.resolve = modalOptions.resolve || {};
        modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

        if (!modalOptions.appendTo.length) {
          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
        }

        //verify options
        if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
          throw new Error('One of component or template or templateUrl options is required.');
        }

        var templateAndResolvePromise;
        if (modalOptions.component) {
          templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
        } else {
          templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
        }

        function resolveWithTemplate() {
          return templateAndResolvePromise;
        }

        // Wait for the resolution of the existing promise chain.
        // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
        // Then add to $modalStack and resolve opened.
        // Finally clean up the chain variable if no subsequent modal has overwritten it.
        var samePromise;
        samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function resolveSuccess(tplAndVars) {
          var providedScope = modalOptions.scope || $rootScope;

          var modalScope = providedScope.$new();
          modalScope.$close = modalInstance.close;
          modalScope.$dismiss = modalInstance.dismiss;

          modalScope.$on('$destroy', function () {
            if (!modalScope.$$uibDestructionScheduled) {
              modalScope.$dismiss('$uibUnscheduledDestruction');
            }
          });

          var modal = {
            scope: modalScope,
            deferred: modalResultDeferred,
            renderDeferred: modalRenderDeferred,
            closedDeferred: modalClosedDeferred,
            animation: modalOptions.animation,
            backdrop: modalOptions.backdrop,
            keyboard: modalOptions.keyboard,
            backdropClass: modalOptions.backdropClass,
            windowTopClass: modalOptions.windowTopClass,
            windowClass: modalOptions.windowClass,
            windowTemplateUrl: modalOptions.windowTemplateUrl,
            ariaLabelledBy: modalOptions.ariaLabelledBy,
            ariaDescribedBy: modalOptions.ariaDescribedBy,
            size: modalOptions.size,
            openedClass: modalOptions.openedClass,
            appendTo: modalOptions.appendTo
          };

          var component = {};
          var ctrlInstance,
              ctrlInstantiate,
              ctrlLocals = {};

          if (modalOptions.component) {
            constructLocals(component, false, true, false);
            component.name = modalOptions.component;
            modal.component = component;
          } else if (modalOptions.controller) {
            constructLocals(ctrlLocals, true, false, true);

            // the third param will make the controller instantiate later,private api
            // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
            ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
            if (modalOptions.controllerAs && modalOptions.bindToController) {
              ctrlInstance = ctrlInstantiate.instance;
              ctrlInstance.$close = modalScope.$close;
              ctrlInstance.$dismiss = modalScope.$dismiss;
              angular.extend(ctrlInstance, {
                $resolve: ctrlLocals.$scope.$resolve
              }, providedScope);
            }

            ctrlInstance = ctrlInstantiate();

            if (angular.isFunction(ctrlInstance.$onInit)) {
              ctrlInstance.$onInit();
            }
          }

          if (!modalOptions.component) {
            modal.content = tplAndVars[0];
          }

          $modalStack.open(modalInstance, modal);
          modalOpenedDeferred.resolve(true);

          function constructLocals(obj, template, instanceOnScope, injectable) {
            obj.$scope = modalScope;
            obj.$scope.$resolve = {};
            if (instanceOnScope) {
              obj.$scope.$uibModalInstance = modalInstance;
            } else {
              obj.$uibModalInstance = modalInstance;
            }

            var resolves = template ? tplAndVars[1] : tplAndVars;
            angular.forEach(resolves, function (value, key) {
              if (injectable) {
                obj[key] = value;
              }

              obj.$scope.$resolve[key] = value;
            });
          }
        }, function resolveError(reason) {
          modalOpenedDeferred.reject(reason);
          modalResultDeferred.reject(reason);
        })['finally'](function () {
          if (promiseChain === samePromise) {
            promiseChain = null;
          }
        });

        return modalInstance;
      };

      return $modal;
    }]
  };

  return $modalProvider;
});

angular.module('ui.bootstrap.stackedMap', []
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
).factory('$$stackedMap', function () {
  return {
    createNew: function createNew() {
      var stack = [];

      return {
        add: function add(key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function get(key) {
          for (var i = 0; i < stack.length; i++) {
            if (key === stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function keys() {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function top() {
          return stack[stack.length - 1];
        },
        remove: function remove(key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key === stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function removeTop() {
          return stack.pop();
        },
        length: function length() {
          return stack.length;
        }
      };
    }
  };
});
angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/carousel/carousel.html", "<div class=\"carousel-inner\" ng-transclude></div>\n" + "<a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-class=\"{ disabled: isPrevDisabled() }\" ng-show=\"slides.length > 1\">\n" + "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" + "  <span class=\"sr-only\">previous</span>\n" + "</a>\n" + "<a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-class=\"{ disabled: isNextDisabled() }\" ng-show=\"slides.length > 1\">\n" + "  <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" + "  <span class=\"sr-only\">next</span>\n" + "</a>\n" + "<ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "  <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" + "    <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" + "  </li>\n" + "</ol>\n" + "");
}]);

angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/carousel/slide.html", "<div class=\"text-center\" ng-transclude></div>\n" + "");
}]);

angular.module("uib/template/modal/window.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/modal/window.html", "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" + "");
}]);
angular.module('ui.bootstrap.position').run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>');angular.$$uibPositionCss = true;
});
angular.module('ui.bootstrap.carousel').run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');angular.$$uibCarouselCss = true;
});
"use strict";

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.dropdown", "ui.bootstrap.multiMap", "ui.bootstrap.position", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.modal", "ui.bootstrap.stackedMap"]), angular.module("ui.bootstrap.tpls", ["uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/modal/window.html"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (e, t, n, o) {
  var i = o.has("$animateCss") ? o.get("$animateCss") : null;return { link: function link(o, r, a) {
      function l() {
        v = !!("horizontal" in a), v ? (b = { width: "" }, w = { width: "0" }) : (b = { height: "" }, w = { height: "0" }), o.$eval(a.uibCollapse) || r.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css(b);
      }function s(e) {
        return v ? { width: e.scrollWidth + "px" } : { height: e.scrollHeight + "px" };
      }function u() {
        r.hasClass("collapse") && r.hasClass("in") || t.resolve(f(o)).then(function () {
          r.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), i ? i(r, { addClass: "in", easing: "ease", css: { overflow: "hidden" }, to: s(r[0]) }).start()["finally"](d) : e.addClass(r, "in", { css: { overflow: "hidden" }, to: s(r[0]) }).then(d);
        }, angular.noop);
      }function d() {
        r.removeClass("collapsing").addClass("collapse").css(b), h(o);
      }function c() {
        return r.hasClass("collapse") || r.hasClass("in") ? void t.resolve(m(o)).then(function () {
          r.css(s(r[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), i ? i(r, { removeClass: "in", to: w }).start()["finally"](p) : e.removeClass(r, "in", { to: w }).then(p);
        }, angular.noop) : p();
      }function p() {
        r.css(w), r.removeClass("collapsing").addClass("collapse"), g(o);
      }var f = n(a.expanding),
          h = n(a.expanded),
          m = n(a.collapsing),
          g = n(a.collapsed),
          v = !1,
          b = {},
          w = {};l(), o.$watch(a.uibCollapse, function (e) {
        e ? c() : u();
      });
    } };
}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.multiMap", "ui.bootstrap.position"]).constant("uibDropdownConfig", { appendToOpenClass: "uib-dropdown-open", openClass: "open" }).service("uibDropdownService", ["$document", "$rootScope", "$$multiMap", function (e, t, n) {
  var o = null,
      i = n.createNew();this.isOnlyOpen = function (e, t) {
    var n = i.get(t);if (n) {
      var o = n.reduce(function (t, n) {
        return n.scope === e ? n : t;
      }, {});if (o) return 1 === n.length;
    }return !1;
  }, this.open = function (t, n, a) {
    if (o || e.on("click", r), o && o !== t && (o.isOpen = !1), o = t, a) {
      var l = i.get(a);if (l) {
        var s = l.map(function (e) {
          return e.scope;
        });-1 === s.indexOf(t) && i.put(a, { scope: t });
      } else i.put(a, { scope: t });
    }
  }, this.close = function (t, n, a) {
    if (o === t && (e.off("click", r), e.off("keydown", this.keybindFilter), o = null), a) {
      var l = i.get(a);if (l) {
        var s = l.reduce(function (e, n) {
          return n.scope === t ? n : e;
        }, {});s && i.remove(a, s);
      }
    }
  };var r = function r(e) {
    if (o && o.isOpen && !(e && "disabled" === o.getAutoClose() || e && 3 === e.which)) {
      var n = o.getToggleElement();if (!(e && n && n[0].contains(e.target))) {
        var i = o.getDropdownElement();e && "outsideClick" === o.getAutoClose() && i && i[0].contains(e.target) || (o.focusToggleElement(), o.isOpen = !1, t.$$phase || o.$apply());
      }
    }
  };this.keybindFilter = function (e) {
    if (o) {
      var t = o.getDropdownElement(),
          n = o.getToggleElement(),
          i = t && t[0].contains(e.target),
          a = n && n[0].contains(e.target);27 === e.which ? (e.stopPropagation(), o.focusToggleElement(), r()) : o.isKeynavEnabled() && -1 !== [38, 40].indexOf(e.which) && o.isOpen && (i || a) && (e.preventDefault(), e.stopPropagation(), o.focusDropdownEntry(e.which));
    }
  };
}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (e, t, n, o, i, r, a, l, s, u, d) {
  function c() {
    t.append(h.dropdownMenu);
  }var p,
      f,
      h = this,
      m = e.$new(),
      g = i.appendToOpenClass,
      v = i.openClass,
      b = angular.noop,
      w = n.onToggle ? o(n.onToggle) : angular.noop,
      $ = !1,
      C = s.find("body");t.addClass("dropdown"), this.init = function () {
    n.isOpen && (f = o(n.isOpen), b = f.assign, e.$watch(f, function (e) {
      m.isOpen = !!e;
    })), $ = angular.isDefined(n.keyboardNav);
  }, this.toggle = function (e) {
    return m.isOpen = arguments.length ? !!e : !m.isOpen, angular.isFunction(b) && b(m, m.isOpen), m.isOpen;
  }, this.isOpen = function () {
    return m.isOpen;
  }, m.getToggleElement = function () {
    return h.toggleElement;
  }, m.getAutoClose = function () {
    return n.autoClose || "always";
  }, m.getElement = function () {
    return t;
  }, m.isKeynavEnabled = function () {
    return $;
  }, m.focusDropdownEntry = function (e) {
    var n = h.dropdownMenu ? angular.element(h.dropdownMenu).find("a") : t.find("ul").eq(0).find("a");switch (e) {case 40:
        h.selectedOption = angular.isNumber(h.selectedOption) ? h.selectedOption === n.length - 1 ? h.selectedOption : h.selectedOption + 1 : 0;break;case 38:
        h.selectedOption = angular.isNumber(h.selectedOption) ? 0 === h.selectedOption ? 0 : h.selectedOption - 1 : n.length - 1;}n[h.selectedOption].focus();
  }, m.getDropdownElement = function () {
    return h.dropdownMenu;
  }, m.focusToggleElement = function () {
    h.toggleElement && h.toggleElement[0].focus();
  }, m.$watch("isOpen", function (i, f) {
    var $ = null,
        y = !1;if (angular.isDefined(n.dropdownAppendTo)) {
      var k = o(n.dropdownAppendTo)(m);k && ($ = angular.element(k));
    }if (angular.isDefined(n.dropdownAppendToBody)) {
      var x = o(n.dropdownAppendToBody)(m);x !== !1 && (y = !0);
    }if (y && !$ && ($ = C), $ && h.dropdownMenu && (i ? ($.append(h.dropdownMenu), t.on("$destroy", c)) : (t.off("$destroy", c), c())), $ && h.dropdownMenu) {
      var E,
          M,
          T,
          O = l.positionElements(t, h.dropdownMenu, "bottom-left", !0),
          D = 0;if (E = { top: O.top + "px", display: i ? "block" : "none" }, M = h.dropdownMenu.hasClass("dropdown-menu-right"), M ? (E.left = "auto", T = l.scrollbarPadding($), T.heightOverflow && T.scrollbarWidth && (D = T.scrollbarWidth), E.right = window.innerWidth - D - (O.left + t.prop("offsetWidth")) + "px") : (E.left = O.left + "px", E.right = "auto"), !y) {
        var S = l.offset($);E.top = O.top - S.top + "px", M ? E.right = window.innerWidth - (O.left - S.left + t.prop("offsetWidth")) + "px" : E.left = O.left - S.left + "px";
      }h.dropdownMenu.css(E);
    }var N = $ ? $ : t,
        A = $ ? g : v,
        I = N.hasClass(A),
        R = r.isOnlyOpen(e, $);if (I === !i) {
      var W;W = $ ? R ? "removeClass" : "addClass" : i ? "addClass" : "removeClass", a[W](N, A).then(function () {
        angular.isDefined(i) && i !== f && w(e, { open: !!i });
      });
    }if (i) h.dropdownMenuTemplateUrl ? d(h.dropdownMenuTemplateUrl).then(function (e) {
      p = m.$new(), u(e.trim())(p, function (e) {
        var t = e;h.dropdownMenu.replaceWith(t), h.dropdownMenu = t, s.on("keydown", r.keybindFilter);
      });
    }) : s.on("keydown", r.keybindFilter), m.focusToggleElement(), r.open(m, t, $);else {
      if (r.close(m, t, $), h.dropdownMenuTemplateUrl) {
        p && p.$destroy();var U = angular.element('<ul class="dropdown-menu"></ul>');h.dropdownMenu.replaceWith(U), h.dropdownMenu = U;
      }h.selectedOption = null;
    }angular.isFunction(b) && b(e, i);
  });
}]).directive("uibDropdown", function () {
  return { controller: "UibDropdownController", link: function link(e, t, n, o) {
      o.init();
    } };
}).directive("uibDropdownMenu", function () {
  return { restrict: "A", require: "?^uibDropdown", link: function link(e, t, n, o) {
      if (o && !angular.isDefined(n.dropdownNested)) {
        t.addClass("dropdown-menu");var i = n.templateUrl;i && (o.dropdownMenuTemplateUrl = i), o.dropdownMenu || (o.dropdownMenu = t);
      }
    } };
}).directive("uibDropdownToggle", function () {
  return { require: "?^uibDropdown", link: function link(e, t, n, o) {
      if (o) {
        t.addClass("dropdown-toggle"), o.toggleElement = t;var i = function i(_i) {
          _i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
            o.toggle();
          });
        };t.on("click", i), t.attr({ "aria-haspopup": !0, "aria-expanded": !1 }), e.$watch(o.isOpen, function (e) {
          t.attr("aria-expanded", !!e);
        }), e.$on("$destroy", function () {
          t.off("click", i);
        });
      }
    } };
}), angular.module("ui.bootstrap.multiMap", []).factory("$$multiMap", function () {
  return { createNew: function createNew() {
      var e = {};return { entries: function entries() {
          return Object.keys(e).map(function (t) {
            return { key: t, value: e[t] };
          });
        }, get: function get(t) {
          return e[t];
        }, hasKey: function hasKey(t) {
          return !!e[t];
        }, keys: function keys() {
          return Object.keys(e);
        }, put: function put(t, n) {
          e[t] || (e[t] = []), e[t].push(n);
        }, remove: function remove(t, n) {
          var o = e[t];if (o) {
            var i = o.indexOf(n);-1 !== i && o.splice(i, 1), o.length || delete e[t];
          }
        } };
    } };
}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (e, t) {
  var n,
      o,
      i = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
      r = { auto: /\s?auto?\s?/i, primary: /^(top|bottom|left|right)$/, secondary: /^(top|bottom|left|right|center)$/, vertical: /^(top|bottom)$/ },
      a = /(HTML|BODY)/;return { getRawNode: function getRawNode(e) {
      return e.nodeName ? e : e[0] || e;
    }, parseStyle: function parseStyle(e) {
      return e = parseFloat(e), isFinite(e) ? e : 0;
    }, offsetParent: function offsetParent(n) {
      function o(e) {
        return "static" === (t.getComputedStyle(e).position || "static");
      }n = this.getRawNode(n);for (var i = n.offsetParent || e[0].documentElement; i && i !== e[0].documentElement && o(i);) {
        i = i.offsetParent;
      }return i || e[0].documentElement;
    }, scrollbarWidth: function scrollbarWidth(i) {
      if (i) {
        if (angular.isUndefined(o)) {
          var r = e.find("body");r.addClass("uib-position-body-scrollbar-measure"), o = t.innerWidth - r[0].clientWidth, o = isFinite(o) ? o : 0, r.removeClass("uib-position-body-scrollbar-measure");
        }return o;
      }if (angular.isUndefined(n)) {
        var a = angular.element('<div class="uib-position-scrollbar-measure"></div>');e.find("body").append(a), n = a[0].offsetWidth - a[0].clientWidth, n = isFinite(n) ? n : 0, a.remove();
      }return n;
    }, scrollbarPadding: function scrollbarPadding(e) {
      e = this.getRawNode(e);var n = t.getComputedStyle(e),
          o = this.parseStyle(n.paddingRight),
          i = this.parseStyle(n.paddingBottom),
          r = this.scrollParent(e, !1, !0),
          l = this.scrollbarWidth(a.test(r.tagName));return { scrollbarWidth: l, widthOverflow: r.scrollWidth > r.clientWidth, right: o + l, originalRight: o, heightOverflow: r.scrollHeight > r.clientHeight, bottom: i + l, originalBottom: i };
    }, isScrollable: function isScrollable(e, n) {
      e = this.getRawNode(e);var o = n ? i.hidden : i.normal,
          r = t.getComputedStyle(e);return o.test(r.overflow + r.overflowY + r.overflowX);
    }, scrollParent: function scrollParent(n, o, r) {
      n = this.getRawNode(n);var a = o ? i.hidden : i.normal,
          l = e[0].documentElement,
          s = t.getComputedStyle(n);if (r && a.test(s.overflow + s.overflowY + s.overflowX)) return n;var u = "absolute" === s.position,
          d = n.parentElement || l;if (d === l || "fixed" === s.position) return l;for (; d.parentElement && d !== l;) {
        var c = t.getComputedStyle(d);if (u && "static" !== c.position && (u = !1), !u && a.test(c.overflow + c.overflowY + c.overflowX)) break;d = d.parentElement;
      }return d;
    }, position: function position(n, o) {
      n = this.getRawNode(n);var i = this.offset(n);if (o) {
        var r = t.getComputedStyle(n);i.top -= this.parseStyle(r.marginTop), i.left -= this.parseStyle(r.marginLeft);
      }var a = this.offsetParent(n),
          l = { top: 0, left: 0 };return a !== e[0].documentElement && (l = this.offset(a), l.top += a.clientTop - a.scrollTop, l.left += a.clientLeft - a.scrollLeft), { width: Math.round(angular.isNumber(i.width) ? i.width : n.offsetWidth), height: Math.round(angular.isNumber(i.height) ? i.height : n.offsetHeight), top: Math.round(i.top - l.top), left: Math.round(i.left - l.left) };
    }, offset: function offset(n) {
      n = this.getRawNode(n);var o = n.getBoundingClientRect();return { width: Math.round(angular.isNumber(o.width) ? o.width : n.offsetWidth), height: Math.round(angular.isNumber(o.height) ? o.height : n.offsetHeight), top: Math.round(o.top + (t.pageYOffset || e[0].documentElement.scrollTop)), left: Math.round(o.left + (t.pageXOffset || e[0].documentElement.scrollLeft)) };
    }, viewportOffset: function viewportOffset(n, o, i) {
      n = this.getRawNode(n), i = i !== !1 ? !0 : !1;var r = n.getBoundingClientRect(),
          a = { top: 0, left: 0, bottom: 0, right: 0 },
          l = o ? e[0].documentElement : this.scrollParent(n),
          s = l.getBoundingClientRect();if (a.top = s.top + l.clientTop, a.left = s.left + l.clientLeft, l === e[0].documentElement && (a.top += t.pageYOffset, a.left += t.pageXOffset), a.bottom = a.top + l.clientHeight, a.right = a.left + l.clientWidth, i) {
        var u = t.getComputedStyle(l);a.top += this.parseStyle(u.paddingTop), a.bottom -= this.parseStyle(u.paddingBottom), a.left += this.parseStyle(u.paddingLeft), a.right -= this.parseStyle(u.paddingRight);
      }return { top: Math.round(r.top - a.top), bottom: Math.round(a.bottom - r.bottom), left: Math.round(r.left - a.left), right: Math.round(a.right - r.right) };
    }, parsePlacement: function parsePlacement(e) {
      var t = r.auto.test(e);return t && (e = e.replace(r.auto, "")), e = e.split("-"), e[0] = e[0] || "top", r.primary.test(e[0]) || (e[0] = "top"), e[1] = e[1] || "center", r.secondary.test(e[1]) || (e[1] = "center"), e[2] = t ? !0 : !1, e;
    }, positionElements: function positionElements(e, n, o, i) {
      e = this.getRawNode(e), n = this.getRawNode(n);var a = angular.isDefined(n.offsetWidth) ? n.offsetWidth : n.prop("offsetWidth"),
          l = angular.isDefined(n.offsetHeight) ? n.offsetHeight : n.prop("offsetHeight");o = this.parsePlacement(o);var s = i ? this.offset(e) : this.position(e),
          u = { top: 0, left: 0, placement: "" };if (o[2]) {
        var d = this.viewportOffset(e, i),
            c = t.getComputedStyle(n),
            p = { width: a + Math.round(Math.abs(this.parseStyle(c.marginLeft) + this.parseStyle(c.marginRight))), height: l + Math.round(Math.abs(this.parseStyle(c.marginTop) + this.parseStyle(c.marginBottom))) };if (o[0] = "top" === o[0] && p.height > d.top && p.height <= d.bottom ? "bottom" : "bottom" === o[0] && p.height > d.bottom && p.height <= d.top ? "top" : "left" === o[0] && p.width > d.left && p.width <= d.right ? "right" : "right" === o[0] && p.width > d.right && p.width <= d.left ? "left" : o[0], o[1] = "top" === o[1] && p.height - s.height > d.bottom && p.height - s.height <= d.top ? "bottom" : "bottom" === o[1] && p.height - s.height > d.top && p.height - s.height <= d.bottom ? "top" : "left" === o[1] && p.width - s.width > d.right && p.width - s.width <= d.left ? "right" : "right" === o[1] && p.width - s.width > d.left && p.width - s.width <= d.right ? "left" : o[1], "center" === o[1]) if (r.vertical.test(o[0])) {
          var f = s.width / 2 - a / 2;d.left + f < 0 && p.width - s.width <= d.right ? o[1] = "left" : d.right + f < 0 && p.width - s.width <= d.left && (o[1] = "right");
        } else {
          var h = s.height / 2 - p.height / 2;d.top + h < 0 && p.height - s.height <= d.bottom ? o[1] = "top" : d.bottom + h < 0 && p.height - s.height <= d.top && (o[1] = "bottom");
        }
      }switch (o[0]) {case "top":
          u.top = s.top - l;break;case "bottom":
          u.top = s.top + s.height;break;case "left":
          u.left = s.left - a;break;case "right":
          u.left = s.left + s.width;}switch (o[1]) {case "top":
          u.top = s.top;break;case "bottom":
          u.top = s.top + s.height - l;break;case "left":
          u.left = s.left;break;case "right":
          u.left = s.left + s.width - a;break;case "center":
          r.vertical.test(o[0]) ? u.left = s.left + s.width / 2 - a / 2 : u.top = s.top + s.height / 2 - l / 2;}return u.top = Math.round(u.top), u.left = Math.round(u.left), u.placement = "center" === o[1] ? o[0] : o[0] + "-" + o[1], u;
    }, adjustTop: function adjustTop(e, t, n, o) {
      return -1 !== e.indexOf("top") && n !== o ? { top: t.top - o + "px" } : void 0;
    }, positionArrow: function positionArrow(e, n) {
      e = this.getRawNode(e);var o = e.querySelector(".tooltip-inner, .popover-inner");if (o) {
        var i = angular.element(o).hasClass("tooltip-inner"),
            a = e.querySelector(i ? ".tooltip-arrow" : ".arrow");if (a) {
          var l = { top: "", bottom: "", left: "", right: "" };if (n = this.parsePlacement(n), "center" === n[1]) return void angular.element(a).css(l);var s = "border-" + n[0] + "-width",
              u = t.getComputedStyle(a)[s],
              d = "border-";d += r.vertical.test(n[0]) ? n[0] + "-" + n[1] : n[1] + "-" + n[0], d += "-radius";var c = t.getComputedStyle(i ? o : e)[d];switch (n[0]) {case "top":
              l.bottom = i ? "0" : "-" + u;break;case "bottom":
              l.top = i ? "0" : "-" + u;break;case "left":
              l.right = i ? "0" : "-" + u;break;case "right":
              l.left = i ? "0" : "-" + u;}l[n[1]] = c, angular.element(a).css(l);
        }
      }
    } };
}]), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", { activeClass: "active", toggleEvent: "click" }).controller("UibButtonsController", ["uibButtonConfig", function (e) {
  this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click";
}]).directive("uibBtnRadio", ["$parse", function (e) {
  return { require: ["uibBtnRadio", "ngModel"], controller: "UibButtonsController", controllerAs: "buttons", link: function link(t, n, o, i) {
      var r = i[0],
          a = i[1],
          l = e(o.uibUncheckable);n.find("input").css({ display: "none" }), a.$render = function () {
        n.toggleClass(r.activeClass, angular.equals(a.$modelValue, t.$eval(o.uibBtnRadio)));
      }, n.on(r.toggleEvent, function () {
        if (!o.disabled) {
          var e = n.hasClass(r.activeClass);(!e || angular.isDefined(o.uncheckable)) && t.$apply(function () {
            a.$setViewValue(e ? null : t.$eval(o.uibBtnRadio)), a.$render();
          });
        }
      }), o.uibUncheckable && t.$watch(l, function (e) {
        o.$set("uncheckable", e ? "" : void 0);
      });
    } };
}]).directive("uibBtnCheckbox", function () {
  return { require: ["uibBtnCheckbox", "ngModel"], controller: "UibButtonsController", controllerAs: "button", link: function link(e, t, n, o) {
      function i() {
        return a(n.btnCheckboxTrue, !0);
      }function r() {
        return a(n.btnCheckboxFalse, !1);
      }function a(t, n) {
        return angular.isDefined(t) ? e.$eval(t) : n;
      }var l = o[0],
          s = o[1];t.find("input").css({ display: "none" }), s.$render = function () {
        t.toggleClass(l.activeClass, angular.equals(s.$modelValue, i()));
      }, t.on(l.toggleEvent, function () {
        n.disabled || e.$apply(function () {
          s.$setViewValue(t.hasClass(l.activeClass) ? r() : i()), s.$render();
        });
      });
    } };
}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (e, t, n, o, i) {
  function r(e) {
    for (var t = 0; t < m.length; t++) {
      m[t].slide.active = t === e;
    }
  }function a(n, o, a) {
    if (!b) {
      if (angular.extend(n, { direction: a }), angular.extend(m[v].slide || {}, { direction: a }), i.enabled(t) && !e.$currentTransition && m[o].element && h.slides.length > 1) {
        m[o].element.data(g, n.direction);var l = h.getCurrentIndex();angular.isNumber(l) && m[l].element && m[l].element.data(g, n.direction), e.$currentTransition = !0, i.on("addClass", m[o].element, function (t, n) {
          "close" === n && (e.$currentTransition = null, i.off("addClass", t));
        });
      }e.active = n.index, v = n.index, r(o), d();
    }
  }function l(e) {
    for (var t = 0; t < m.length; t++) {
      if (m[t].slide === e) return t;
    }
  }function s() {
    p && (n.cancel(p), p = null);
  }function u(t) {
    t.length || (e.$currentTransition = null);
  }function d() {
    s();var t = +e.interval;!isNaN(t) && t > 0 && (p = n(c, t));
  }function c() {
    var t = +e.interval;f && !isNaN(t) && t > 0 && m.length ? e.next() : e.pause();
  }var p,
      f,
      h = this,
      m = h.slides = e.slides = [],
      g = "uib-slideDirection",
      v = e.active,
      b = !1;t.addClass("carousel"), h.addSlide = function (t, n) {
    m.push({ slide: t, element: n }), m.sort(function (e, t) {
      return +e.slide.index - +t.slide.index;
    }), (t.index === e.active || 1 === m.length && !angular.isNumber(e.active)) && (e.$currentTransition && (e.$currentTransition = null), v = t.index, e.active = t.index, r(v), h.select(m[l(t)]), 1 === m.length && e.play());
  }, h.getCurrentIndex = function () {
    for (var e = 0; e < m.length; e++) {
      if (m[e].slide.index === v) return e;
    }
  }, h.next = e.next = function () {
    var t = (h.getCurrentIndex() + 1) % m.length;return 0 === t && e.noWrap() ? void e.pause() : h.select(m[t], "next");
  }, h.prev = e.prev = function () {
    var t = h.getCurrentIndex() - 1 < 0 ? m.length - 1 : h.getCurrentIndex() - 1;return e.noWrap() && t === m.length - 1 ? void e.pause() : h.select(m[t], "prev");
  }, h.removeSlide = function (t) {
    var n = l(t);m.splice(n, 1), m.length > 0 && v === n ? n >= m.length ? (v = m.length - 1, e.active = v, r(v), h.select(m[m.length - 1])) : (v = n, e.active = v, r(v), h.select(m[n])) : v > n && (v--, e.active = v), 0 === m.length && (v = null, e.active = null);
  }, h.select = e.select = function (t, n) {
    var o = l(t.slide);void 0 === n && (n = o > h.getCurrentIndex() ? "next" : "prev"), t.slide.index === v || e.$currentTransition || a(t.slide, o, n);
  }, e.indexOfSlide = function (e) {
    return +e.slide.index;
  }, e.isActive = function (t) {
    return e.active === t.slide.index;
  }, e.isPrevDisabled = function () {
    return 0 === e.active && e.noWrap();
  }, e.isNextDisabled = function () {
    return e.active === m.length - 1 && e.noWrap();
  }, e.pause = function () {
    e.noPause || (f = !1, s());
  }, e.play = function () {
    f || (f = !0, d());
  }, t.on("mouseenter", e.pause), t.on("mouseleave", e.play), e.$on("$destroy", function () {
    b = !0, s();
  }), e.$watch("noTransition", function (e) {
    i.enabled(t, !e);
  }), e.$watch("interval", d), e.$watchCollection("slides", u), e.$watch("active", function (e) {
    if (angular.isNumber(e) && v !== e) {
      for (var t = 0; t < m.length; t++) {
        if (m[t].slide.index === e) {
          e = t;break;
        }
      }var n = m[e];n && (r(e), h.select(m[e]), v = e);
    }
  });
}]).directive("uibCarousel", function () {
  return { transclude: !0, controller: "UibCarouselController", controllerAs: "carousel", restrict: "A", templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/carousel/carousel.html";
    }, scope: { active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&" } };
}).directive("uibSlide", ["$animate", function (e) {
  return { require: "^uibCarousel", restrict: "A", transclude: !0, templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/carousel/slide.html";
    }, scope: { actual: "=?", index: "=?" }, link: function link(t, n, o, i) {
      n.addClass("item"), i.addSlide(t, n), t.$on("$destroy", function () {
        i.removeSlide(t);
      }), t.$watch("active", function (t) {
        e[t ? "addClass" : "removeClass"](n, "active");
      });
    } };
}]).animation(".item", ["$animateCss", function (e) {
  function t(e, t, n) {
    e.removeClass(t), n && n();
  }var n = "uib-slideDirection";return { beforeAddClass: function beforeAddClass(o, i, r) {
      if ("active" === i) {
        var a = !1,
            l = o.data(n),
            s = "next" === l ? "left" : "right",
            u = t.bind(this, o, s + " " + l, r);return o.addClass(l), e(o, { addClass: s }).start().done(u), function () {
          a = !0;
        };
      }r();
    }, beforeRemoveClass: function beforeRemoveClass(o, i, r) {
      if ("active" === i) {
        var a = !1,
            l = o.data(n),
            s = "next" === l ? "left" : "right",
            u = t.bind(this, o, s, r);return e(o, { addClass: s }).start().done(u), function () {
          a = !0;
        };
      }r();
    } };
}]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.multiMap", "ui.bootstrap.stackedMap", "ui.bootstrap.position"]).provider("$uibResolve", function () {
  var e = this;this.resolver = null, this.setResolver = function (e) {
    this.resolver = e;
  }, this.$get = ["$injector", "$q", function (t, n) {
    var o = e.resolver ? t.get(e.resolver) : null;return { resolve: function resolve(e, i, r, a) {
        if (o) return o.resolve(e, i, r, a);var l = [];return angular.forEach(e, function (e) {
          l.push(angular.isFunction(e) || angular.isArray(e) ? n.resolve(t.invoke(e)) : angular.isString(e) ? n.resolve(t.get(e)) : n.resolve(e));
        }), n.all(l).then(function (t) {
          var n = {},
              o = 0;return angular.forEach(e, function (e, i) {
            n[i] = t[o++];
          }), n;
        });
      } };
  }];
}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (e, t, n) {
  function o(t, o, i) {
    i.modalInClass && (e.addClass(o, i.modalInClass), t.$on(n.NOW_CLOSING_EVENT, function (n, r) {
      var a = r();t.modalOptions.animation ? e.removeClass(o, i.modalInClass).then(a) : a();
    }));
  }return { restrict: "A", compile: function compile(e, t) {
      return e.addClass(t.backdropClass), o;
    } };
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (e, t, n, o) {
  return { scope: { index: "@" }, restrict: "A", transclude: !0, templateUrl: function templateUrl(e, t) {
      return t.templateUrl || "uib/template/modal/window.html";
    }, link: function link(i, r, a) {
      r.addClass(a.windowTopClass || ""), i.size = a.size, i.close = function (t) {
        var n = e.getTop();n && n.value.backdrop && "static" !== n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"));
      }, r.on("click", i.close), i.$isRendered = !0;var l = t.defer();i.$$postDigest(function () {
        l.resolve();
      }), l.promise.then(function () {
        var l = null;a.modalInClass && (l = n(r, { addClass: a.modalInClass }).start(), i.$on(e.NOW_CLOSING_EVENT, function (e, t) {
          var o = t();n(r, { removeClass: a.modalInClass }).start().then(o);
        })), t.when(l).then(function () {
          var t = e.getTop();if (t && e.modalRendered(t.key), !o[0].activeElement || !r[0].contains(o[0].activeElement)) {
            var n = r[0].querySelector("[autofocus]");n ? n.focus() : r[0].focus();
          }
        });
      });
    } };
}]).directive("uibModalAnimationClass", function () {
  return { compile: function compile(e, t) {
      t.modalAnimation && e.addClass(t.uibModalAnimationClass);
    } };
}).directive("uibModalTransclude", ["$animate", function (e) {
  return { link: function link(t, n, o, i, r) {
      r(t.$parent, function (t) {
        n.empty(), e.enter(t, n);
      });
    } };
}]).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (e, t, n, o, i, r, a, l, s) {
  function u(e) {
    var t = "-";return e.replace(S, function (e, n) {
      return (n ? t : "") + e.toLowerCase();
    });
  }function d(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }function c() {
    for (var e = -1, t = k.keys(), n = 0; n < t.length; n++) {
      k.get(t[n]).value.backdrop && (e = n);
    }return e > -1 && M > e && (e = M), e;
  }function p(e, t) {
    var n = k.get(e).value,
        o = n.appendTo;k.remove(e), T = k.top(), T && (M = parseInt(T.value.modalDomEl.attr("index"), 10)), m(n.modalDomEl, n.modalScope, function () {
      var t = n.openedClass || y;x.remove(t, e);var i = x.hasKey(t);o.toggleClass(t, i), !i && C && C.heightOverflow && C.scrollbarWidth && (o.css(C.originalRight ? { paddingRight: C.originalRight + "px" } : { paddingRight: "" }), C = null), f(!0);
    }, n.closedDeferred), h(), t && t.focus ? t.focus() : o.focus && o.focus();
  }function f(e) {
    var t;k.length() > 0 && (t = k.top().value, t.modalDomEl.toggleClass(t.windowTopClass || "", e));
  }function h() {
    if (w && -1 === c()) {
      var e = $;m(w, $, function () {
        e = null;
      }), w = void 0, $ = void 0;
    }
  }function m(t, n, o, i) {
    function a() {
      a.done || (a.done = !0, e.leave(t).then(function () {
        o && o(), t.remove(), i && i.resolve();
      }), n.$destroy());
    }var l,
        s = null,
        u = function u() {
      return l || (l = r.defer(), s = l.promise), function () {
        l.resolve();
      };
    };return n.$broadcast(E.NOW_CLOSING_EVENT, u), r.when(s).then(a);
  }function g(e) {
    if (e.isDefaultPrevented()) return e;var t = k.top();if (t) switch (e.which) {case 27:
        t.value.keyboard && (e.preventDefault(), i.$apply(function () {
          E.dismiss(t.key, "escape key press");
        }));break;case 9:
        var n = E.loadFocusElementList(t),
            o = !1;e.shiftKey ? (E.isFocusInFirstItem(e, n) || E.isModalFocused(e, t)) && (o = E.focusLastFocusableElement(n)) : E.isFocusInLastItem(e, n) && (o = E.focusFirstFocusableElement(n)), o && (e.preventDefault(), e.stopPropagation());}
  }function v(e, t, n) {
    return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented;
  }function b() {
    Array.prototype.forEach.call(document.querySelectorAll("[" + O + "]"), function (e) {
      var t = parseInt(e.getAttribute(O), 10),
          n = t - 1;e.setAttribute(O, n), n || (e.removeAttribute(O), e.removeAttribute("aria-hidden"));
    });
  }var w,
      $,
      C,
      y = "modal-open",
      k = l.createNew(),
      x = a.createNew(),
      E = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
      M = 0,
      T = null,
      O = "data-bootstrap-modal-aria-hidden-count",
      D = "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",
      S = /[A-Z]/g;return i.$watch(c, function (e) {
    $ && ($.index = e);
  }), n.on("keydown", g), i.$on("$destroy", function () {
    n.off("keydown", g);
  }), E.open = function (t, r) {
    function a(e) {
      function t(e) {
        var t = e.parent() ? e.parent().children() : [];return Array.prototype.filter.call(t, function (t) {
          return t !== e[0];
        });
      }if (e && "BODY" !== e[0].tagName) return t(e).forEach(function (e) {
        var t = "true" === e.getAttribute("aria-hidden"),
            n = parseInt(e.getAttribute(O), 10);n || (n = t ? 1 : 0), e.setAttribute(O, n + 1), e.setAttribute("aria-hidden", "true");
      }), a(e.parent());
    }var l = n[0].activeElement,
        d = r.openedClass || y;f(!1), T = k.top(), k.add(t, { deferred: r.deferred, renderDeferred: r.renderDeferred, closedDeferred: r.closedDeferred, modalScope: r.scope, backdrop: r.backdrop, keyboard: r.keyboard, openedClass: r.openedClass, windowTopClass: r.windowTopClass, animation: r.animation, appendTo: r.appendTo }), x.put(d, t);var p = r.appendTo,
        h = c();h >= 0 && !w && ($ = i.$new(!0), $.modalOptions = r, $.index = h, w = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), w.attr({ "class": "modal-backdrop", "ng-style": "{'z-index': 1040 + (index && 1 || 0) + index*10}", "uib-modal-animation-class": "fade", "modal-in-class": "in" }), r.backdropClass && w.addClass(r.backdropClass), r.animation && w.attr("modal-animation", "true"), o(w)($), e.enter(w, p), s.isScrollable(p) && (C = s.scrollbarPadding(p), C.heightOverflow && C.scrollbarWidth && p.css({ paddingRight: C.right + "px" })));var m;r.component ? (m = document.createElement(u(r.component.name)), m = angular.element(m), m.attr({ resolve: "$resolve", "modal-instance": "$uibModalInstance", close: "$close($value)", dismiss: "$dismiss($value)" })) : m = r.content, M = T ? parseInt(T.value.modalDomEl.attr("index"), 10) + 1 : 0;var g = angular.element('<div uib-modal-window="modal-window"></div>');g.attr({ "class": "modal", "template-url": r.windowTemplateUrl, "window-top-class": r.windowTopClass, role: "dialog", "aria-labelledby": r.ariaLabelledBy, "aria-describedby": r.ariaDescribedBy, size: r.size, index: M, animate: "animate", "ng-style": "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}", tabindex: -1, "uib-modal-animation-class": "fade", "modal-in-class": "in" }).append(m), r.windowClass && g.addClass(r.windowClass), r.animation && g.attr("modal-animation", "true"), p.addClass(d), r.scope && (r.scope.$$topModalIndex = M), e.enter(o(g)(r.scope), p), k.top().value.modalDomEl = g, k.top().value.modalOpener = l, a(g);
  }, E.close = function (e, t) {
    var n = k.get(e);return b(), n && v(n, t, !0) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.resolve(t), p(e, n.value.modalOpener), !0) : !n;
  }, E.dismiss = function (e, t) {
    var n = k.get(e);return b(), n && v(n, t, !1) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.reject(t), p(e, n.value.modalOpener), !0) : !n;
  }, E.dismissAll = function (e) {
    for (var t = this.getTop(); t && this.dismiss(t.key, e);) {
      t = this.getTop();
    }
  }, E.getTop = function () {
    return k.top();
  }, E.modalRendered = function (e) {
    var t = k.get(e);t && t.value.renderDeferred.resolve();
  }, E.focusFirstFocusableElement = function (e) {
    return e.length > 0 ? (e[0].focus(), !0) : !1;
  }, E.focusLastFocusableElement = function (e) {
    return e.length > 0 ? (e[e.length - 1].focus(), !0) : !1;
  }, E.isModalFocused = function (e, t) {
    if (e && t) {
      var n = t.value.modalDomEl;if (n && n.length) return (e.target || e.srcElement) === n[0];
    }return !1;
  }, E.isFocusInFirstItem = function (e, t) {
    return t.length > 0 ? (e.target || e.srcElement) === t[0] : !1;
  }, E.isFocusInLastItem = function (e, t) {
    return t.length > 0 ? (e.target || e.srcElement) === t[t.length - 1] : !1;
  }, E.loadFocusElementList = function (e) {
    if (e) {
      var t = e.value.modalDomEl;if (t && t.length) {
        var n = t[0].querySelectorAll(D);return n ? Array.prototype.filter.call(n, function (e) {
          return d(e);
        }) : n;
      }
    }
  }, E;
}]).provider("$uibModal", function () {
  var e = { options: { animation: !0, backdrop: !0, keyboard: !0 }, $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (t, n, o, i, r, a, l) {
      function s(e) {
        return e.template ? n.when(e.template) : i(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl);
      }var u = {},
          d = null;return u.getPromiseChain = function () {
        return d;
      }, u.open = function (i) {
        function u() {
          return g;
        }var c = n.defer(),
            p = n.defer(),
            f = n.defer(),
            h = n.defer(),
            m = { result: c.promise, opened: p.promise, closed: f.promise, rendered: h.promise, close: function close(e) {
            return l.close(m, e);
          }, dismiss: function dismiss(e) {
            return l.dismiss(m, e);
          } };if (i = angular.extend({}, e.options, i), i.resolve = i.resolve || {}, i.appendTo = i.appendTo || o.find("body").eq(0), !i.appendTo.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if (!i.component && !i.template && !i.templateUrl) throw new Error("One of component or template or templateUrl options is required.");var g;g = i.component ? n.when(a.resolve(i.resolve, {}, null, null)) : n.all([s(i), a.resolve(i.resolve, {}, null, null)]);var v;return v = d = n.all([d]).then(u, u).then(function (e) {
          function n(t, n, o, i) {
            t.$scope = a, t.$scope.$resolve = {}, o ? t.$scope.$uibModalInstance = m : t.$uibModalInstance = m;var r = n ? e[1] : e;angular.forEach(r, function (e, n) {
              i && (t[n] = e), t.$scope.$resolve[n] = e;
            });
          }var o = i.scope || t,
              a = o.$new();a.$close = m.close, a.$dismiss = m.dismiss, a.$on("$destroy", function () {
            a.$$uibDestructionScheduled || a.$dismiss("$uibUnscheduledDestruction");
          });var s,
              u,
              d = { scope: a, deferred: c, renderDeferred: h, closedDeferred: f, animation: i.animation, backdrop: i.backdrop, keyboard: i.keyboard, backdropClass: i.backdropClass, windowTopClass: i.windowTopClass, windowClass: i.windowClass, windowTemplateUrl: i.windowTemplateUrl, ariaLabelledBy: i.ariaLabelledBy, ariaDescribedBy: i.ariaDescribedBy, size: i.size, openedClass: i.openedClass, appendTo: i.appendTo },
              g = {},
              v = {};i.component ? (n(g, !1, !0, !1), g.name = i.component, d.component = g) : i.controller && (n(v, !0, !1, !0), u = r(i.controller, v, !0, i.controllerAs), i.controllerAs && i.bindToController && (s = u.instance, s.$close = a.$close, s.$dismiss = a.$dismiss, angular.extend(s, { $resolve: v.$scope.$resolve }, o)), s = u(), angular.isFunction(s.$onInit) && s.$onInit()), i.component || (d.content = e[0]), l.open(m, d), p.resolve(!0);
        }, function (e) {
          p.reject(e), c.reject(e);
        })["finally"](function () {
          d === v && (d = null);
        }), m;
      }, u;
    }] };return e;
}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
  return { createNew: function createNew() {
      var e = [];return { add: function add(t, n) {
          e.push({ key: t, value: n });
        }, get: function get(t) {
          for (var n = 0; n < e.length; n++) {
            if (t === e[n].key) return e[n];
          }
        }, keys: function keys() {
          for (var t = [], n = 0; n < e.length; n++) {
            t.push(e[n].key);
          }return t;
        }, top: function top() {
          return e[e.length - 1];
        }, remove: function remove(t) {
          for (var n = -1, o = 0; o < e.length; o++) {
            if (t === e[o].key) {
              n = o;break;
            }
          }return e.splice(n, 1)[0];
        }, removeTop: function removeTop() {
          return e.pop();
        }, length: function length() {
          return e.length;
        } };
    } };
}), angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function (e) {
  e.put("uib/template/carousel/carousel.html", '<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n');
}]), angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function (e) {
  e.put("uib/template/carousel/slide.html", '<div class="text-center" ng-transclude></div>\n');
}]), angular.module("uib/template/modal/window.html", []).run(["$templateCache", function (e) {
  e.put("uib/template/modal/window.html", "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n");
}]), angular.module("ui.bootstrap.position").run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0;
}), angular.module("ui.bootstrap.carousel").run(function () {
  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0;
});