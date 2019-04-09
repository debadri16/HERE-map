import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  lat: string;
  lng: string;

  constructor() { }

  onCurrentLocation = new EventEmitter<{}>();
  onSearch = new EventEmitter<string>();
}
