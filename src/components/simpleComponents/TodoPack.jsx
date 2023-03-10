import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { useHandleDelete } from '../../hooks/usePacks';
import { toggleUiShow } from '../../store/slices/hideShowSlice';

import { BsFolder, BsTrash } from 'react-icons/bs';

const TodoPack = ({ title, id }) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });
  const handleDelete = useHandleDelete(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/${id}`);
    if (isTabletOrMobile) {
      dispatch(toggleUiShow());
    }
  };
  const todos = useSelector(
    (state) => state.taskPacks.find((pack) => pack.id === id)?.todos,
  );
  const completedTodo = todos.filter((todo) => todo.isCompleted === true);
  const uncompletedTodo = todos.filter((todo) => todo.isCompleted === false);
  console.log((completedTodo.length / todos.length) * 100);

  return (
    <div
      className={cn(
        'w-full h-16 my-2 text-slate-200 bg-zinc-800 rounded-xl p-3 mb-2 cursor-pointer',
        { 'text-xs': isSmallScreen },
      )}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center w-full">
        <button className="flex items-center justify-center">
          <BsFolder
            className={cn('text-pink-500 mr-3 text-xl', {
              'text-sm': isSmallScreen,
            })}
          />
          <span className={cn('text-lg', { 'text-xs': isSmallScreen })}>
            {title}
          </span>
        </button>

        <button
          className="flex items-center justify-center"
          onClick={handleDelete}
        >
          <BsTrash
            className={cn('text-xl text-zinc-400', {
              'text-sm': isSmallScreen,
            })}
          />
        </button>
      </div>
      <div className="text-xs w-full justify-items-start flex">
        <div className="mr-4 w-1/2 text-green-400">
          Comleted
          <span className="text-sm"> {completedTodo.length}</span>
        </div>
        <div className="w-1/2 text-red-400">
          To do
          <span className="text-sm"> {uncompletedTodo.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoPack;
