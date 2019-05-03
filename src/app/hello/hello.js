import './hello.css';

export default {
    controller,
    bindings: {
        favorite: '<'
    },
    template: require('./hello.html')
};