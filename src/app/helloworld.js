const config = ['$stateProvider', function(provider) {
    const hello = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }

    const world = {
        name: 'world',
        url: '/world',
        component: 'world'
    }
    
    provider.state(hello);
    provider.state(world);
}]

export default config;