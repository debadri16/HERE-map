import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() { }

  private closeBtn = true;

  public ngOnInit() {
  }

  public closeBtnMethod(){
    this.closeBtn = false;
    console.log('list view closed- ' + this.closeBtn);
  }

  public openListViewMethod(){
    this.closeBtn = true;
    console.log('list view opened');
  }

}
