import { useDispatch } from 'react-redux';
import { toggleUiShow } from '../../store/slices/hideShowSlice';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { GiHamburgerMenu } from 'react-icons/gi';

const Burger = () => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 968px)' });
  return (
    <div
      className={cn('m-2 cursor-pointer w-6 h-6 ', {
        hidden: isTabletOrMobile,
      })}
      onClick={() => dispatch(toggleUiShow())}
    >
      <GiHamburgerMenu className="text-lg" />
    </div>
  );
};

export default Burger;
