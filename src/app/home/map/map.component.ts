import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from './map.service';
import { ListviewComponent } from '../listview/listview.component';

declare var H: any;

@Component({
  providers: [ListviewComponent],
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

  constructor(private mapService: MapService, private listView: ListviewComponent) {
    this.mapService.onCurrentLocation.subscribe(
      () => {
        this.map.setCenter({ lat: this.mapService.lat, lng: this.mapService.lng });
        this.map.setZoom(15);
        this.dropCurrentLocationMarker({ lat: this.mapService.lat, lng: this.mapService.lng }, "Your Location... Mate");
        this.isCurrentLocation = 1;
      }
    );
    this.mapService.onSearch.subscribe(
      (query) => {
        this.places(query);
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
  }

  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    if (this.isCurrentLocation === 1) {
      this.dropCurrentLocationMarker({ lat: this.mapService.lat, lng: this.mapService.lng }, "Your Location... Mate");
    }
    this.search.request({ "q": query, "at": this.mapService.lat + "," + this.mapService.lng }, {}, data => {
      this.listView.closeBtnMethod();
      for (let i = 0; i < data.results.items.length; i++) {
        this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
      }
    }, error => {
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
}