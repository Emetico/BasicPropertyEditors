angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.ColorController", function ($scope, localizationService) {

    $scope.color = {
        green: "",
        red: "",
        blue: "",
        yellow: ""
    };

    localizationService.localize("color_green").then(function (value) {
        $scope.color.green = value;
    });
    localizationService.localize("color_red").then(function (value) {
        $scope.color.red = value;
    });
    localizationService.localize("color_blue").then(function (value) {
        $scope.color.blue = value;
    });
    localizationService.localize("color_yellow").then(function (value) {
        $scope.color.yellow = value;
    });
});