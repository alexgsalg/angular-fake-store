import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CartSidebarService } from '../cart-sidebar/cart-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  cartService = inject(CartSidebarService);

  showMenu: boolean = false;
  isCartOpen: boolean = false;

  toogleCart() {
    this.isCartOpen = !this.isCartOpen;
    this.cartService.isCartOpen$.next(this.isCartOpen);
  }
}
