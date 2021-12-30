import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { MonedaComponent } from './country/pages/currency/moneda.component';
import { DescripcionComponent } from './country/pages/description/descripcion.component';
import { NoticiasComponent } from './country/pages/news/noticias.component';
import { ClimaComponent } from './country/pages/weather/clima.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'descripcion', component: DescripcionComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'moneda', component: MonedaComponent },
  { path: 'clima', component: ClimaComponent },
  // { path: 'pais/:id', component: VerPaisComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
