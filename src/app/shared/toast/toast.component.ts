import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
// services
import { ToastService } from './toast.service';
// imports
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-toasts',
	standalone: true,
	imports: [CommonModule, NgbToastModule, NgTemplateOutlet],
	templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToastsComponent {
	toastService = inject(ToastService);
}
