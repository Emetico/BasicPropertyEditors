angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.CheckedEmptyController", function ($scope, localizationService) {

    $scope.text = {
        checked: "",
        empty: ""
    };

    localizationService.localize("general_checked").then(function (value) {
        $scope.text.checked = value;
    });
    localizationService.localize("general_empty").then(function (value) {
        $scope.text.empty = value;
    });

});