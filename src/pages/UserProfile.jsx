import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../hooks/use-auth';

import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectTotalTodos } from '../store/slices/selector';
import TodoPack from '../components/simpleComponents/TodoPack';

const UserProfile = () => {
  const totalTodos = useSelector(selectTotalTodos);
  const packs = useSelector((state) => state.taskPacks);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });
  const { email } = useAuth();
  return (
    <div className="bg-zinc-900 h-screen w-screen text-pink-400">
      <NavBar
        buttonHolder={
          <Link to="/">
            <FaUser className="m-auto text-xl" />
          </Link>
        }
      />
      <div
        className={cn(
          'border border-zinc-400 rounded-xl w-3/4 h-5/6 mt-10 mx-auto',
          { 'border-0': isTabletOrMobile },
        )}
      >
        <div className="ml-auto w-1/2 border-b border-zinc-400 p-3 text-right">
          <span className="text-xl">{email}</span>
        </div>
        <div className="p-6 w-1/2 text-green-400 text-xl">
          Total todos: <span className="text-pink-400">{totalTodos}</span>
          <div className="text-pink-400 text-center text-2xl">
            Каталог
            <div className="overflow-y-auto overflow-hidden h-[40rem] overscroll-contain">
              <ul>
                {packs.map((pack) => (
                  <TodoPack key={pack.id} {...pack} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
