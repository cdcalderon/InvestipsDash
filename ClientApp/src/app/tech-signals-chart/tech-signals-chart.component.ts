import { Component, OnInit } from '@angular/core';
import { StockSignalsService } from '../demo/service/stock-signals.service';
import { Signal } from '../demo/domain/signals';

@Component({
  selector: 'app-tech-signals-chart',
  templateUrl: './tech-signals-chart.component.html',
  styleUrls: ['./tech-signals-chart.component.css']
})
export class TechSignalsChartComponent implements OnInit {

  signals: Signal[];
  selectedSignal: Signal;
  cols: any[];
  constructor(private stockSignalsService: StockSignalsService) { }

  ngOnInit() {
    this.cols = [
      { field: 'symbol', header: 'Symbol' },
      { field: 'signalType', header: 'Type' },
      { field: 'direction', header: 'Direction' }
  ];

    this.stockSignalsService.getSignalSmall()
    .then(
      signals => this.signals = signals
      );
  }

}
