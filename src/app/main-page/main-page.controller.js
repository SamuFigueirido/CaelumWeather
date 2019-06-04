export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService, openWeatherMapsService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.nearbyCities = [];
        this.days = [];
        this.nameDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
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
                let cont = -1;
                response.forEach(element => {
                    let flag = false;
                    const day = new Date(element.dt * 1000).getDate();
                    this.days.forEach(item => {
                        if (item.day === day) {
                            flag = true;
                        }
                    });

                    let value = this.nameDays[new Date(element.dt * 1000).getDay()];

                    if (!flag) {
                        cont++;
                        this.days.push({
                            main: element.dt * 1000,
                            day: day,
                            dayTitle: value,
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
                            main: element.weather[0].main,
                            description: element.weather[0].description,
                            icon: element.weather[0].icon
                        },
                        clouds: element.clouds.all,
                        wind: {
                            speed: element.wind.speed,
                            direction: element.wind.deg
                        }
                    };
                    this.days[cont].hours.push(hourObject);
                });
                this.days[0].dayTitle = 'TODAY';
                this.days[1].dayTitle = 'TOMORROW';
                console.log('Days:', this.days);
            })
            .catch(response => {
                console.log('There is no weather for this city');
            });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService'];