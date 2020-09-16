import { Component, OnInit } from '@angular/core';
import { PayloadService } from '../../services/payload.service'
@Component({
  selector: 'spacex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchKey = '';
  
  constructor(private _service:PayloadService) { }

  ngOnInit(): void {
  }

  search(event) {
    event.preventDefault();
    let queryString = this._service.buildQuery({searchKey:this.searchKey});
    console.log(queryString);
    this._service.fetchData(queryString);
  }

}
