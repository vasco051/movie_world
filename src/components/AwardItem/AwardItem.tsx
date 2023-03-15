import { FC } from "react";

import { AwardItemProps } from "./AwardItemProps";

import styles from "./AwardItem.module.scss"


const AwardItem: FC<AwardItemProps> = ({ award }) => {
  return (
    <div className={styles.award}>
      <h4 className={styles.award__title}>Номинация: {award?.nominationName}</h4>
      <p>Мероприятие: <span>{award.name}</span></p>
      <p>Номинуемыe: <span>{award?.persons?.map(person => person.nameEn)}</span></p>
      <p>Год: <span>{award?.year}</span></p>
      <p><span>{award?.win ? "Победа в номинации" : "Проигрыш в номинации"}</span></p>
    </div>
  );
};

export default AwardItem;