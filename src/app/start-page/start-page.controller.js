export default class StartPageController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
    }

    mapStateToThis(state) {
        return {
            lastSearches: state.default.lastSearches
        };
    }

    $onDestroy() {
        this.unsubscribe();
    }
}

StartPageController.$inject = ['$ngRedux'];