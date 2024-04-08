import { Todo } from '@/types/TodoList';

export const TodoRepository = () => {
  const Todos: Todo[] = [
    {
      id: 1,
      title: 'ネギ買う',
      status: 'working',
    },
    {
      id: 2,
      title: 'にんじん買う',
      status: 'pending',
    },
    {
      id: 3,
      title: '卵かう',
      status: 'complete',
    },
  ];

  const fetchAll = async () => {
    return await Todos;
  };
  const add = async (title: string, status: string) => {
    const result = { id: 4, title: title, status: status } as Todo;
    console.log('aaaaaaa');
    return result;
  };
  return { fetchAll, add };
};
