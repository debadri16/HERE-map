import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from './map.service';
import { Router } from '@angular/router';
import { ShopsService } from '../shops/shops.service';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private ui: any;
  private search: any;
  platform: any;
  map: any;

  //if current location access is granted
  private isCurrentLocation = 0;

  @ViewChild("map") public mapElement: ElementRef;

  //appid ar code backend e dite hbe, pore dekha jabe
  public appId = "9eCYLcch1N6RN5sLPNTw";
  public appCode = "fqyDW0mXNeK4vXYo_Cis4w";

  public nearbyShops: any;

  constructor(private mapService: MapService, private router: Router, public shopService: ShopsService) {
    this.mapService.onCurrentLocation.subscribe(
      () => {
        this.map.setCenter({ lat: this.mapService.lat, lng: this.mapService.lng });
        this.map.setZoom(15);
        this.dropCurrentLocationMarker({ lat: this.mapService.lat, lng: this.mapService.lng }, "Your Location... Mate");
        this.isCurrentLocation = 1;

        //nearby shops details load near current location
        this.shopService.getShops().subscribe(
          (res) => {
            this.nearbyShops = res;
            //console.log(res);
            for (let i = 0; i < this.nearbyShops.length; i++) {
              this.dropShopMarker({ "lat": this.nearbyShops[i].latitude, "lng": this.nearbyShops[i].longitude }, this.nearbyShops[i]);
            }
          }
        );
      }
    );

    this.mapService.onSearch.subscribe(
      (query) => {
        return this.places(query);
      }
    );

  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
  }

  public ngAfterViewInit() {
    //console.log("afterview");
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 16,
        center: { lat: this.mapService.lat, lng: this.mapService.lng }
      }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);

    //nearby shops details load when current location is now known
    this.shopService.getShops().subscribe(
      (res) => {
        this.nearbyShops = res;
        //console.log(this.nearbyShops[0].id);
        for (let i = 0; i < this.nearbyShops.length; i++) {
          this.dropShopMarker({ "lat": this.nearbyShops[i].latitude, "lng": this.nearbyShops[i].longitude }, this.nearbyShops[i]);
        }
      }
    );
  }

  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());

    if (this.isCurrentLocation === 1) {
      this.dropCurrentLocationMarker({ lat: this.mapService.lat, lng: this.mapService.lng }, "Your Location... Mate");
    }

    this.search.request(
      { "q": query, "at": this.mapService.lat + "," + this.mapService.lng },
      {},
      (data) => {
        this.mapService.onLoaded.emit(data.results.items);
        for (let i = 0; i < data.results.items.length; i++) {
          this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
        }
        this.mapService.onLoaded.complete();
      },
      (error) => {
        console.error(error);
      });
  }

  private dropMarker(coordinates: any, data: any) {
    let marker = new H.map.Marker(coordinates);
    marker.setData("<p>" + data.title + "<br>" + data.vicinity + "</p>");
    marker.addEventListener('tap', event => {
      let bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

  private dropCurrentLocationMarker(coordinates: any, data: any) {
    var pngIcon = new H.map.Icon("http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png", { size: { w: 40, h: 40 } });
    let marker = new H.map.Marker(coordinates,
      {
        icon: pngIcon
      });
    marker.setData("<p>" + data + "</p>");
    marker.addEventListener('tap', event => {
      let bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

  private dropShopMarker(coordinates: any, data: any) {
  
    var pngIcon = new H.map.Icon("https://cdn3.iconfinder.com/data/icons/map-locations-flat-pixel-perfect/64/pin-map-location-11-512.png", { size: { w: 40, h: 40 } });
    let marker = new H.map.Marker(coordinates,
      {
        icon: pngIcon
      });
    marker.setData("<p>" + data.name + "</p><br>Type: " + data.type);
    marker.addEventListener('tap', event => {
      let bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }
}