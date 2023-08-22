import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_STUDENTS_DB } from 'src/mock_db';

@Injectable({
  providedIn: 'root',
})
export class MockApiServiceService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return { students: MOCK_STUDENTS_DB };
  }

  // login(userName: string, password: any) {
  //   this.http
  //     .get<any>(`api/students?username=${userName}&password=${password}`)
  //     .subscribe((response) => {
  //       debugger;
  //       if (response.length > 0) {
  //         // Successful login
  //       } else {
  //         // Invalid credentials
  //       }
  //     });
  // }
}
