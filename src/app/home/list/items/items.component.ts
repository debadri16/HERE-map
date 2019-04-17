import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() data : any;

  public title : any;

  constructor() { }

  ngOnInit() {
//    console.log(this.data);

//    this.title = this.data['name'];
  }

}
