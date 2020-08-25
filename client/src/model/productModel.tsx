import { action, Action, Thunk, thunk } from 'easy-peasy';
import {
  Department,
  Product,
  Filters,
  PaginationInfo,
} from '../helper/interfaces';
import api from '../api';

export interface ProductModel {
  isLoading: boolean;
  departments: Array<Department>;
  products: Array<Product>;
  paginationInfo: PaginationInfo | null;
  fetchDepartments: Thunk<ProductModel>;
  fetchProducts: Thunk<ProductModel, Filters>;
  setPaginationInfo: Action<ProductModel, PaginationInfo>;
  setProducts: Action<ProductModel, Array<Product>>;
  setDepartments: Action<ProductModel, Array<Department>>;
  setIsLoading: Action<ProductModel, boolean>;
}

const productModel: ProductModel = {
  isLoading: false,
  departments: [],
  products: [],
  paginationInfo: null,
  fetchDepartments: thunk(async (actions, payload) => {
    const res = await api.fetchDepartments();
    actions.setDepartments(res.data);
  }),
  fetchProducts: thunk(async (actions, payload) => {
    const res = await api.fetchProducts(payload);
    actions.setProducts(res.data.products);
    const resClone = { ...res.data };
    delete resClone.products;
    actions.setPaginationInfo(resClone);
  }),
  setPaginationInfo: action((state, payload) => {
    state.paginationInfo = payload;
  }),
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  setDepartments: action((state, payload) => {
    state.departments = payload;
  }),
  setIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
};

export default productModel;
