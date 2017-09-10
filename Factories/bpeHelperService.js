angular.module('umbraco.resources').factory('bpeHelperService', function ($q, localizationService) {

    var treePath = "Backoffice/Srw/GridResourceApi/";
    var bpeHelperService = {};

    bpeHelperService.isTrue = function (value) {       
        if (value == true || value == "True" || value == "true" || value == "1" || value == 1) {
            return true;
        }
        return false;
    };

    bpeHelperService.isFalse = function (value) {
        if (value == false || value == "False" || value == "false" || value == "0" || value == 0) {
            return true;
        }
        return false;
    };

    bpeHelperService.isNullOrEmpty = function (value) {
        if (value === null || value === "" || value === " " || value === undefined) {
            return true;
        }
        return false;
    };

    return bpeHelperService;
}
);