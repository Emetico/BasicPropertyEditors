angular.module("umbraco.directives").directive('uiTextboxMaxchar', function ($timeout, notificationsService, localizationService, bpeHelperService) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '/App_Plugins/BasicPropertyEditors/Directives/UiTextBoxMaxChar/UiTextBoxMaxChar.html',
        require: 'ngModel',
        scope: {
            ngModel: '=ngModel',
            cutText: '@cutText',
            maxChar: '@maxChar'
        },
        priority: 1,
        link: function (scope, element, attrs, ngModelCtr) {
        
            scope.view = {
                left: scope.maxChar,
                css: "green",
                text: ""
            };

            scope.errorMsg = {
                title: "",
                msg: "",
                showError: true
            };

            localizationService.localize("bpe_charactersLeft").then(function (value) {
                scope.view.text = value;
            });

            localizationService.localize("bpe_caution").then(function (value) {
                scope.errorMsg.title = value;
            });

            localizationService.localize("bpe_cautionErrorMsg").then(function (value) {
                scope.errorMsg.msg = value;
            });

            scope.inputChange = function () {

                if (bpeHelperService.isTrue(scope.cutText)) {
                    scope.ngModel = scope.ngModel.substring(0, scope.maxChar);
                }

                scope.view.left = scope.maxChar - scope.ngModel.length;

                if (scope.view.left >= 0) {
                    scope.view.css = "green";
                }
                else {
                    scope.view.css = "red";
                }

                if (scope.view.left < 0 && scope.errorMsg.showError) {
                    scope.errorMsg.showError = false;
                    notificationsService.error(scope.errorMsg.title, scope.errorMsg.msg);
                    $timeout(function () {
                        scope.errorMsg.showError = true;
                    }, 6000);
                }
            };

            // if statement, is set so we dont get an console error in design view.
            if (!bpeHelperService.isNullOrEmpty(scope.ngModel)) {
                // Running at init to manipulate the scope view.
                scope.inputChange();
            }
        }
    };
});