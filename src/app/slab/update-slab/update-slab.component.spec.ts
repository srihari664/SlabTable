import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSlabComponent } from './update-slab.component';

describe('UpdateSlabComponent', () => {
  let component: UpdateSlabComponent;
  let fixture: ComponentFixture<UpdateSlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
