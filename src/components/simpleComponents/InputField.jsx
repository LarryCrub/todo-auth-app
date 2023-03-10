import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

const InputField = ({
  value,
  handleInput,
  handleSubmit,
  placeholder,
  buttonHolder,
}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1280px)' });
  return (
    <div className="flex align-center justify-center">
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleInput(e.target.value)}
        className={cn(
          'w-10/12 h-8 p-2 text-sm text-slate-200 bg-transparent border-zinc-400 border rounded-lg',
          { 'w-8/12': isSmallScreen },
        )}
      />
      <button
        className={cn(
          'w-2/12 h-8 bg-pink-400 ml-2 text-zinc-900 text-sm  rounded-lg ',
          { 'w-4/12': isSmallScreen },
        )}
        onClick={handleSubmit}
      >
        {buttonHolder}
      </button>
    </div>
  );
};

export default InputField;
