import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  showPassword=false;
  log:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  onToggling(){
    this.showPassword=!this.showPassword;
    //this.log.push(this.log.length + 1);
    this.log.push( new Date());
  }

}
