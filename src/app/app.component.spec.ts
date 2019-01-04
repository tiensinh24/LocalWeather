import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherService } from './weather/weather.service';
import { WeatherServiceFake } from './weather/weather.service.fake';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        CurrentWeatherComponent
      ],
      providers: [
        { provider: WeatherService, useClass: WeatherServiceFake }
      ]
    }).compileComponents();
  }));
});
