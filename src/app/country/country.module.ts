import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ByCountryComponent } from './pages/by-country/by-country.component';

import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { DescripcionComponent } from './pages/description/descripcion.component';
import { NoticiasComponent } from './pages/news/noticias.component';
import { MonedaComponent } from './pages/currency/moneda.component';
import { ClimaComponent } from './pages/weather/clima.component';
import { MapComponent } from './components/map/map.component';
import { CountryDropDownListComponent } from './components/country-drop-down-list/country-drop-down-list.component';

@NgModule({
  declarations: [
    ByCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
    DescripcionComponent,
    NoticiasComponent,
    MonedaComponent,
    ClimaComponent,
    MapComponent,
    CountryDropDownListComponent,
  ],
  exports: [
    ByCountryComponent,
    MapComponent,
    CountryDropDownListComponent,
    DescripcionComponent,
    NoticiasComponent,
    MonedaComponent,
    ClimaComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class CountryModule {}
