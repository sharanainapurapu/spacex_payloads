import { Component, OnInit } from '@angular/core';

import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spacex-loader',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loaderSub: Subscription;
  show: boolean;

  constructor(public loaderService: LoaderService) {
    this.show = false;
  }

  ngOnInit() {
    this.loaderSub = this.loaderService.displayLoader
      .subscribe((showLoader: boolean) => {
        this.show = showLoader;
      })
  }

}
