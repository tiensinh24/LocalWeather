import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.less']
})
export class CitySearchComponent implements OnInit {
  search: FormControl;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.search = new FormControl('', Validators.minLength(2));

    this.search.valueChanges.pipe(debounceTime(1000))
      .subscribe((searchValues: string) => {
        if (searchValues) {
          const userInput = searchValues.split(',').map(s => s.trim());

          this.weatherService.getCurrentWeather(
            userInput[0],
            userInput.length > 1 ? userInput[1] : undefined
          ).subscribe(data => {
            this.weatherService.currentWeather.next(data);
          });
        }
      });
  }

}
