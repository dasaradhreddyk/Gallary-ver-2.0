import { TestBed, inject } from '@angular/core/testing';
import { AdventureTimeService } from './adventure-time.service';
describe('AdventureTimeService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AdventureTimeService]
        });
    });
    it('should be created', inject([AdventureTimeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=adventure-time.service.spec.js.map