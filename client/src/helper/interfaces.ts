export interface Department {
  _id: string;
  name: string;
}

export interface Promotion {
  _id: string;
  code: string;
  active: boolean;
  discount: number;
}

export interface ProductPromotion {
  _id: string;
  product_id: string;
  promotion_id: Promotion;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  department_id: Department;
  createdAt: Date;
  updatedAt: Date;
  promotion: ProductPromotion;
}

export interface Filters {
  limit?: string;
  page?: string;
  dep_id?: string;
  promo_code?: string;
  query?: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  pages: number;
  total: number;
}
