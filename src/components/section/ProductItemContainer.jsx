import { cn } from "../../libs/utils";
const ProductItemContainer = ({ className, children }) => {
  return (
    <section className={cn("flex flex-wrap flex-1", className)}>
      {children}
    </section>
  );
};

export default ProductItemContainer;
