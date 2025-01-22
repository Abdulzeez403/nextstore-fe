export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tag: string;
  stock: number;
  images?: IImage[];
  rating?: number;
  numReviews?: number;
  specifications?: ISpecification[];
  sizes?: string[];
  colors?: string[];
}

export interface IImage {
  url: string;
  type: string;
  name: string;
  thumbUrl?: string;
}

export interface ISpecification {
  _id: string;
  key: string;
  value: string;
}
