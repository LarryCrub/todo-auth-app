import { useState } from 'react';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="w-full grid justify-items-center">
      <div className="w-1/2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full h-10 text-pink-400 bg-transparent border border-zinc-400 mb-3 p-3 rounded-xl"
        />
      </div>
      <div className="w-1/2">
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          className="w-full h-10 text-pink-400 bg-transparent border border-zinc-6400 mb-3 p-3 rounded-xl"
        />
      </div>

      <button
        onClick={() => handleClick(email, pass)}
        className="w-1/4 h-10 bg-pink-400 rounded-lg mt-4 text-xl text-zinc-900"
      >
        {title}
      </button>
    </div>
  );
};

export { Form };
