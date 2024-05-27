import {cn} from "../../libs/utils";
import {Button} from "../button/Button";

const AsideWithImage = ({src, buttonText, headingText, href, textStyle, backgroundColor,}) => {
    return (
        <div className="relative hidden w-1/4 overflow-hidden lg:block" style={{backgroundColor: `${backgroundColor}`,}}>
            <a href={href} className="block h-full w-full p-m">
                <div className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-cover bg-no-repeat" style={{backgroundImage: `url(${src})`,}}></div>
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
