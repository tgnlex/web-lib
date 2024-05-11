interface TodoItem {
  id: number,
  name: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

interface TodoList {
  size: ScreenSize;
  theme: Theme;
  todos: TodoItem[] | TodoItem | null;
  pushTodo: (item: TodoItem) => void;
  mapTodo: (key: number) => void;
  }
