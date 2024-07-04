import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGroceryItemPage } from './add-grocery-item.page';

describe('AddGroceryItemPage', () => {
  let component: AddGroceryItemPage;
  let fixture: ComponentFixture<AddGroceryItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
