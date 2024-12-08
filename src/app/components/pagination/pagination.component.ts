import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

export interface Attributes {
  items: number; // Number of items per page
  page: number; // Current page
  has_more_items: boolean; // If more pages exist
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  private sharedDataService = inject(SharedDataService);

  pageSize = 30; // Items per page
  currentPage = 1; // Current page
  hasMoreItems = true; // Tracks if more items exist

  @Output() pageChanged = new EventEmitter<number>();

  ngOnInit(): void {
    // Subscribe to metadata updates
    this.sharedDataService.meta$.subscribe((attributes: Attributes) => {
      this.pageSize = 15;
      this.currentPage = attributes.page;
      this.hasMoreItems = attributes.has_more_items;
    });
  }

  onPageChange(event: PageEvent): void {
    const newPage = event.pageIndex + 1;

    // Prevent moving beyond the available pages
    if (!this.hasMoreItems && newPage > this.currentPage) {
      console.log('No more items to load');
      return;
    }

    console.log('Page changed:', newPage);
    this.currentPage = newPage;
    this.pageChanged.emit(this.currentPage);
  }
}
