angular.module("umbraco").controller("Basic.Property.Editors.SlideSwitchController", function ($scope, localizationService, bpeHelperService) {

    $scope.values = {
        text: {
            trueX: "x",
            falseX: "x"
        },
        color: {
            trueX: $scope.model.config.trueColor,
            falseX: $scope.model.config.falseColor
        }
    };

    localizationService.localize("general_" + $scope.model.config.trueText).then(function (value) {
        $scope.values.text.trueX = value;
    });

    localizationService.localize("general_" + $scope.model.config.falseText).then(function (value) {
        $scope.values.text.falseX = value;
    });

    // Gets the default checkbox value "0" or "1". Set by umbraco checkbox view.
    if (bpeHelperService.isNullOrEmpty($scope.model.value)) {
        $scope.model.value = $scope.model.config.defaultValue;
    }

    // If umbraco transformed true/false. We set it back.
    if (bpeHelperService.isFalse($scope.model.value)) {
        $scope.model.value = false;
    }
    else if (bpeHelperService.isTrue($scope.model.value)) {
        $scope.model.value = true;
    }
});