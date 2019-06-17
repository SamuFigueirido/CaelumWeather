export default class ErrorController {
    constructor ($state) {
        this.$state = $state;
    }

    $onInit() {
        this.status = this.$state.params.status;
    }

    goStartPage() {
        this.$state.go('startPage');
    }

    reload() {
        const city = this.$state.params.city;
        this.$state.go('searchCity', {city}, {reload: true});
    }
}

ErrorController.$inject = ['$state'];