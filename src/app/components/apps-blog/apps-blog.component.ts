import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { SharedDataService } from 'src/app/services/shared-data.service';

interface productcards {
    id: number;
    imgSrc: string;
    title: string;
    price: string;
    rprice: string;
    rating: number;
}

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],
    templateUrl: './apps-blog.component.html',
})
export class AppBlogComponent {
    private sharedDataService = inject(SharedDataService); // Inject the shared service
    productcards: productcards[] = [];  // Declare the productcards array

    constructor() {
        this.sharedDataService.items$.subscribe((items) => {
            this.productcards = items.map((item) => ({
                id: item.id,
                imgSrc: item.attributes.images[0].large.url,
                title: item.attributes.name,
                price: item.attributes.gross_price,
                rprice: item.attributes.gross_unit_price,
                rating: 4
            }));
        });
    }
}
