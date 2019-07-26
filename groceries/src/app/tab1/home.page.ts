import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // Item list with quantity of each
  title = 'Grocery';

  // tslint:disable-next-line: max-line-length
  constructor(public toastCtrl: ToastController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) { }

  // Load items list
  loadItems() {
    return this.dataService.getItems();
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
