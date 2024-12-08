import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { productsData } from 'src/app/pages/ui-components/tables/tables.component';
import { Item } from 'src/app/api/models/odaProductsModel';
import { ProductPriority } from 'src/app/api/models/productPriority';


@Component({
    selector: 'app-product-performance',
    standalone: true,
    imports: [MaterialModule, CommonModule],
    templateUrl: './product-performance.component.html',
})
export class AppProductPerformanceComponent implements OnInit {
    private sharedDataService = inject(SharedDataService); // Inject the shared service

    displayedColumns: string[] = ['name', 'brand', 'priority', 'budget'];
    dataSource: productsData[] = [];

    ngOnInit(): void {
        this.sharedDataService.items$.subscribe((items) => {
            console.log('Received items in Product Performance:', items);

            this.dataSource = items.map((item) => ({
                id: item.id,
                imagePath: item.attributes.images[0]?.thumbnail.url,
                uname: item.attributes?.name ?? 'No Name', 
                position: item.attributes.brand,
                productName: item.attributes?.brand ?? 'Unknown',
                budget: parseFloat(item.attributes?.gross_price ?? '0'),
                priority: this.priorityAssignment(item), 
            }));
        });
    }

    private priorityAssignment(item: Item): string {
        if(!item.attributes?.availability.is_available){
            return ProductPriority.Low
        }
        if(item.attributes.is_exempt_from_third_party_marketing){
            return ProductPriority.Low
        }
        if(item.attributes.brand == null){
            return ProductPriority.Medium
        }
        if(parseFloat(item.attributes?.gross_price) > 30.0){
            return ProductPriority.Critical
        }
        return ProductPriority.High
    }
}
