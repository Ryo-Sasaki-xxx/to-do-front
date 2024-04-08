'use client';

import { Todo } from '@/types/TodoList';
import { useEffect } from 'react';
import { useTodo } from '../hooks/useTodo';
import { useQuery } from '@tanstack/react-query';

type TodoProps = { todos: Todo[] };
export const TodoList = (props: TodoProps) => {
  const { todos } = props;
  const { fetchAll } = useTodo();
  const { data: cacheData } = useQuery({
    queryKey: ['alltodos'],
    queryFn: fetchAll,
    initialData: todos,
  });

  return (
    <>
      {cacheData.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  );
};
