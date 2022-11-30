import { Product } from './../models/Products.model';
import { reducerProd } from "./reducers/products.reducer";
import { configureStore } from '@reduxjs/toolkit'

export interface StoreModel {
    product: Product[]
}

export const store = configureStore({
    reducer: {
        product: reducerProd
    },
})

export default store;