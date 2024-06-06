import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const ServicesLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default ServicesLayout;
