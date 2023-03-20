import { comOrders, movOrders, movTypes, TSelectOption } from "../../models/commonModels";


export const moviesOrderOptions: TSelectOption<movOrders>[] = [
  {
    value: movOrders.numValue,
    label: "Просмотрам"
  },
  {
    value: movOrders.rating,
    label: "Рейтингу"
  },
  {
    value: movOrders.year,
    label: "Годам (выдает шлак)"
  }
];

export const moviesTypeOptions: TSelectOption<movTypes>[] = [
  {
    value: movTypes.all,
    label: "Все"
  },
  {
    value: movTypes.film,
    label: "Фильм"
  },
  {
    value: movTypes.miniSeries,
    label: "Мини-сериал"
  },
  {
    value: movTypes.tvShow,
    label: "Шоу"
  },
  {
    value: movTypes.tvSeries,
    label: "Сериал"
  }
];

export const commentsOrderOptions: TSelectOption<comOrders>[] = [
  {
    value: comOrders.userPositiveRatingDesc,
    label: "Больше всего лайков"
  },
  {
    value: comOrders.userNegativeRatingDesc,
    label: "Больше всего дизлайков"
  },
  {
    value: comOrders.dateDesc,
    label: "Новые"
  },
  {
    value: comOrders.dataASC,
    label: "Старые"
  }
];