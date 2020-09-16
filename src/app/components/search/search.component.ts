import { Component, OnInit } from '@angular/core';
import { PayloadService, PaginationService} from '../../services'
@Component({
  selector: 'spacex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchKey = '';
  
  constructor(private _service:PayloadService, private _paginationService:PaginationService, ) { }

  ngOnInit(): void {
  }

  search(event) {
    event.preventDefault();
    let queryString = this._service.buildQuery({searchKey:this.searchKey});
    // console.log(queryString);
    this._service.fetchData(queryString);

    let paginationQueryString = this._paginationService.buildPaginationQuery({searchKey:this.searchKey});
    // console.log(paginationQueryString);
    this._paginationService.fetchPaginationData(paginationQueryString);
  }

}
