import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) {

  }

  ngOnInit() {
  }

  async normalAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { console.log("Cancel") }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { console.log("OK") }
        }
      ]
    });

    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself'
        }
      ],
      buttons: [
        {
          text: "Ok",
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

}
