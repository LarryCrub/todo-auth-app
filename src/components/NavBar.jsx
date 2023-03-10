import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';

const NavBar = ({ buttonHolder }) => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  return (
    <div className="flex justify-between">
      <div className="h-12 w-fit ml-auto flex space-x-1.5 p-2 justify-center items-center text-sm">
        <p>
          <span className="inline-block align-middle">Welcome</span>{' '}
          <span className="text-white inline-block align-middle">{email}</span>
        </p>
        <button className="h-8 w-8 text-pink-400 rounded-md">
          {buttonHolder}
        </button>
        <button
          className="bg-pink-400 text-zinc-800 text-sm h-8 w-24 rounded-md"
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default NavBar;
