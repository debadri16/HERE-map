import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MapComponent } from './home/map/map.component';
import { SearchMapComponent } from './home/search-map/search-map.component';
import { MapService } from './home/map/map.service';
import { ShopsComponent } from './home/shops/shops.component';
import { ShopsService } from './home/shops/shops.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './home/list/list.component';
import { ItemsComponent } from './home/list/items/items.component';
import { OtherComponent } from './other/other.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AddshopComponent } from './addshop/addshop.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        SearchMapComponent,
        ShopsComponent,
        HomeComponent,
        ListComponent,
        ItemsComponent,
        OtherComponent,
        LoadingSpinnerComponent,
        AddshopComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [MapService, ShopsService],
    bootstrap: [AppComponent]
})
export class AppModule { }