import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapService } from './map/map.service';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        SearchMapComponent,
        NearbyShopsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [MapService],
    bootstrap: [AppComponent]
})
export class AppModule { }