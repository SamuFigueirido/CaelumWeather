export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService, openWeatherMapsService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.nearbyCities = [];

        this.nameDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        this.weatherDays = [];
        this.days = [];
    }

    $onInit() {
        this.lastSearches = this.lastSearchesService.getCities();
        if (this.$state.params.city) {
            this.param = this.$state.params.city;
        }
        this.lastSearchesService.saveCity(this.param, this.lastSearchesService.getCities());
        this.$state.go('mainPage', {
            city: this.param
        });
        let cities = [];
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(function (response) {
                response.forEach(element => {
                    cities.push(element.name);
                });
            })
            .catch(function (response) {
                console.log('There are no nearby cities');
            });
        this.nearbyCities = cities;
        console.log('Cities: ', cities);

        this.openWeatherMapsService.getCurrentWeather(this.param)
            .then(response => {
                console.log('Length:', response.length);
                const days = [];
                let cont = -1;
                response.forEach(element => {
                    let flag = false;
                    const day = new Date(element.dt * 1000).getDate();
                    days.forEach(item => {
                        if (item.day === day) {
                            flag = true;
                        }
                    });
                    if (!flag) {
                        cont++;
                        days.push({
                            main: element.dt * 1000,
                            day: day,
                            hours: []
                        })
                    };
                    const hourObject = {
                        hour: (element.dt * 1000),
                        temperature: {
                            main: element.main.temp,
                            temp_max: element.main.temp_max,
                            temp_min: element.main.temp_min
                        },
                        humidity: element.main.humidity,
                        weather: {
                            main: element.weather.main,
                            description: element.weather.description,
                            icon: element.weather.icon
                        },
                        clouds: element.clouds.all,
                        wind: {
                            speed: element.wind.speed,
                            direction: element.wind.deg
                        }
                    };
                    days[cont].hours.push(hourObject);
                });
                days.forEach(day => {
                    // const date = new Date(day.main).getDate() + '/' + new Date(day.main).getMonth() + '/' + new Date(day.main).getFullYear();
                    const index = new Date(day.main).getDay() - 1;
                    let value = '';
                    switch (index) {
                        case 0:
                                value = 'TODAY';
                            break;
                        case 1:
                                value = 'TOMORROW';
                            break;
                        default:
                                value = this.nameDays[index];
                            break;
                    }
                    this.days.push(value);
                });

                console.log('Days:', days);
            })
        .catch(response => {
            console.log('There is no weather for this city');
        });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService'];