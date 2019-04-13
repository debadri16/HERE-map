import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapService } from '../map/map.service';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private http: HttpClient, private mapService: MapService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getShops(): Observable<any> {
    //API to get location
    let getNearbyShopsURL = 'http://localhost:8080/shop/getByLocation?latitude='+this.mapService.lat+'&longitude='+this.mapService.lng;

    //console.log('service log ' + this.mapService.lat + " " + this.mapService.lng);
    return this.http.get(getNearbyShopsURL);
  }
}
