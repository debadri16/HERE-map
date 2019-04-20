import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() data : any;

  public title : any;
  public type: any;
  public phn: any;
  public rating: any;

  constructor() { }

  ngOnInit() {
   console.log(this.data);

   this.title = this.data['name'];
   this.type = this.data['type'];
   this.phn = this.data['phoneNumber'];
   this.rating = this.data['rating'];
  }

}
