import { cn } from "../../libs/utils";
import { Button } from "../button/Button";
const AsideWithImage = ({
  src,
  buttonText,
  headingText,
  href,
  textStyle,
  backgroundColor,
}) => {
  return (
    <div
      className="hidden lg:block relative w-1/4 overflow-hidden"
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <a href={href} className="block w-full h-full p-m">
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-cover cursor-pointer"
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
        <div className="relative">
          <div className={cn("mb-s text-u-sm font-semibold", textStyle)}>
            {headingText}
          </div>
          <div className="">
            <Button size="sm">{buttonText}</Button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AsideWithImage;
