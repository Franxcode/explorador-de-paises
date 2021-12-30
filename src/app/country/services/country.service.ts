import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountrySmall } from '../interfaces/country-small.interface';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private _baseUrlPaises: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaises(): Observable<CountrySmall[]> {
    const url: string = `${this._baseUrlPaises}/all?fields=name`;
    return this.http.get<CountrySmall[]>(url);
  }
}
