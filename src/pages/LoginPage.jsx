import { Link } from 'react-router-dom';
import { Login } from '../components/Login';

const LoginPage = () => {
  return (
    <div className="bg-zinc-900 w-screen h-screen text-pink-400 flex items-start justify-center pt-12">
      <div className="w-1/2 h-1/4">
        <h1 className="text-2xl text-center mb-8">Войти</h1>
        <Login />
        <p className="text-center mt-2">
          Нет аккаунта?{' '}
          <span className="text-white">
            {' '}
            <Link to="/register">Зарегестрироваться</Link>{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
