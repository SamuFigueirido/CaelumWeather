const config = ['$stateProvider', function(provider) {
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

    provider.state(startPage);
    provider.state(mainPage);
}];

export default config;