import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public reportSubmitted = new BehaviorSubject([{}]);

  constructor() {}
}
