import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CountryDialCodeWithCurrencyModel } from '../../model/country-dial-code-with-currency-model';
import { RequestService } from '../request/request.service';


@Injectable({
  providedIn: 'root'
})
export class CountryDialCodeService {

  constructor(private resquestS: RequestService) { }
  getCountryDialCodes(): Observable<CountryDialCodeWithCurrencyModel[]> {
    return this.resquestS.get<CountryDialCodeWithCurrencyModel[]>('./assets/mock-data/countries-dial-with-currency.json');
  }
}
