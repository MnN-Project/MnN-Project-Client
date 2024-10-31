import AppLogo from '@/assets/Logo1.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="shrink-0 lg:mr-10.5 ">
      <div className="flex items-center">
        <Link to="/" className="inline-flex items-center w-40 h-7">
          <img
            src={AppLogo}
            alt="logo"
            width={160}
            height={28}
            className="w-[250px] h-auto object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
