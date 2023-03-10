import { Link } from 'react-router-dom';
import { SignUp } from '../components/SignUp';

const RegisterPage = () => {
  return (
    <div className="bg-zinc-900 w-screen h-screen text-pink-400 flex items-start justify-center pt-12">
      <div className="w-1/2 h-1/4">
        <h1 className="text-2xl text-center mb-8"> Регистрация</h1>
        <SignUp />
        <p className="text-center mt-2">
          Уже есть аккаунт?{' '}
          <span className="text-white">
            {' '}
            <Link to="/login">Войти</Link>{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
