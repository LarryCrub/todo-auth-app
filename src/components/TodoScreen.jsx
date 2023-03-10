import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHandleAddTodos } from '../hooks/useTodos';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import TodoList from '../components/TodoList';
import InputField from '../components/simpleComponents/InputField';

const TodoScreen = ({ title }) => {
  const [text, setText] = useState([]);
  const { id } = useParams();
  const addTask = useHandleAddTodos(text, setText, id);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });

  return (
    <div
      className={cn('basis-10/12 grid justify-items-center', {
        'px-10': isTabletOrMobile,
      })}
    >
      <div className="mx-auto w-full text-2xl text-center mb-2">{title}</div>
      <div className={cn('w-1/2', { 'w-11/12': isTabletOrMobile })}>
        <InputField
          value={text}
          handleInput={setText}
          handleSubmit={addTask}
          placeholder={'Добавить задачу'}
          buttonHolder={<span>Добавить</span>}
        />
      </div>

      <TodoList />
    </div>
  );
};

export default TodoScreen;
