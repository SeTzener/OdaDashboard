import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding">
      <a [routerLink]="['/']">
        <img
          src="./assets/images/oda-brand.avif"
          class="m-1"
          alt="logo"
          height="100"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() { }
}
