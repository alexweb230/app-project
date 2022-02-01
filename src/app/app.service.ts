import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testArray_2, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  items = testArray_2

  constructor() { }


  getData(): Observable<User[]> {
    const res = of(this.items);
    return res
  }


}
