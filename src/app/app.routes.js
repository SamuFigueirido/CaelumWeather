const config = ['$urlRouterProvider','$stateProvider', function(urlRouterProvider, provider) {
    const startPage = {
        name: 'startPage',
        url: '/',
        component: 'startPage'
    }

    const mainPage = {
        name: 'mainPage',
        url: '/search?city',
        component: 'mainPage'
    }

    const errorPage = {
        name: 'errorPage',
        url: '/error404NotFound',
        component: 'errorPage'
    }

    urlRouterProvider.otherwise('/');
    provider.state(startPage);
    provider.state(mainPage);
    provider.state(errorPage);
}];

export default config;