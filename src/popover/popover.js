/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', uibContent: '@', uibClass: '@', uibTrigger: '=?', contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html',
    link: {
        pre: function(scope, element, attrs, ctrl){
            scope.uibTrigger = angular.isDefined(scope.uibTrigger) ? scope.uibTrigger : 'focus';
        }
    }
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    placementClassPrefix: 'bs-popover-',
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uibTitle: '@' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    placementClassPrefix: 'bs-popover-',
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
    return {
        restrict: 'AE',
        transclude: true,
        scope: { uibTitle: '@', uibContent: '@', uibClass: '@', uibTrigger: '@?', uibPlacement: '@?' },
        templateUrl: 'uib/template/popover/popover.html',
        link: function(scope, element, attrs, ctrl){
            scope.uibTrigger = angular.isDefined(scope.uibTrigger) ? scope.uibTrigger : 'focus';
            scope.uibPlacement = angular.isDefined(scope.uibPlacement) ? scope.uibPlacement : 'top';
        }
    };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click', {
    placementClassPrefix: 'bs-popover-'
  });
}]);
