import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { STATES } from '../data/states';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent {
  
  states$ = Observable.create(observer => {
      observer.next(STATES);
      observer.complete();
  })

   trackById(index: number, item: any) {
     return item.id;
  }
}