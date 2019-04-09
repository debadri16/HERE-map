import { Component, OnInit } from '@angular/core';
import { MapService } from './map/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(){}

  constructor(private mapService: MapService) {
    //marcus hill(dick) location
    this.mapService.lat = "-38.2593118";
    this.mapService.lng = "144.5779386";
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
