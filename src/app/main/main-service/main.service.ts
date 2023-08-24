import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`api/details`);
  }

  deleteData(item: any) {
    // const url = `api/details/${item.id}`;
    // console.log('chek url', url);
    // `api/data/items/${id}`
    console.log();
    return this.http.delete(`api/details/MOCK_STUDENTS_DETAILS/${item.id}`);
  }
}

// deleteHero(id: number): Observable<Hero> {
//   const url = `${this.heroesUrl}/${id}`;

//   return this.http.delete<Hero>(url, this.httpOptions).pipe(
//     tap(_ => this.log(`deleted hero id=${id}`)),
//     catchError(this.handleError<Hero>('deleteHero'))
//   );
// }
