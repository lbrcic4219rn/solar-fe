import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPricesComponent } from './element-prices.component';

describe('ElementPricesComponent', () => {
  let component: ElementPricesComponent;
  let fixture: ComponentFixture<ElementPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementPricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
