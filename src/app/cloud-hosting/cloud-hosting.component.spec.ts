import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudHostingComponent } from './cloud-hosting.component';

describe('CloudHostingComponent', () => {
  let component: CloudHostingComponent;
  let fixture: ComponentFixture<CloudHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
