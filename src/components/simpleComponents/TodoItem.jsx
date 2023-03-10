import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { removeTodo, toggleTodo } from '../../store/slices/taskPackSlice';

import { BsTrash, BsCheck } from 'react-icons/bs';

const TodoItem = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();
  const { id: packId } = useParams();

  const handleToggle = () => {
    dispatch(toggleTodo({ id, packId }));
  };
  const handleDelete = () => {
    dispatch(removeTodo({ id, packId }));
  };
  return (
    <div className="w-full h-12 my-2 flex justify-between items-center text-slate-200 bg-zinc-800 rounded-xl p-4">
      <div className="flex items-center justify-center">
        <button
          className={cn(
            'w-6 h-6 border-2 border-pink-400 rounded-lg flex justify-center items-center mr-2',
            { 'bg-pink-400': isCompleted },
          )}
          onClick={handleToggle}
        >
          <BsCheck size={24} className="text-zinc-800" />
        </button>

        <span className={cn('ml-4 text-lg', { 'line-through': isCompleted })}>
          {text}
        </span>
      </div>

      <button className="text-zinc-400" onClick={handleDelete}>
        <BsTrash className="w-5 h-5" />
      </button>
    </div>
  );
};

export { TodoItem };
