angular.module("umbraco.directives").directive('uiSlideSwitch', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: '/App_Plugins/BasicPropertyEditors/Directives/UiSlideSwitch/UiSlideSwitch.html',
        require: 'ngModel',
        scope: {
            ngModel: '=ngModel',
            trueText: '@trueText',
            falseText: '@falseText',
            trueClass: '@trueClass',
            falseClass: '@falseClass'
        },
        priority: 1,
        link: function (scope, element, attrs, ngModelCtr) {

            scope.class = scope.switchClass;

            scope.$watch('ngModel', function (newVal, oldVal) {
                // Somehow true/false get's converted to "True"/"False", when the document is saved.
                if (newVal === "True") {
                    scope.ngModel = true;                 
                }
                else if (newVal === "False") {
                    scope.ngModel = false;               
                }
            }, true);
        }
    };
});