import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHandleAdd } from '../hooks/usePacks';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { HiSquaresPlus } from 'react-icons/hi2';

import TodoPack from './simpleComponents/TodoPack';
import InputField from './simpleComponents/InputField';
import Burger from './simpleComponents/Burger';

function LeftNavBar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });
  const packs = useSelector((state) => state.taskPacks);
  const [title, setTitle] = useState('');
  const handleAdd = useHandleAdd(title, setTitle);
  const showUI = useSelector((state) => state.uiShow.showUi);

  return (
    <div
      className={cn('z-10 mt-1 h-1/2', {
        'z-20 absolute w-1/6  top-0 left-0 ': isTabletOrMobile,
      })}
    >
      <Burger />
      <div
        className={cn(
          'text-2xl text-center border-r-0 border-r-zinc-400 basis-2/12 items-center h-full bg-zinc-900 px-2',
          { 'hidden ': showUI },
          { 'px-10 w-screen mt-12': isTabletOrMobile },
        )}
      >
        <h2 className="mb-2">Каталог</h2>
        <InputField
          value={title}
          handleInput={setTitle}
          handleSubmit={handleAdd}
          placeholder={'Добавить папку'}
          buttonHolder={
            <HiSquaresPlus className="text-2xl m-auto text-zinc-900" />
          }
        />
        <div className="justify-items-center">
          <ul>
            {packs.map((pack) => (
              <TodoPack key={pack.id} {...pack} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftNavBar;
