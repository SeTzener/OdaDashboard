import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { DashboardApiClient } from 'src/app/api/apiClient';
import { ProductType } from 'src/app/api/models/productType';
import { OdaProducts, Item } from 'src/app/api/models/odaProductsModel';
import { SharedDataService } from '../../services/shared-data.service';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexPlotOptions,
    ApexFill,
    NgApexchartsModule,
} from 'ng-apexcharts';
import { PaginationComponent } from '../pagination/pagination.component';

export interface SalesChartOption {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    grid: ApexGrid;
}

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule, NgApexchartsModule, CommonModule, PaginationComponent],
  templateUrl: './sales-overview.component.html',
})

export class AppSalesOverviewComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public SalesChartOption!: Partial<SalesChartOption> | any;
  private currentPage: number
  paginationLength = 0;
  paginationPageSize = 15;

  constructor(
    private apiClient: DashboardApiClient,
    private sharedDataService: SharedDataService,
  ) {
    this.currentPage = 1
    this.selectedOption = 'eple';
  }

  selectedOption: string;

  dropdownOptions = [
    { value: 'eple', label: 'Eple' },
    { value: 'melk', label: 'Melk' },
    { value: 'sitron', label: 'Sitron' },
  ];

  ngOnInit(): void {
    this.loadData();
  }

  onDropdownChange(): void {
    this.currentPage = 1
    this.loadData();
  }

  onPageChange(page: number): void {
    console.log('New page:', page);
    this.currentPage = page;
    this.loadData();
  }

  loadData(): void {
    const query = this.selectedOption;
    const type = ProductType.Mixed;
    this.sharedDataService.meta$.subscribe((attributes) => {
      this.paginationPageSize = attributes.items / 2;
    });

    this.apiClient.searchMixedProducts(type, query, this.currentPage).subscribe({
      next: (response: OdaProducts) => {
        var items = response.items.filter((item) => item.attributes.name && item.attributes.gross_price).slice(0, 15)
        this.updateChart(items);
        this.sharedDataService.setItems(items, response.attributes); // Share the data
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  updateChart(items: Item[]): void {
    const chartData = items
      .map((item) => ({
        name: item.attributes.name.length > 20 ? item.attributes.name.slice(0, 20) + '...' : item.attributes.name,
        gross: parseFloat(item.attributes.gross_price),
        grossUnit: parseFloat(item.attributes.gross_unit_price),
      }));

    this.SalesChartOption = {
      series: [
        {
          name: 'Gross Price',
          data: chartData.map((item) => item.gross),
          color: '#fb9678',
        },
        {
          name: 'Unit Gross Price',
          data: chartData.map((item) => item.grossUnit),
          color: '#03c9d7',
        },
      ],
      xaxis: {
        categories: chartData.map((item) => item.name),
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        show: true,
        max: 100,
      },
      chart: {
        toolbar: { show: false },
        type: 'bar',
        foreColor: '#adb0bb',
        fontFamily: "'DM Sans',sans-serif",
        height: 305,
      },
      legend: { show: false },
      tooltip: { theme: 'dark' },
      grid: {
        show: true,
        borderColor: 'transparent',
        strokeDashArray: 2,
        padding: { left: 0, right: 0, bottom: 0 },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 5, colors: ['none'] },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '42%', borderRadius: 5 },
      },
    };
  }
}
