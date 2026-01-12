


export type ListProps<T> = {
  items: T[],  //
  renderItem: (item: T) => JSX.Element,
}

export function List<T>(props: ListProps<T>) {
  return (
    <ul>
          {props.items.map((item, index) => (
        <li key={index}>
          {props.renderItem(item)}
        </li>
      ))}
    </ul>
  );
}


