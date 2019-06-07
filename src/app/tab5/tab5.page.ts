import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Payment} from '../Models/payment.model';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})


export class Tab5Page implements OnInit {

  public payments: Array<Payment> =[];

  constructor(
      private navCtrl: NavController
      ) {
        let payment1=new Payment();

        payment1.amount= "Credit Card";

      

        this.payments.push(payment1)
        

      }
      
      ngOnInit() {
      }
      navToLogin() {

        this.navCtrl.navigateForward('');
      }
    
      navToCheckout() {
        this.navCtrl.navigateForward('checkout')
      }
    }