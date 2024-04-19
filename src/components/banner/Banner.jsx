import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container-wrapper mt-s relative overflow-hidden h-28">
      <Link href="#" title="" target="_blank">
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner Image"
          width={1400}
          height={100}
          className="object-fit object-center"
        />
      </Link>
    </section>
  );
};

export default Banner;
