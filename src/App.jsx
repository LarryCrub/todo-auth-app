import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Todo from './pages/Todo';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Todo />} />
      <Route exact path="/:id" element={<Todo />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
