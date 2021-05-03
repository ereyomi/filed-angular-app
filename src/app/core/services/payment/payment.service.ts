import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/welcome/welcome-form/models/users-model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private resquestS: RequestService) { }
  /* makePaymentRequest(data: UserModel): Observable<any> {
    this.resquestS.get()
  } */
}
