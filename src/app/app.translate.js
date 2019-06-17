import en from '../resources/translations/en_US';
import es from '../resources/translations/es_ES';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
        'en_US*': 'en',
        'es_ES*': 'es',
        '*': 'en'
    })
    $translateProvider
        .translations('en', en)
        .translations('es', es)
        .determinePreferredLanguage()
        .fallbackLanguage('en');
}]