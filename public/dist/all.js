'use strict';

angular.module('toyota', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "./app/views/home.html"
    }).state('build-all', {
        url: '/build-all',
        templateUrl: './app/views/build-all.html',
        controller: 'buildAllCtrl'
    }).state('build-tacoma', {
        url: '/build-tacoma',
        templateUrl: './app/views/build-tacoma.html',
        controller: 'buildTacoma'
    });
});
'use strict';

angular.module('toyota').controller('buildTacoma', function ($scope, buildTacomaSvc) {
    $scope.broken = 'working';

    // $scope.class = "select-button";

    //     $scope.changeClass = () =>{
    //         if ($scope.class === "select-button")
    //             $scope.class = "selected-button";
    //          else if ($scope.class === "selected-button")
    //             $scope.class = "select-button";
    //     };
    //      $scope.toggle = true;

    //     $scope.$watch('toggle', () => {
    //         $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
    //     })

    // Slider or Carousel
    // $('.variable-width').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true
    // });

    // Current method for changing pages....may use nested routing for more options with $locaition
    $scope.opencontent = function (num) {
        $scope.item = num;
        //  console.log($scope.item)
    };
    $scope.viewSummary = function () {
        buildTacomaSvc.getSummary().then(function (res) {
            $scope.summary = res.data;
            console.log($scope.summary);
            console.log("I am right here in the summary");
        });
    };

    $scope.startingMSRP = "24,320";
    $scope.startingTitle = "2017 Tacoma SR";
    $scope.getPriceandTitleChange = function (grade) {
        $scope.startingMSRP = grade.price;
        $scope.startingTitle = grade.year + " " + grade.model + " " + grade.grade;
    };

    // make shift cart for summary  
    // $scope.options = buildTacomaSvc.getSummary(); 
    // $scope.addToSummary = (product) => {
    //     console.log(`Going to service with ${product}`)
    //     console.log(product)
    //     buildTacomaSvc.addToSummary(product).then(() => {
    //       Get the latest cart from the server. It has been updated.
    //       buildTacomaSvc.getSummary().then((res)=> {
    //         $scope.summary = res.data;
    //       })
    //     })
    //   }

    // buildTacomaSvc.getSummary().then((res) => {
    //     console.log(res);
    //     $scope.summary = res.data;
    //   })

    // Psuedo-code: when I click on grade it changes 1. the price 2. the picture set and 3. the title  (it flashed blue as it changes not that important) 4. if not button one then it will change to the selected button class

    // it also pushes that item to the summary sheet and totals price  

    // on leaving the view page for that selected tab the tab will put in a blue check mark 

    // there is a next button at them bottom which has the same affect as clicking the tab section above
    // the problem is that there are some set defaults that correlate with price 


    //    $scope.myInterval = 5000;
    //   var slides = $scope.slides = ["https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/1/864_477_PNG/af00b31-ed3b036-d5b169f-88ac67c-e7e9359-fe3c93a-4048061-cb4bfdb-75ff6b4-1cce8f3-0e3ddd3-0e44209-c9df76a-096cb71-30f9e80-54f8546-c13d5e1-90455cf-265e76d-ec56c89.png", "https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/ff8551f-ba459c1-3e65d71-954aca8-9c7d687-1d1b70b-e39f3ed-0f5b482-aa06481-7f50678-120b780-98e5b37-0db9f89-5c6bef0-98c10f3-6fb64ca-b21c68f-264e4f4-b5fcbaf-4146097-7394438.png"];
    //   $scope.addSlide = function() {
    //     var newWidth = 600 + slides.length + 1;
    //     slides.push({
    //       image: 'http://lorempixel.com/400/200/people' + newWidth + '/300',
    //       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //     });
    //   };
    //   for (var i=0; i<4; i++) {
    //     $scope.addSlide();
    //   }
});
'use strict';

angular.module('toyota').controller('buildAllCtrl', function ($scope, buildAllSvc) {

    buildAllSvc.getCarsAndVans1().then(function (res) {
        // console.log(res);
        $scope.getCarsAndVans1 = res.data;
        console.log(res);
    });

    buildAllSvc.gettrucks1().then(function (res) {
        // console.log(res);
        $scope.gettrucks1 = res.data;
    });
    buildAllSvc.gethybrids1().then(function (res) {
        // console.log(res);
        $scope.gethybrids1 = res.data;
    });
    buildAllSvc.getcrossovers1().then(function (res) {
        // console.log(res);
        $scope.getcrossovers1 = res.data;
    });
});
'use strict';

angular.module('toyota').controller('mainCtrl', function ($scope) {
    $scope.broken = 'working';
});
'use strict';

angular.module('toyota').service('accessories_dirSvc', function ($http) {

    var devUrl = 'http://localhost:3000';

    this.TRDaccessories = function () {
        return $http.get(devUrl + '/TRDaccessories');
    };
});
'use strict';

angular.module('toyota').service('buildAllSvc', function ($http) {

    var devUrl = 'http://localhost:3000';

    this.getCarsAndVans1 = function () {
        return $http.get(devUrl + '/carsandvans');
    };
    this.gettrucks1 = function () {
        return $http.get(devUrl + '/trucks');
    };
    this.gethybrids1 = function () {
        return $http.get(devUrl + '/hybrids');
    };
    this.getcrossovers1 = function () {
        return $http.get(devUrl + '/crossovers');
    };
});
'use strict';

angular.module('toyota').service('buildTacomaSvc', function ($http, $state) {
    var _this = this;

    var devUrl = 'http://localhost:3000';
    var service = this;
    // build tacoma 
    this.tacomagrades = function () {
        return $http.get(devUrl + '/tacomagrades');
    };
    this.trdcabsbeds = function () {
        return $http.get(devUrl + '/tacomacabsbeds');
    };
    this.trdconfiguration = function () {
        return $http.get(devUrl + '/tacomaconfiguration');
    };
    this.trdcolors = function () {
        return $http.get(devUrl + '/trdcolors').then(function (res) {
            service.colors = res.data;
            return res.data;
        });
    };
    this.trdpackages = function () {
        return $http.get(devUrl + '/tacomapackages');
    };

    this.TRDaccessories = function () {
        return $http.get(devUrl + '/TRDaccessories');
    };

    // cart or summary
    this.addToSummary = function (product) {
        console.log('Adding ' + product + ' to cart');
        return $http.post('/summary', product);
    };

    this.getSummary = function () {
        console.log("hello there pal");
        return $http.get('/summary').then(function (res) {
            console.log(res.data);
            return res;
        });
    };

    this.photos = [{
        src: '../../app/images/build-tacoma-home/sr-1.png',
        title: 'Pic 1'
    }, {
        src: '../../app/images/build-tacoma-home/sr-2.png',
        title: 'Pic 2'
    }, {
        src: '../../app/images/build-tacoma-home/sr-3.png',
        title: 'Pic 3'
    }, {
        src: '../../app/images/build-tacoma-home/sr-4.png',
        title: 'Pic 4'
    }, {
        src: '../../app/images/build-tacoma-home/sr-5.png',
        title: 'Pic 5'
    }, {
        src: '../../app/images/build-tacoma-home/sr-6-interior1.png',
        title: 'Pic 6'
    }, {
        src: '../../app/images/build-tacoma-home/sr-7-interior2.png',
        title: 'Pic 7'
    }, {
        src: '../../app/images/build-tacoma-home/sr-8-interior3.png',
        title: 'Pic 8'
    }];
    //         this.photos= {}
    // this.photos.photos = photos;


    this.getTRDphotos = function (id) {
        return $http.get(devUrl + '/getTRDphotos/' + id).then(function (res) {
            // console.log(res)
            _this.photos.photos = res.data[0].images;
            return res.data[0].images;

            // $state.go($state.current, {}, {reload: true})
            // console.log(JSON.stringify(res.data, null, 2))

            // var obj = {1: 11, 2: 22};
            // var arr = Object.keys(service.photos).map((key) =>{ return service.photos[key]; });
            //  console.log(service.photos)
            //   var photos = arr.reduce( (t, c, i) => {
            //             t.push({"src": c, title: "Pic " + (i +1)})
            //             return t
            //     }, [])

            //    console.log(photos);

            // return service.photos
        });
    };
    this.gettrdred = function (id) {
        return $http.get(devUrl + '/gettrdred/' + id).then(function (res) {
            console.log(res);
            console.log("color change");
            _this.photos.photos = res.data[0].images;
            return res.data[0].images;
        });
    };
});
'use strict';

angular.module('toyota').service('service', function () {

    //from plenty o stuff .com tst for cart summary in product service


});
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
"use strict";

angular.module('toyota').directive("accessoriesDir", function () {

    return {

        templateUrl: "./app/directives/accessories-dir/accessories-dir.html",
        scope: {},
        controller: function controller($scope, buildTacomaSvc) {

            buildTacomaSvc.TRDaccessories().then(function (res) {
                //  console.log(res);
                $scope.TRDacc = res.data;
            });

            $scope.itemClicked = function ($index) {
                // console.log($index);
                // console.log("clicked")
                $scope.selectedIndex = $index;
            };

            $scope.addToSummary = function (product) {
                // console.log(`${cabbed}`, product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    buildTacomaSvc.getSummary().then(function (res) {
                        $scope.summary = res.data;
                    });
                });
            };
        }

    };
});
"use strict";

angular.module("toyota").directive("build-all-cars-minivans", function () {
    return {
        restrict: "E",
        templateUrl: "build-all-cars-minivans.html"
    };
});
"use strict";

angular.module('toyota').directive("cabsBeds", function () {

    return {

        templateUrl: "./app/directives/cabs_beds/cabs_beds.html",
        // link: function (scope, element, attribute) {

        // }
        scope: {},
        controller: function controller($scope, buildTacomaSvc) {

            buildTacomaSvc.trdcabsbeds().then(function (res) {
                //  console.log(res);
                $scope.trdcabsbeds = res.data;
            });

            $scope.selectedIndex = 0;
            $scope.itemClicked = function ($index) {
                console.log($index);
                $scope.selectedIndex = $index;
            };

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = function (product) {
                // console.log(`${cabbed}`, product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    buildTacomaSvc.getSummary().then(function (res) {
                        $scope.summary = res.data;
                    });
                });
            };

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
        }
    };
});
"use strict";

angular.module('toyota').directive("configureMotor", function () {

    return {

        templateUrl: "./app/directives/configuration/configuremotor.html",
        scope: {},
        controller: function controller($scope, buildTacomaSvc) {

            buildTacomaSvc.trdconfiguration().then(function (res) {
                //  console.log(res);
                $scope.trdconfiguration = res.data;
            });

            $scope.selectedIndex = 0;
            $scope.itemClicked = function ($index) {
                console.log($index);
                $scope.selectedIndex = $index;
            };

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = function (product) {
                console.log(product
                //     console.log(`Going to service with ${product}`)
                );buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    // buildTacomaSvc.getSummary().then((res) => {
                    //     $scope.summary = res.data;
                    // })

                });
            };

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
        }
    };
});
"use strict";

angular.module('toyota').directive("tacomaColor", function () {

    return {

        templateUrl: "./app/directives/colors_tacoma/tacoma-colors.html",
        scope: {},
        controller: function controller($scope, buildTacomaSvc, $rootScope) {

            buildTacomaSvc.trdcolors().then(function (res) {
                //  console.log(res);
                $scope.trdcolors = res;
                //  console.log($scope.trdcolors)
            });
            $scope.addToSummary = function (product) {
                // console.log(`${cabbed}`, product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    buildTacomaSvc.getSummary().then(function (res) {
                        $scope.summary = res.data;
                    });
                });
            };

            $rootScope.images = buildTacomaSvc.photos;
            console.log($rootScope.images);
            $scope.changeSliderPhotos = function (id) {
                // console.log(id)
                buildTacomaSvc.gettrdred(id).then(function (res) {
                    $rootScope.$broadcast('newImages', { images: res });
                });
            };
        }
    };
});
"use strict";

angular.module('toyota').directive("gradesInitial", function () {

    return {

        templateUrl: "./app/directives/grades/gradesInitial.html",
        // link: function (scope, element, attribute) {

        // }
        scope: {},
        controller: function controller($scope, buildTacomaSvc, $rootScope) {
            //   get info for grades selection cards for ng repeat
            buildTacomaSvc.tacomagrades().then(function (res) {
                //  console.log(res);
                $scope.tacomagrades = res.data;
            }

            // zero in on ng repeat to have class chagne on button click etc
            );$scope.selectedIndex = 0;
            $scope.itemClicked = function ($index) {
                // console.log($index);
                $scope.selectedIndex = $index;
            };
            //  all this below is code for chaning class that I originally was using save for reference
            // $scope.selected = 0;

            // $scope.select = function (index) {
            //     $scope.selected = index;
            // };

            // $scope.class = "select-button";

            // $scope.changeClass = () => {
            //     if ($scope.class === "select-button")
            //         $scope.class = "selected-button";
            //     else if ($scope.class === "selected-button")
            //         $scope.class = "select-button";
            // };
            // $scope.toggle = true;
            //  $scope.toggleObject = {item: -1};
            //  $scope.$watch('toggle', () => {
            //     $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
            // })


            // grab photos for changint the slider

            buildTacomaSvc.trdcolors().then(function (res) {
                $scope.photos = res.images;
            });
            $rootScope.images = buildTacomaSvc.photos;
            console.log($rootScope.images);
            $scope.changeSliderPhotos = function (id) {
                // console.log(id)
                buildTacomaSvc.getTRDphotos(id).then(function (res) {
                    $rootScope.$broadcast('newImages', { images: res });
                });
            };

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = function (product) {
                // console.log(product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    buildTacomaSvc.getSummary().then(function (res) {
                        $scope.summary = res.data;
                    });
                });
            };

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })

        }

    };
});
"use strict";

angular.module('toyota').directive("packages", function () {

    return {

        templateUrl: "./app/directives/packages/tacoma_packages.html",
        // link: function (scope, element, attribute) {

        // }
        scope: {},
        controller: function controller($scope, buildTacomaSvc) {

            buildTacomaSvc.trdpackages().then(function (res) {
                //  console.log(res);
                $scope.trdpackages = res.data;
            });

            $scope.selectedIndex = 0;
            $scope.itemClicked = function ($index) {
                console.log($index, "test");
                $scope.selectedIndex = $index;
            };

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = function (product) {
                console.log(product
                //     console.log(`Going to service with ${product}`)
                );buildTacomaSvc.addToSummary(product).then(function () {
                    // Get the latest cart from the server. It has been updated.
                    // buildTacomaSvc.getSummary().then((res) => {
                    //     $scope.summary = res.data;
                    // })

                });
            };

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
        }
    };
});
'use strict';

angular.module('toyota').service('modalSvc', function () {
        var modals = []; // array of modals on the page
        var service = {};

        service.Add = Add;
        service.Remove = Remove;
        service.Open = Open;
        service.Close = Close;

        return service;

        function Add(modal) {
                // add modal to array of active modals
                modals.push(modal);
        }

        function Remove(id) {
                // remove modal from array of active modals
                var modalToRemove = _.findWhere(modals, { id: id });
                modals = _.without(modals, modalToRemove);
        }

        function Open(id) {
                // open modal specified by id
                var modal = _.findWhere(modals, { id: id });
                modal.open();
        }

        function Close(id) {
                // close modal specified by id
                var modal = _.findWhere(modals, { id: id });
                modal.close();
        }
});
'use strict';

angular.module('toyota').directive('raqmodal', function (modalSvc) {
    return {
        templateUrl: "./app/directives/modal/raq.html",

        link: function link(scope, element, attrs) {
            // ensure id attribute exists
            if (!attrs.id) {
                console.error('modal must have an id');
                return;
            }

            // move element to bottom of page (just before </body>) so it can be displayed above everything else
            element.appendTo('body');

            // close modal on background click
            element.on('click', function (e) {
                var target = $(e.target);
                if (!target.closest('.modal-body').length) {
                    scope.$evalAsync(Close);
                }
            });

            // add self (this modal instance) to the modal service so it's accessible from controllers
            var modal = {
                id: attrs.id,
                open: Open,
                close: Close
            };
            ModalService.Add(modal);

            // remove self from modal service when directive is destroyed
            scope.$on('$destroy', function () {
                ModalService.Remove(attrs.id);
                element.remove();
            });

            // open modal
            function Open() {
                element.show();
                $('body').addClass('modal-open');
            }

            // close modal
            function Close() {
                element.hide();
                $('body').removeClass('modal-open');
            }
        }
    };
});
"use strict";

angular.module('toyota').directive("slider1", function () {

    return {

        templateUrl: "./app/directives/slider1-dir/slider1.html",
        link: function link(scope, element, attribute) {
            $('.single-item').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                singleItem: true,
                accessibility: true,
                arrows: true

            });
        }

    };
});
"use strict";

angular.module('toyota').directive("summary", function () {

    return {

        templateUrl: "./app/directives/summary/summary_cart.html",
        // link: function (scope, element, attribute) {

        // }
        scope: {},
        controller: function controller($scope, buildTacomaSvc) {

            buildTacomaSvc.getSummary().then(function (res) {
                $scope.summary = res.data;
                console.log($scope.summary);
                console.log("see me?"
                // console.log("I am right here in the summary")
                );
            });
        }
    };
});
"use strict";

angular.module("toyota").directive("slider2", function ($timeout, buildTacomaSvc) {

    return {
        templateUrl: "./app/directives/slider2/slider2.html",
        restrict: 'AE',
        replace: true,
        scope: {},
        link: function link(scope, elem, attrs) {
            // // if ()
            // scope.currentIndex = 0; // Initially the index is at the first image

            // scope.next =  () => {
            //     scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            // };

            // scope.prev =  () => {
            //     scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            // };
            // scope.$watch('currentIndex',  () => {
            //     scope.images.forEach( (image) => {
            //         image.visible = false; // make every image invisible
            //     });

            //     scope.images[scope.currentIndex].visible = true; // make the current image visible

            // });
            // scope.$watch('buildTacomaSvc.photos', (newVal)=> {
            //     console.log("hi")
            //     scope.images = buildTacomaSvc.photos
            // })
        },
        controller: function controller($scope, buildTacomaSvc, $rootScope) {

            $scope.currentIndex = 0; // Initially the index is at the first image

            $scope.next = function () {
                $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
            };

            $scope.prev = function () {
                $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
            };
            $scope.$watch('currentIndex', function () {
                $scope.images.forEach(function (image) {
                    image.visible = false; // make every image invisible
                });

                $scope.images[$scope.currentIndex].visible = true; // make the current image visible
            });

            $scope.set_size = function (image) {
                if (image.title === "Pic 6" || image.title === "Pic 7" || image.title === "Pic 8") {
                    return { width: "500px", "box-shadow": "0 1px 5px 2px rgba(0,0,0,.15)", top: "34px", "margin-left": "56px" };
                }
            };
            $scope.images = buildTacomaSvc.photos;
            $scope.$on('newImages', function (event, args) {
                console.log(args);
                $scope.images = args.images;
                $scope.next();
            }

            //             $scope.$watchCollection('images', function(newImages, oldImages) {
            //   $scope.images = newImages;
            // });
            // $scope.$watch('buildTacomaSvc.photos', (newVal)=> {
            //     console.log(newVal)

            //    console.log("hello")
            // })

            // $scope.images = [{
            //     src: '../../app/images/build-tacoma-home/sr-1.png',
            //     title: 'Pic 1'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-2.png',
            //     title: 'Pic 2'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-3.png',
            //     title: 'Pic 3'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-4.png',
            //     title: 'Pic 4'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-5.png',
            //     title: 'Pic 5'
            // },
            //  {
            //     src: '../../app/images/build-tacoma-home/sr-6-interior1.png',
            //     title: 'Pic 6'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-7-interior2.png',
            //     title: 'Pic 7'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-8-interior3.png',
            //     title: 'Pic 8'
            // }];
            );
        }

    };
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {
                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {

                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  "use strict";
  var b = window.Slick || {};b = function () {
    function c(c, d) {
      var f,
          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }var b = 0;return c;
  }(), b.prototype.activateADA = function () {
    var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      }, complete: function complete() {
        c && c.call();
      } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
      var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
          }i.appendChild(j);
        }e.appendChild(i);
      }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
        return;}
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;break;
      }d = c[e];
    }return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
  }, b.prototype.init = function (b) {
    var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");e.onload = function () {
          c.animate({ opacity: 0 }, 100, function () {
            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }var c,
        d,
        e,
        f,
        b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;a.changeSlide({ data: { message: "next" } });
  }, b.prototype.orientationChange = function () {
    var a = this;a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;a.changeSlide({ data: { message: "previous" } });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
    }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
  }, b.prototype.setHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }b.options.responsive.push(f[d]);
      }
    }g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {case "left":case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
        b.swipeStart(a);break;case "move":
        b.swipeMove(a);break;case "end":
        b.swipeEnd(a);}
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;for (f = 0; e > f; f++) {
      if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }return a;
  };
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {
                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {

                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  "use strict";
  var b = window.Slick || {};b = function () {
    function c(c, d) {
      var f,
          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }var b = 0;return c;
  }(), b.prototype.activateADA = function () {
    var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      }, complete: function complete() {
        c && c.call();
      } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
      var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
          }i.appendChild(j);
        }e.appendChild(i);
      }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
        return;}
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;break;
      }d = c[e];
    }return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
  }, b.prototype.init = function (b) {
    var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");e.onload = function () {
          c.animate({ opacity: 0 }, 100, function () {
            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }var c,
        d,
        e,
        f,
        b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;a.changeSlide({ data: { message: "next" } });
  }, b.prototype.orientationChange = function () {
    var a = this;a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;a.changeSlide({ data: { message: "previous" } });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
    }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
  }, b.prototype.setHeight = function () {
    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }b.options.responsive.push(f[d]);
      }
    }g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {case "left":case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
        b.swipeStart(a);break;case "move":
        b.swipeMove(a);break;case "end":
        b.swipeEnd(a);}
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;for (f = 0; e > f; f++) {
      if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }return a;
  };
});
//# sourceMappingURL=maps/all.js.map
