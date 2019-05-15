const config = ['$urlRouterProvider','$stateProvider', function(urlRouterProvider, provider) {
    const startPage = {
        name: 'startPage',
        url: '/',
        component: 'startPage'
    }

    const mainPage = {
        name: 'mainPage',
        url: '/city',
        component: 'mainPage'
    }

    urlRouterProvider.otherwise('/');
    provider.state(startPage);
    provider.state(mainPage);
}];

export default config;