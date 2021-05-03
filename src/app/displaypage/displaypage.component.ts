import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserState } from '../welcome/store/user-state';
import { getPaymentSelector } from '../welcome/store/welcome-reducer';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.scss']
})
export class DisplaypageComponent implements OnInit {

  paymentData!: any;
  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.pipe(select(getPaymentSelector)).subscribe(payment => {
      this.paymentData = payment;
    });
  }

}
