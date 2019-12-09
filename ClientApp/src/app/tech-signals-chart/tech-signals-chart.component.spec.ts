import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSignalsChartComponent } from './tech-signals-chart.component';

describe('TechSignalsChartComponent', () => {
  let component: TechSignalsChartComponent;
  let fixture: ComponentFixture<TechSignalsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSignalsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSignalsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
