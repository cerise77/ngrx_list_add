import { AddProduct } from './../addProduct/addProduct.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  products: Observable<AddProduct[]>;
  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.addProduct);
   }

  ngOnInit() {
  }

}
