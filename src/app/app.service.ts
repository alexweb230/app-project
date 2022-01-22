import { SecondService } from './second.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private secondService: SecondService) { }

  sum(a: number, b: number){
    const res = a + b;
    return res;
  }

  check(): boolean {
   return this.secondService.check();
  }
}
