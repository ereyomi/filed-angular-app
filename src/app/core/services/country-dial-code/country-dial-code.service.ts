import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestService } from '../request/request.service';

export interface CountryDialCodeModel {
  name: string;
  dial_code: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryDialCodeService {

  constructor(private resquestS: RequestService) { }
  getCountryDialCodes(): Observable<Array<CountryDialCodeModel>> {
    return this.resquestS.get('./assets/mock-data/countries-dial.json');
  }
}
