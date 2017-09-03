angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.ColorController", function ($scope, localizationService) {

    $scope.color = {
        green: "",
        red: "",
        blue: ""
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

    if ($scope.model.value === null || $scope.model.value === "") {
        if ($scope.model.alias == "trueColor") {
            setDefaultValue("green");
        }
        else {
            setDefaultValue("red");
        }
    }

    function setDefaultValue(color) {
        $scope.model.value = color;
    }
});