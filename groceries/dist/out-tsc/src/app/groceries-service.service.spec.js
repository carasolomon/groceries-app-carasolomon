import { TestBed } from '@angular/core/testing';
import { GroceriesServiceService } from './groceries-service.service';
describe('GroceriesServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GroceriesServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=groceries-service.service.spec.js.map