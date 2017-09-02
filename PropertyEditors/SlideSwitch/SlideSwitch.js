angular.module("umbraco").controller("Basic.Property.Editors.SlideSwitchController", function ($scope, localizationService) {

    $scope.text = {
        trueX: "x",
        falseX: "x"
    };

    localizationService.localize("general_" + $scope.model.config.trueText).then(function (value) {
        $scope.text.trueX = value;
    });

    localizationService.localize("general_" + $scope.model.config.falseText).then(function (value) {
        $scope.text.falseX = value;
    });

    $scope.switchClass = $scope.model.config.trueColor + "-" + $scope.model.config.falseColor;

    // Gets the default checkbox value "0" or "1". Set by umbraco checkbox view.
    if ($scope.model.value === null || $scope.model.value === "") {
        $scope.model.value = $scope.model.config.defaultValue;
    }

    // If umbraco transformed true/false. We set it back.
    if ($scope.model.value === "0" || $scope.model.value === "False") {
        $scope.model.value = false;
    }
    else if ($scope.model.value === "1" || $scope.model.value === "True") {
        $scope.model.value = true;
    }
});