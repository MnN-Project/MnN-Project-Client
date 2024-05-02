import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container-wrapper mt-s bg-dark text-white pt-m pb-s">
      <div className="flex justify-start flex-wrap w-full mx-auto max-w-[1200px]">
        <dl className="mb-s w-full lg:flex-1 xs:basis-1/2">
          <dt className="mb-s px-2xs font-bold">About Us</dt>
          <dd>
            <ul>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Customer Reviews</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Return Policy</Link>
              </li>
            </ul>
          </dd>
        </dl>
        {/* First */}
        <dl className="mb-s w-full lg:flex-1 xs:basis-1/2">
          <dt className="mb-s px-2xs font-bold">Customer Service</dt>
          <dd>
            <ul>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Complaint</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Help</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </dd>
        </dl>
        {/* Second */}
        <dl className="mb-s w-full lg:flex-1 xs:basis-1/2">
          <dt className="mb-s px-2xs font-bold">Buy On Made In Nigeria</dt>
          <dd>
            <ul>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Categories</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Check Verified Sellers</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Tips</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Buyers</Link>
              </li>
            </ul>
          </dd>
        </dl>
        {/* Third */}
        <dl className="mb-s w-full lg:flex-1 xs:basis-1/2">
          <dt className="mb-s px-2xs font-bold">Sell On Mage In Nigeria</dt>
          <dd>
            <ul>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Posting Policy</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
                <Link href="#">Premium Services</Link>
              </li>
              <li className="px-2xs mb-1.3 text-sm">
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
