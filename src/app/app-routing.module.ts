import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list/list.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'search/:query', component: ListComponent }
    ]
  },
  { path: 'other', component: OtherComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }