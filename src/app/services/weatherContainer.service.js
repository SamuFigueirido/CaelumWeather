export default class OpenWeatherMapsService {
    constructor() {
        this.days = [];
        this.nameDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    }

    getListToShow(response) {
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
        this.days[0].dayTitle = 'TODAY';
        this.days[1].dayTitle = 'TOMORROW';

        return this.days;
    }
}

OpenWeatherMapsService.$inject = [];