import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useHandleUserAdd(email, password) {
  const push = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  return () => {
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
}
