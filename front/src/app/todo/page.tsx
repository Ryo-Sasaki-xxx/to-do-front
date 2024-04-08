'use server';
import 'server-only';
import { Todo } from '@/types/TodoList';
import { TodoList } from '@/features/TodoList/components/TodoList';
import React from 'react';
import { TodoRepository } from '@/repositories/Todo.repository';

const page = async () => {
  const { fetchAll } = TodoRepository();
  const todos = await fetchAll();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default page;
