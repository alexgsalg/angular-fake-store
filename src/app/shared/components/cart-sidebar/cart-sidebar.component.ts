import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CartSidebarService } from './cart-sidebar.service';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ right: '-100%' }),
        animate('295ms ease-in-out', style({ right: '0' })),
      ]),
      transition(':leave', [
        style({ right: '0' }),
        animate('295ms ease-in-out', style({ right: '-100%' })),
      ]),
    ]),
  ],
})
export class CartSidebarComponent {
  cartService = inject(CartSidebarService);

  showCart = this.cartService.isCartOpen$;

  closeCartSidebar() {
    this.showCart.next(false);
  }
}
