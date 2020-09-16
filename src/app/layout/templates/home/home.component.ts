import { Component, OnInit } from '@angular/core';
import { Launches } from '../../../interface/payload.interface';
import { PayloadService } from '../../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit{
  public list:Launches;
  public hasHeader:boolean = false;
  public responseSubscription:Subscription;

  constructor(private _service : PayloadService) {}

  ngOnInit(): void {
    let queryString = this._service.buildQuery({});
    console.log(queryString);
    this._service.fetchData(queryString);
    this.responseSubscription = this._service.responseObject.subscribe((response)=>{    
      this.list = response;
    })
  }
}
