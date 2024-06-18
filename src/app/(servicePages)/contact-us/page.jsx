import "./contact.css"
import Breadcrumb, { BreadCrumbItem } from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/container/Container";
import Image from "next/image";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

const ContactUs = () => {
  return (
    <>
      <Container className="flex">
        <Breadcrumb>
          <BreadCrumbItem small href="#" text="Contact Us" />
        </Breadcrumb>
      </Container>

      <Container className=" mt-2 flex text-center py-4 bg-green items-center justify-center text-2xl font-extrabold text-white tracking-widest">
        <h1>NEED ASSISTANCE ?</h1>
      </Container>
      <Container className="p-5 flex address-section bg-white shadow-sm mt-5">
        <div className="address">
          <div className="top">
            If you have inquiries or need assistance, do not hesitate to contact
            us. We are available round the clock to serve you.
          </div>
          <div className="contactLinks">
            <Link href="#" className="chatCall">
              <IoChatbubblesOutline className="contactIcons shadow-lg" />
              <span className="numCall shadow-md">Chat With Us</span>
            </Link>

            <div className="realCall">
              <RiCustomerService2Line className="contactIcons shadow-lg" />
              <Link href="tel:+2348034942036" className="numCall">
                Call Us
              </Link>
            </div>
          </div>
        </div>

        <div className="Image">
          <Image
            src="/assets/slider1.jpg"
            width={500}
            height={500}
            className="contact-image"
          />
        </div>
      </Container>
 
     
    </>
  );
};

export default ContactUs;
