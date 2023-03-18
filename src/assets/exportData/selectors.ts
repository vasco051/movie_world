import { movOrders, TSelectOption } from "../../models/commonModels";


export const moviesOptions: TSelectOption<movOrders>[] = [
  {
    value: movOrders.rating,
    label: "По рейтингу"
  },
  {
    value: movOrders.numValue,
    label: "По хз"
  },
  {
    value: movOrders.year,
    label: "По годам"
  }
];