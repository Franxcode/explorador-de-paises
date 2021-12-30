import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-drop-down-list',
  templateUrl: './country-drop-down-list.component.html',
  styleUrls: ['./country-drop-down-list.component.css'],
})
export class CountryDropDownListComponent {
  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.countryService.buscarPais(this.termino).subscribe(
      (countries) => {
        this.countries = countries;
        console.log(countries[0].name);
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
