import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { getData } from '../store/slices/taskPackSlice.js';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useCallback } from 'react';

export function useGetDocs() {
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  return useCallback(() => {
    isAuth &&
      getDocs(collection(db, `TasksPack${userID}`)).then((res) =>
        dispatch(getData(res.docs.map((el) => ({ ...el.data(), id: el.id })))),
      );
  }, [dispatch, isAuth, userID]);
}
