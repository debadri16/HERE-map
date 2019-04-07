import { Component, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HereMapComponent } from './here-map/here-map.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public query: string;

    public lat : any;
    public lng : any;


    @ViewChild("map")
    public mapElement: HereMapComponent;
    
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position: Position) => {
            if (position) {
              this.lat = position.coords.latitude.toString();
              this.lng = position.coords.longitude.toString();
              console.log("Latitude: " + this.lat +
                "Longitude: " + this.lng);

                //send the current location data
                this.mapElement.lat = this.lat;
                this.mapElement.lng = this.lng;
                this.mapElement.def = "1";
            }
          },
            (error: PositionError) => console.log(error));
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
    
    showBarcelona(){
        this.lat = "41.3851";
        this.lng = "2.1734";
    }

    constructor() {
        this.query = "starbucks";
        this.showBarcelona();
        this.getLocation();
        
    }

    public ngOnInit() {
        // this.getLocation();
     }


}