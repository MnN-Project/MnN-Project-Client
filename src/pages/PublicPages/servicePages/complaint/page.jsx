import Breadcrumb, { BreadCrumbItem } from '@/components/breadcrumb/Breadcrumb';
import { Container } from '@/components/container/Container';

const Complaint = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Drop a complaint" />
        </Breadcrumb>
      </Container>

      <Container className="p-5 bg-white shadow-sm my-5">
        <div className=" px-2 lg:px-40 flex flex-col lg:flex-row gap-4 h-auto items-center lg:items-start">
          <div className="flex-1">
            <h2 className="uppercase text-md font-semibold text-green my-4 text-center lg:text-left">
              Let Us Know About Your Complain{' '}
            </h2>
            <div className="flex flex-col text-sm gap-8">
              <p>
                We connect you directly with local manufacturers, offering unique, high-quality, and
                authentic Made in Nigeria products that represent the rich culture and diversity of
                the country.
              </p>
              <p>
                We prioritize showcasing products from small-scale producers and artisans, giving
                them a global platform to compete and thrive in the international marketplace.
              </p>
            </div>
          </div>

          <div className="bg-gray flex-1 h-auto mt-0 lg:-mt-10 p-6 rounded-md shadow-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius tempore dicta inventore
            iste asperiores minima, eos, reiciendis ipsam, et incidunt soluta tenetur quae itaque
            quam voluptatibus quaerat mollitia accusantium enim.
          </div>
        </div>
      </Container>
    </>
  );
};

export default Complaint;
