import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../interfaces';
import { Observable, of } from 'rxjs';

export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle'
    };

    public getCurrentWeather(search: string | number, country: string)
        : Observable<ICurrentWeather> {
            // 'of' create an observable
            return of(this.fakeWeather);
        }
}
