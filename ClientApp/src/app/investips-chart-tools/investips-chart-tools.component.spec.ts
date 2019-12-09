import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestipsChartToolsComponent } from './investips-chart-tools.component';

describe('InvestipsChartToolsComponent', () => {
  let component: InvestipsChartToolsComponent;
  let fixture: ComponentFixture<InvestipsChartToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestipsChartToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestipsChartToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
