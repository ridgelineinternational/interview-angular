import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpendingApiService } from '../spending-api.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'ri-interview-spending-overview',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule
  ],
  templateUrl: './spending-overview.component.html',
  styleUrl: './spending-overview.component.css',
  providers: [SpendingApiService]
})
export class SpendingOverviewComponent {
  constructor(public readonly spendingApi: SpendingApiService){}
}
