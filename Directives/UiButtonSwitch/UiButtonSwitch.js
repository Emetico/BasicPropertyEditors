angular.module("umbraco.directives").directive('uiButtonSwitch', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: '/App_Plugins/BasicPropertyEditors/Directives/UiButtonSwitch/UiButtonSwitch.html',
        require: 'ngModel',
        scope: {
            ngModel: '=ngModel',           
            trueText: '@trueText',
            trueClass: '@trueClass',
            falseText: '@falseText',
            falseClass: '@falseClass'
        },
        priority: 1,
        link: function (scope, element, attrs, ngModelCtr) {

            scope.trueText = scope.trueText;
            scope.falseText = scope.falseText;
            scope.trueClass = scope.trueClass;
            scope.falseClass = scope.falseClass;

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