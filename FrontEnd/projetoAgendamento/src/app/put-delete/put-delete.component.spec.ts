import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDeleteComponent } from './put-delete.component';

describe('PutDeleteComponent', () => {
  let component: PutDeleteComponent;
  let fixture: ComponentFixture<PutDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
