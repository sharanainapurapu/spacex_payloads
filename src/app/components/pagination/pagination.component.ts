import { Component, OnInit } from '@angular/core';
import { PaginationService, PayloadService } from 'src/app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spacex-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public currentPage:number = 1;
  private responseSubscription:Subscription;
  public list;
  public numberOfPages = 0;
  public pagesArray = [];

  constructor(private _paginationService:PaginationService, 
    private _service: PayloadService) { }

  ngOnInit(): void {
    let queryString = this._paginationService.buildPaginationQuery({});    
    console.log("pagination", queryString);
    this._paginationService.fetchPaginationData(queryString);
    this.responseSubscription = this._paginationService.paginationRes.subscribe((response)=>{    
      this.list = response;
      if(response && response.launchesPast) { 
        this.numberOfPages = Math.ceil(response.launchesPast.length/10);
        this.pagesArray = Array(this.numberOfPages).fill(0).map((x,i)=>i+1);
      }
    });    
  }

  getData(page:number) {
    this.currentPage = page;
    let queryString = this._service.buildQuery({offset:((page-1)*10)});
    console.log("pagination", queryString);
    this._service.fetchData(queryString);
  }

  ngOnDestroy(): void {
    this.responseSubscription.unsubscribe();
  }
  
}
