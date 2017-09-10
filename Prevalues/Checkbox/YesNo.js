angular.module("umbraco").controller("Basic.Property.Editors.Prevalues.YesNoController", function ($scope, localizationService) {

    $scope.text = {
        yes: "",
        no: ""
    };

    localizationService.localize("general_yes").then(function (value) {
        $scope.text.yes = value;
    });
    localizationService.localize("general_no").then(function (value) {
        $scope.text.no = value;
    });

});