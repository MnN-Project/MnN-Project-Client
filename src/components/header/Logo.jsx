import Link from "next/link";

const Logo = ({text}) => {
    return (
        <div className="shrink-0 lg:mr-10.5">
            <div className="flex items-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center capitalize text-white w-53 h-10.3 bg-green"
                >
                    {text}
                </Link>
            </div>
        </div>
    );
};

export default Logo;
