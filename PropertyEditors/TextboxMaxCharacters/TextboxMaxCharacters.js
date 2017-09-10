angular.module("umbraco").controller("Basic.Property.Editors.TextboxMaxCharactersController", function ($scope, bpeHelperService) {

    if (bpeHelperService.isNullOrEmpty($scope.model.config.cutText)) {
        $scope.model.config.cutText = "True";
    }

    if (bpeHelperService.isNullOrEmpty($scope.model.config.maxCharacters)) {
        $scope.model.config.maxCharacters = 150;
    }

});