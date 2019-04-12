import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list/list.component';
import { OtherComponent } from './other/other.component';
import { MapResolver } from './home/map/map-resolver.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'search', component: ListComponent, resolve: {places: MapResolver}
      }
    ]
  },
  { path: 'other', component: OtherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }