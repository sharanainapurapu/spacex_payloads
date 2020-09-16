import { Component, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as Templates from './templates';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('dynamicSlot', { read: ViewContainerRef, static: false }) dynamicSlot: ViewContainerRef;
  private factory;
  private compRef;
  public showFooter:boolean = false;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _resolver: ComponentFactoryResolver,
    private cdRef : ChangeDetectorRef
  ) {
    // console.log("LayoutComponent: constructor", this);
  }

  ngOnInit(): void {
    if (this._activateRoute.snapshot.data["showFooter"]) {
      this.showFooter = true;
    }
  }

  ngAfterViewInit() {
    this.dynamicSlot.clear();
    let template = Templates[this._activateRoute.snapshot.data['template']];
    this.factory = this._resolver.resolveComponentFactory(template);

    console.log("LayoutComponent: ngOnInit factory", this.factory);
    console.log("LayoutComponent: ngOnInit this.dynamicSlot", this.dynamicSlot);        
    console.log("LayoutComponent: ngOnInit template", template);

    this.compRef = this.dynamicSlot.createComponent(this.factory);
    console.log("LayoutComponent: ngOnInit ref", this.compRef);
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.compRef.destroy(); 
   }

}
