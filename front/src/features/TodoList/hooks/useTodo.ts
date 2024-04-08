import { TodoRepository } from '@/repositories/Todo.repository';
import { Todo } from '@/types/TodoList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTodo = () => {
  const queryClient = useQueryClient();
  const { fetchAll, add } = TodoRepository();

  const handleAdd = async ({
    title,
    status,
  }: {
    title: string;
    status: string;
  }) => {
    console.log('----');
    const result = await add(title, status);
    return result;
  };
  const addMutate = useMutation({
    // mutationFn: (title: string, status: 'working' | 'complete' | 'pending') =>
    //   add(title, status),
    mutationFn: handleAdd,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alltodos'] });
    },
  });

  const handleClickAdd = async ({
    title,
    status,
  }: {
    title: string;
    status: string;
  }) => {
    addMutate.mutate({ title: title, status: status });
  };
  return { fetchAll, handleClickAdd };
};
