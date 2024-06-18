import Image from "next/image";
import Link from "next/link";

const Banner = ({ sectionHeight, src }) => {
  return (
    <section
      className={"relative overflow-hidden mt-s"}
      style={{ height: sectionHeight }}
    >
      <Link href="#" title="">
        <Image
          src={src}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Link>
    </section>
  );
};


export default Banner;
