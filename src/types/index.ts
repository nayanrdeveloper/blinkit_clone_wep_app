export type BannerType = {
  id: number;
  name: string;
  image: string;
};

export type ProductType = {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  images: string[];
  description: string;
  expiryDate: string;
  seller: string;
  countryOfOrigin: string;
  manufactureDetails: string;
  weight: string;
};

export type SubCategoryType = {
  _id: string;
  category: string;
  name: string;
  image: string;
};
