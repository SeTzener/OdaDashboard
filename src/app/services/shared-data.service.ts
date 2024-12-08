import { Attribute, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Attributes, Item } from 'src/app/api/models/odaProductsModel';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private itemsSource = new BehaviorSubject<Item[]>([]);
  private metaSource = new BehaviorSubject<Attributes>({
    items: 15,
    page: 1,
    has_more_items: true,
    request_types: [],
    query_string: '',
    filters: '',
    meta: null,
    uuid: ''
  });
  items$ = this.itemsSource.asObservable();
  meta$ = this.metaSource.asObservable();

  setItems(items: Item[], attributes: Attributes): void {
    this.itemsSource.next(items);
    this.metaSource.next(attributes);
  }
}
