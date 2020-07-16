
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from './app.component';
import { AddProductComponent }   from './addProduct/addProduct.component';
import { ViewComponent }   from './view/view.component';

import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/addProduct.reducer';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports:      [ BrowserModule, StoreModule.forRoot({addProduct: addProductReducer}), ReactiveFormsModule ],
    declarations: [
                    AppComponent, AddProductComponent, ViewComponent
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
