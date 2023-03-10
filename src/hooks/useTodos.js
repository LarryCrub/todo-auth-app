import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/slices/taskPackSlice';
import { v4 as uuid } from 'uuid';
import { db } from '../firebase';
import { useGetDocs } from '../hooks/useGetDocs';
import { updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { useCallback } from 'react';

export function useHandleAddTodos(text, setText, id) {
  const getMyDocs = useGetDocs();
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  return () => {
    if (text.trim().length) {
      updateDoc(doc(db, `TasksPack${userID}`, `${id}`), {
        todos: arrayUnion({
          id: uuid(),
          text,
          isCompleted: false,
        }),
      })
        .then(dispatch(addTodo({ text, packId: id })))
        .then(setText(''))
        .then(getMyDocs);
    }
  };
}

export function useHandleUpdateTodos(id, todos) {
  const userID = useSelector((state) => state.user.id);
  return useCallback(() => {
    updateDoc(doc(db, `TasksPack${userID}`, `${id}`), { todos: todos });
  }, [id, todos, userID]);
}
