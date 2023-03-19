import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import Select from "react-select";

import { moviesOrderOptions, moviesTypeOptions } from "../../../assets/exportData/selectors";
import { Context } from "../../../index";

import "./moviesSelects.scss";


const MoviesSelects: FC = observer(() => {
  const { moviesStore } = useContext(Context);

  // TODO onChange and Value были функциями тут, но я их перенес в сам Select

  return (
    <section className="moviesSelects">

      <div className="moviesSelects__item">
        <p className="moviesSelects__title">Жанр</p>
        <Select
          options={moviesTypeOptions}
          onChange={(newValue) => {
            moviesStore.setPage(1);
            newValue && moviesStore.setType(newValue.value);
          }}
          defaultValue={moviesTypeOptions.find(order => order.value === moviesStore.type)}
          classNamePrefix="moviesSelects"
        />
      </div>

      <div className="moviesSelects__item">
        <p className="moviesSelects__title">Сортировка по</p>
        <Select
          options={moviesOrderOptions}
          onChange={(newValue) => {
            moviesStore.setPage(1);
            newValue && moviesStore.setOrder(newValue.value);
          }}
          defaultValue={moviesOrderOptions.find(order => order.value === moviesStore.order)}
          classNamePrefix="moviesSelects"
        />
      </div>

    </section>
  );
});

export default MoviesSelects;