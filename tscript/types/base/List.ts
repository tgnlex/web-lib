
interface List {
  name?: string,
  items: Item[];
  push: (item: Item) => void;
  map: (id: number) => Item | Item[];
}