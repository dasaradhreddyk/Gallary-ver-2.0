import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http'
import { CHARACTERS } from './mock-data';
import { concat } from 'rxjs';

@Injectable()
export class AdventureTimeService {

    public http: HttpClient;
    public data: WeatherForecast[];
    public CHARACTERS: any[];
    constructor(http: HttpClient) {
        this.http = http;
        http.get < WeatherForecast[]>('/api/data/GetUserData?input=rise').subscribe
            (
            result => {
                this.data = result; 
                console.log(this.data);
                this.data.forEach(function (element) {
                    CHARACTERS.push(element);
                });
                
                CHARACTERS.push(this.data[0]);
            }, error => console.error(error));
    
    }

    getCharacters(val): Observable<WeatherForecast[]>{
        var url = "/api/data/GetUserData?input=" +val;

        this.http.get<WeatherForecast[]>(url).subscribe
            (
            result => {
                this.data = result;
                console.log(this.data);
                this.data.forEach(function (element) {
                    CHARACTERS.push(element);
                });

                CHARACTERS.push(this.data[0]);
            }, error => console.error(error));
        return Observable.of(CHARACTERS).delay(100);
  }

  getColumns(): string[]{
    return ["name", "age", "species", "occupation","info1","info2"]
  }

}

interface WeatherForecast {
    name: string;
    age: string ;
    species: number;
    occupation: string;
}