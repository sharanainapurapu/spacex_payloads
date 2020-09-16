import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spacex-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  public details;
  public hasHeader:boolean = true;
  
  constructor(private location: Location, config: NgbCarouselConfig) {  
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  

  ngOnInit(): void {
    //console.log(window.history.state)
    console.log(this.location.getState())
    this.details = this.location.getState();
  }

}
