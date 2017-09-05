angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.TextController", function ($scope, localizationService) {

    $scope.text = {
        yes: "",
        no: "",
        on: "",
        off: ""
    };

    localizationService.localize("general_yes").then(function (value) {
        $scope.text.yes = value;
    });
    localizationService.localize("general_no").then(function (value) {
        $scope.text.no = value;
    });
    localizationService.localize("general_on").then(function (value) {
        $scope.text.on = value;
    });
    localizationService.localize("general_off").then(function (value) {
        $scope.text.off = value;
    });

    var aliasKey = "trueText";

    if ($scope.model.value === null || $scope.model.value === "") {
        if ($scope.model.alias == aliasKey || $scope.model.key == aliasKey) {
            setDefaultValue("yes");
        }
        else {
            setDefaultValue("no");
        }
    }

    function setDefaultValue(text) {
        $scope.model.value = text;
    }
});