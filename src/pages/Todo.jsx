import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { useGetDocs } from '../hooks/useGetDocs';
import { useAuth } from '../hooks/use-auth';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import cn from 'classnames';
import NavBar from '../components/NavBar';
import TodoScreen from '../components/TodoScreen';
import LeftNavBar from '../components/LeftNavBar';

const Todo = () => {
  const { isAuth } = useAuth();
  const packs = useSelector((state) => state.taskPacks);
  const { id } = useParams();
  const pack = packs.find((pack) => pack.id === id);
  const getMyDocs = useGetDocs();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 968px)' });

  useEffect(() => {
    isAuth && getMyDocs();
  }, [isAuth, getMyDocs]);

  return isAuth ? (
    <div
      className={cn(
        'text-pink-400 bg-zinc-900 min-h-screen w-screen flex flex-row relative',
        {
          'justify-center': isTabletOrMobile,
        },
      )}
    >
      <LeftNavBar />

      <div
        className={cn('basis-full border-l border-l-zinc-400 z-10', {
          ' border-l-zinc-900  ': isTabletOrMobile,
        })}
      >
        <NavBar
          buttonHolder={
            <Link to="/profile">
              <FaUser className="m-auto text-xl" />
            </Link>
          }
        />
        <div>{pack ? <TodoScreen {...pack} /> : null}</div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Todo;
