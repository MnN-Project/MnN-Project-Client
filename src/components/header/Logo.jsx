const Logo = ({ text }) => {
  return (
    <div className="shrink-0 lg:mr-10.5">
      <div className="flex items-center">
        <a
          href="#"
          className="inline-flex w-53 h-10.3 bg-green justify-center items-center capitalize text-white"
        >
          {text}
        </a>
      </div>
    </div>
  );
};

export default Logo;
