import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddProduct } from './addProduct.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './addProduct.component.html'
})
export class AddProductComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
 }

  addProduct(name:any, price:any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <AddProduct> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit() {
  }

}
