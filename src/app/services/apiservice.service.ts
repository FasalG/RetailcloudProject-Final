import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  meddataURL:any="https://keralastats.coronasafe.live/latest.json"
  cachedData: any;
  constructor(private http:HttpClient) { }

  getmedData(): Observable<any> {
    if (this.cachedData) {
      return of(this.cachedData);
    } else {
      return this.http.get<any>(this.meddataURL).pipe(
        map((data) => {
          this.cachedData = data;
          return data;
        }),
        catchError((error) => {
         console.log(error)
          return of(error);
        })
      );
    }
  }


  // getmedData(){
  //   return this.http.get<any>(this.meddataURL)
  // }
}




