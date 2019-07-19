import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
// Item list with quantity of each
  title = 'Grocery';
  items = [
    {
      name: 'Cheese',
      quantity: 3
    },
    {
      name: 'Wine',
      quantity: 2
    },
    {
      name: 'Apples',
      quantity: 7
    },
    {
      name: 'Kale',
      quantity: 3
    },
    {
      name: 'Rice',
      quantity: 1
    },
    {
      name: 'Curry Mix',
      quantity: 2
    }
  ];

  constructor(public NavCtrl: NavController, public toastCtrl: ToastController, public alertController: AlertController) {}
// Delete items from list
  async deleteItem(item, index) {
    console.log('Deleting item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Deleting item - ' + index + '...',
      duration: 5000
    });
    toast.present();
    this.items.splice(index, 1);
  }
// Add items to list
  async addItem() {
    console.log('Adding an item');
    const alert = await this.alertController.create({
        header: 'Add Item',
        message: 'Enter Item and Quantity...',
        inputs: [
          {
            name: 'name',
            placeholder: 'Name'
          },
          {
            name: 'quantity',
            placeholder: 'Quantity'
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
            handler: (item) => {
              console.log('Saving item...', item);
              this.items.push(item);
            }
          }
        ]
      });
    await alert.present();
    }
  }
