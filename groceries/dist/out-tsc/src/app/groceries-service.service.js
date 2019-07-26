import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var GroceriesServiceService = /** @class */ (function () {
    function GroceriesServiceService() {
        this.items = [
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
    }
    GroceriesServiceService.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    GroceriesServiceService.prototype.editItem = function (item) {
    };
    GroceriesServiceService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GroceriesServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GroceriesServiceService);
    return GroceriesServiceService;
}());
export { GroceriesServiceService };
//# sourceMappingURL=groceries-service.service.js.map