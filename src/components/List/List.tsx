import { ListProps } from "./ListProps";


export default function List<T>({
  items,
  renderItem,
  className,
  placeholder
}: ListProps<T>) {
  return (
    <section className={className}>
      {items.length ? items.map(renderItem) : <h2>{placeholder || "Сейчас содержимое отсутствует!"}</h2>}
    </section>
  );
}
