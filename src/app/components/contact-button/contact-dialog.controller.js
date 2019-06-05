export default class ContactButtonController {
    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
    }
}

ContactButtonController.$inject = ['$scope', '$mdDialog'];