import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-white container-wrapper mt-s bg-dark pt-m pb-s">
            <div className="mx-auto flex w-full flex-wrap justify-start max-w-[1200px]">
                <dl className="w-full mb-s xs:basis-1/2 lg:flex-1">
                    <dt className="font-bold mb-s px-2xs">About Us</dt>
                    <dd>
                        <ul>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Customer Reviews</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/return-policy">Return Policy</Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                {/* First */}
                <dl className="w-full mb-s xs:basis-1/2 lg:flex-1">
                    <dt className="font-bold mb-s px-2xs">Customer Service</dt>
                    <dd>
                        <ul>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/complaint">Complaint</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/help">Help</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/faqs">FAQ</Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                {/* Second */}
                <dl className="w-full mb-s xs:basis-1/2 lg:flex-1">
                    <dt className="font-bold mb-s px-2xs">Buy On Made In Nigeria</dt>
                    <dd>
                        <ul>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/category">Categories</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Check Verified Sellers</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="/tips">Tips</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Buyers</Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                {/* Third */}
                <dl className="w-full mb-s xs:basis-1/2 lg:flex-1">
                    <dt className="font-bold mb-s px-2xs">Sell On Mage In Nigeria</dt>
                    <dd>
                        <ul>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Posting Policy</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Premium Services</Link>
                            </li>
                            <li className="text-sm px-2xs mb-1.3">
                                <Link href="#">Sellers</Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                {/* Forth */}
            </div>
        </footer>
    );
};

export default Footer;
