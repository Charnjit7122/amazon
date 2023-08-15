import { atom } from "recoil";

export const AddProductModalState = atom({
  key: "AddProductModalState",
  default: false,
});

export const EditProductModalState = atom({
  key: "EditProductModalState",
  default: false,
});

export const EditProductID = atom({
  key: "EditProductID",
  default: null,
});
