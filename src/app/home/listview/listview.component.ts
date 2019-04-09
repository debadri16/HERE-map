import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() {this.closeBtnClick = true; }

  ngOnInit() {
  }

  public closeBtnClick: boolean;

  onClose(){
    this.closeBtnClick = false;
  }

}
