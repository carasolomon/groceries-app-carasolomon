import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
var HomePage = /** @class */ (function () {
    function HomePage(toastCtrl, alertController, dataService) {
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.dataService = dataService;
        // Item list with quantity of each
        this.title = 'Grocery';
    }
    // Delete items from list
    HomePage.prototype.deleteItem = function (item, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Deleting item - ', item, index);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Deleting item - ' + index + '...',
                                duration: 5000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.dataService.removeItem(index);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Edit items in list
    HomePage.prototype.editItem = function (item, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Adding an item');
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Edit Item',
                                message: 'Edit Item and/or Quantity...',
                                inputs: [
                                    {
                                        name: 'name',
                                        placeholder: 'Name',
                                        value: item.name
                                    },
                                    {
                                        name: 'quantity',
                                        placeholder: 'Quantity',
                                        value: item.quantity
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Save',
                                        // tslint:disable-next-line: no-shadowed-variable
                                        handler: function (item) {
                                            console.log('Saving item...', item);
                                            _this.items[index] = item;
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Add items to list
    HomePage.prototype.addItem = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Adding an item');
                        return [4 /*yield*/, this.alertController.create({
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
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Save',
                                        handler: function (item) {
                                            console.log('Saving item...', item);
                                            _this.dataService.addItem(item);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController, AlertController, GroceriesServiceService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map