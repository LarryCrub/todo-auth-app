import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUser } from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Form } from './simpleComponents/Form';

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleRegister = (name, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, name, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            name: user.name,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        push('/');
      })
      .catch(() => alert(''));
  };
  return <Form title="Зарегистрироваться" handleClick={handleRegister} />;
};

export { SignUp };
