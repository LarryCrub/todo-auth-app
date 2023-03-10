import { useDispatch, useSelector } from 'react-redux';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { addPack, removePack } from '../store/slices/taskPackSlice.js';
import { useGetDocs } from './useGetDocs';

export function useHandleAdd(title, setTitle) {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.id);
  const getMyDocs = useGetDocs();

  return () => {
    if (title.trim().length) {
      addDoc(collection(db, `TasksPack${userID}`), {
        title,
        todos: [],
      })
        .then(dispatch(addPack({ title })))
        .then(setTitle(''))
        .then(getMyDocs);
    }
  };
}

export function useHandleDelete(id) {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.id);
  return () => {
    deleteDoc(doc(db, `TasksPack${userID}`, `${id}`));
    dispatch(removePack({ id }));
  };
}
