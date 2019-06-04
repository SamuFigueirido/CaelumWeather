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
            this.lastSearchesService.saveCity(this.param);
        }
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(response => {
                response.forEach(element => {
                    this.nearbyCities.push(element.name);
                });
            })
            .catch(response => {
                console.log('There are no nearby cities');
            });
        this.openWeatherMapsService.getCurrentWeather(this.param)
            .then(response => {
                let cont = -1;
                const name = response.city.name;
                const country = response.city.country;
                response.list.forEach(element => {
                    let flag = false;
                    const currentDay = new Date(element.dt * 1000).getDate();
                    this.days.forEach(day => {
                        if (day.day === currentDay) {
                            flag = true;
                        }
                    });

                    let value = this.nameDays[new Date(element.dt * 1000).getDay()];

                    if (!flag) {
                        cont++;
                        this.days.push({
                            main: element.dt * 1000,
                            day: currentDay,
                            dayTitle: value,
                            city: {
                                name,
                                country
                            },
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
            })
            .catch(response => {
                console.log('There is no weather for this city');
            });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService'];