import Image from "next/image";
import Link from "next/link";
import AppLogo from "../../../public/assets/Logo1.png";

const Logo = () => {
    return (
        <div className="shrink-0 lg:mr-10.5">
            <div className="flex items-center">
                <Link
                    href="/"
                    className="inline-flex items-center w-40 h-7"
                >
                    <Image src={AppLogo} alt="logo" width={160} height={28} />
                </Link>
            </div>
        </div>
    );
};

export default Logo;
