import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartSidebarService {
  isCartOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {}
}
