const config = ['$urlRouterProvider','$stateProvider', function(urlRouterProvider, provider) {
    const startPage = {
        name: 'startPage',
        url: '/',
        component: 'startPage'
    }

    const mainPage = {
        name: 'mainPage',
        component: 'mainPage'
    }

    const searchCity = {
        parent: 'mainPage',
        name: 'searchCity',
        url: '/search?city',
        component: 'containerDays'
    }

    const errorInfo = {
        parent: 'mainPage',
        name: 'errorInfo',
        url: '/error?status/search?city',
        component: 'errorInfo'
    }

    urlRouterProvider.otherwise('/');
    provider.state(startPage);
    provider.state(mainPage);
    provider.state(searchCity);
    provider.state(errorInfo);
}];

export default config;