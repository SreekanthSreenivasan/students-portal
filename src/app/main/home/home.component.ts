import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main-service/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  showPrimary = true;
  showSecondary = true;
  details$!: Observable<any>;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getAllStudentDetails();
  }

  getAllStudentDetails() {
    this.details$ = this.mainService.getAll();
  }

  filterData() {
    this.filteredData = this.data.filter((item) => {
      const isPrimary = this.showPrimary && item.type === 'primary';
      const isSecondary = this.showSecondary && item.type === 'secondary';
      return isPrimary || isSecondary;
    });
  }
  check(item: any) {
    console.log('selected item', item);
  }

  deleteItem(item: any) {
    this.mainService.deleteData(item).subscribe((data: any) => {
      console.log(data);
      this.getAllStudentDetails();
    });
  }
}
