import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIEndpointComponent } from './api-endpoint.component';

describe('APIEndpointComponent', () => {
  let component: APIEndpointComponent;
  let fixture: ComponentFixture<APIEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIEndpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
