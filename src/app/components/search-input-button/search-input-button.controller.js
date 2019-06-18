export default class SearchInputButtonController {
    constructor($state) {
        this.$state = $state;
    }

    searchCity(city) {
        if(city.trim() !== '') {
        this.$state.go('searchCity', {
            city: city
        }, {
            reload: true
        });
    }
    }
}

SearchInputButtonController.$inject = ['$state'];