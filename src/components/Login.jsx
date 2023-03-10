import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Form } from './simpleComponents/Form';

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push('/');
      })
      .catch(() => alert('Invalid User'));
  };
  return <Form title="Войти" handleClick={handleLogin} />;
};

export { Login };
