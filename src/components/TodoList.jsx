import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHandleUpdateTodos } from '../hooks/useTodos';

import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { TodoItem } from './simpleComponents/TodoItem';

const TodoList = () => {
  const { id } = useParams();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });
  const todos = useSelector(
    (state) => state.taskPacks.find((pack) => pack.id === id)?.todos,
  );

  const updateTodo = useHandleUpdateTodos(id, todos);
  useEffect(() => {
    updateTodo();
  });

  return (
    <div className={cn('w-1/2', { 'w-11/12': isTabletOrMobile })}>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
