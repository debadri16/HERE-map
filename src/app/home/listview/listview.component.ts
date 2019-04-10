import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor(private router: Router){}

  public ngOnInit() {
  }

  public closeListView(){
    this.router.navigate(['/home']);
    console.log('list view closed');
  }


}
