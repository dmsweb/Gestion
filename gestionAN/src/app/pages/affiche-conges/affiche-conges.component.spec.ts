import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCongesComponent } from './affiche-conges.component';

describe('AfficheCongesComponent', () => {
  let component: AfficheCongesComponent;
  let fixture: ComponentFixture<AfficheCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
