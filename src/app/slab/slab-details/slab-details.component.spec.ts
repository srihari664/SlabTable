import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabDetailsComponent } from './slab-details.component';

describe('SlabDetailsComponent', () => {
  let component: SlabDetailsComponent;
  let fixture: ComponentFixture<SlabDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlabDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
