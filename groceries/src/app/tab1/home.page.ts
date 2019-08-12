import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // Item list with quantity of each
  title = 'Grocery';

  // tslint:disable-next-line: max-line-length
  constructor(public toastCtrl: ToastController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService, public socialSharing: SocialSharing) { }

  // Load items list
  loadItems() {
    return this.dataService.getItems();
  }
  // Share items from list
  async shareItem(item, index) {
    console.log('Sharing item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Sharing item - ' + index + '...',
      duration: 3000
    });
    toast.present();

    const message = 'Grocery Item - Name: ' +  item.name + ' Quantity: ' + item.quantity;
    const subject = 'Shared via Groceries App';
    this.socialSharing.share(message, subject).then(() => {
      // Success!
      console.log('Shared successfully');
    }).catch(() => {
      // Error!
      console.error('Share was unsuccesful');
    });
  }
  // Delete items from list
  async deleteItem(item, index) {
    console.log('Deleting item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Deleting item - ' + index + '...',
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  addItem() {
    console.log('Adding item - ');
    this.inputDialogService.showItem();
  }

  async editItem(item, index) {
    console.log('Editing item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing item - ' + index + '...',
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showItem(item, index);
  }
}
