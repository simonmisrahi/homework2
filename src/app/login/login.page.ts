import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(
    private navCtrl: NavController,
  ) {}
  
        
        ngOnInit() {
          console.log('in ngoninit');
        }
        navToExplore() {
            this.navCtrl.navigateForward('tabs');
          }
        navToRegister(){
          this.navCtrl.navigateForward('register');
        }
  

}

