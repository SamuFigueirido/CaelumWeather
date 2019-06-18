export default class OpenWeatherMapsService {
    constructor($filter) {
        this.nameDays = [$filter('translate')('CONTAINER_DAYS.NAME_DAYS.SUNDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.MONDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.TUESDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.WEDNESDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.THURSDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.FRIDAY'), $filter('translate')('CONTAINER_DAYS.NAME_DAYS.SATURDAY')];
        this.today = $filter('translate')('CONTAINER_DAYS.NAME_DAYS.TODAY');
        this.tomorrow = $filter('translate')('CONTAINER_DAYS.NAME_DAYS.TOMORROW');
    }

    getListToShow(response) {
        this.days = [];
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
                temperature: element.main.temp,
                humidity: element.main.humidity,
                weather: element.weather[0],
                clouds: element.clouds.all,
                wind_speed: element.wind.speed
            };
            this.days[cont].hours.push(hourObject);
        });
        this.days[0].dayTitle = this.today;
        this.days[1].dayTitle = this.tomorrow;

        return this.days;
    }
}

OpenWeatherMapsService.$inject = ['$filter'];