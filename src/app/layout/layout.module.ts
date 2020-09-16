import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as Templates from './templates';
import * as Components from '../components';
import * as Services from '../services';
import { LayoutComponent } from './layout.component';
import { RouterModule } from "@angular/router";
import { LoaderService } from '../components/loading/loader.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LayoutComponent,
    Components.HeaderComponent,
    Components.PaginationComponent,
    Components.LoadingComponent,
    Components.SearchComponent,
    Templates.HomeComponent,
    Templates.DetailsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgbCarouselModule
  ],
  entryComponents: [
    Components.HeaderComponent,
    Components.PaginationComponent,
    Components.LoadingComponent,
    Components.SearchComponent,
    Templates.HomeComponent,
    Templates.DetailsComponent    
  ],
  providers: [
    Services.PayloadService,
    LoaderService
  ]
})
export class LayoutModule { }
