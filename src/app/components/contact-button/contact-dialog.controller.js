export default class ContactButtonController {
    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
    }

    submit() {
        const name = this.$scope.name.trim();
        const subject = this.$scope.subject.trim();
        const issue = this.$scope.issue.trim();

        if (name !== '' || subject !== '' || issue !== '') {
            const problem = {
                name,
                subject,
                issue
            };

            this.$mdDialog.hide(problem);
        }
    };

    cancel() {
        this.$mdDialog.cancel();
    };
}

ContactButtonController.$inject = ['$scope', '$mdDialog'];