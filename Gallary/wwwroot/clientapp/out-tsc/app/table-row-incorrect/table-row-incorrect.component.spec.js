import { async, TestBed } from '@angular/core/testing';
import { TableRowIncorrectComponent } from './table-row-incorrect.component';
describe('TableRowIncorrectComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TableRowIncorrectComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TableRowIncorrectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=table-row-incorrect.component.spec.js.map