import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapService } from './map/map.service';
import { ShopsComponent } from './shops/shops.component';
import { ShopsService } from './shops/shops.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        SearchMapComponent,
        ShopsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [MapService, ShopsService],
    bootstrap: [AppComponent]
})
export class AppModule { }