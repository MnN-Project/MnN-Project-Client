import Image from "next/image";
import Link from "next/link";
import AppLogo from "../../../public/assets/Logo1.png";

const Logo = () => {
    return (
        <div className="shrink-0 lg:mr-10.5">
            <div className="flex items-center">
                <Link
                    href="/"
                    className="inline-flex items-center w-53 h-10.3"
                >
                    <Image src={AppLogo} alt="logo" width={200} height={200} />
                </Link>
            </div>
        </div>
    );
};

export default Logo;
