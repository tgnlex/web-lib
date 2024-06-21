interface TodoItem {
  id: number,
  name: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
type TodoInfo = Pick<TodoItem, "id" | "name" | "description">;

