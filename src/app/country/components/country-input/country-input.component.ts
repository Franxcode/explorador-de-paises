import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { CountrySmall } from '../../interfaces/country-small.interface';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  miFormulario: FormGroup = this.fb.group({
    pais: ['', Validators.required],
  });

  paises: CountrySmall[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });

    this.countryService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
