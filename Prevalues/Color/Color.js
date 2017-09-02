angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.SlideSwitchColorController", function ($scope, localizationService) {

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

    if ($scope.model.key == "trueColor") {
        setDefaultValue("green");
    }
    else {
        setDefaultValue("red");
    }

    function setDefaultValue(color) {
        if ($scope.model.value === null || $scope.model.value === "") {
            $scope.model.value = color;
        }
    }

});