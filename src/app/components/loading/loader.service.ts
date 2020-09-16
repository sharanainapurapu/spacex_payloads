import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {

  public displayLoader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

}
