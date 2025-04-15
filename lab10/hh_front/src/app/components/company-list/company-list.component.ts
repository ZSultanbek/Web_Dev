import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Company, Vacancy } from '../../interfaces';
@Component({
  selector: 'app-company-list',
  imports: [CommonModule],
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedVacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.apiService.getCompanyVacancies(companyId).subscribe(data => {
      this.selectedVacancies = data;
    });
  }
}
