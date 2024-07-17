interface Todo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface ReadOnlyTodo {
  readonly id: number;
  readonly task: string;
  readonly description: string;
  readonly completed: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

interface TodoMutation {
  id?: number;
  task?: string;
  description?: string;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface TodoList { 
  items: Todo[] | ReadOnlyTodo[] 
  push: (item: Todo) => void;
  map: (id: number) => Item;

};
