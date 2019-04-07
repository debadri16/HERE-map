import { Component } from '@angular/core';
import { MapService } from './map/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private mapService: MapService) {
    this.mapService.lat = "41.3851";
    this.mapService.lng = "2.1734";
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.mapService.lat = position.coords.latitude.toString();
          this.mapService.lng = position.coords.longitude.toString();
          this.mapService.onCurrentLocation.emit();
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}