import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //API to get location
  private locationURL = 'http://192.168.1.213:8080/admin/getAll';

  getShops(): Observable<any> {
    return this.http.get(this.locationURL);
  }
}
