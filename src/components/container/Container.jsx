import {cn} from "../../libs/utils";

const Container = ({className, children, small}) => {
    return (
        <section className="relative z-10 block container-wrapper">
            <div className={cn(
                `${className}`,
                {
                    "bg-white py-s mt-s px-2xs lg:px-s flex shadow-sm relative md:px-m":
                    small,
                },
                className
            )}
            >
                {children}
            </div>
        </section>
    );
};

export default Container;
