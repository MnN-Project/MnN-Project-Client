import { Link } from 'react-router-dom';
import { cn } from '@/libs/utils';
import { Button } from '../button/Button';

const AsideWithImage = ({
  src,
  buttonText,
  headingText,
  to,
  textStyle,
  backgroundColor,
  className
}) => {
  return (
    <div
      className="relative hidden w-1/4 overflow-hidden lg:block"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <Link to={`${to}`} className="block h-full w-full p-m">
        <div className={'w-full flex flex-col items-center'}>
          <img src={src} alt="aside Image" width={200} height={200} className={` ${className}`} />
        </div>
        <div className="relative">
          <div className={cn('mb-s text-u-sm font-semibold', textStyle)}>{headingText}</div>
          <div className="">
            <Button size="sm">{buttonText}</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AsideWithImage;
