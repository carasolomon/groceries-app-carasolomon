import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: GroceriesServiceService) { }

  // Add/Edit items in list
async showItem(item?, index?) {
  console.log('Editing an item');
  const alert = await this.alertController.create({
      header: item ? 'Edit Item' : 'Add Item',
      message: item ? 'Edit Item and/or Quantity...' : 'Enter Item and Quantity',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          // tslint:disable-next-line: no-shadowed-variable
          handler: (item) => {
            console.log('Saving item...', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
          } else {
              this.dataService.addItem(item);
            }
        }
      }
      ]
    });
  await alert.present();
  }
}
