import About from "./About";
import Contact from "./Contact";
import Product from "./Product";

const Main = (props) => {
  return (
    <div>
      {props.page === "about" ? <About /> : null}
      {props.page === "contact" ? <Contact /> : null}
      {props.page === "product" ? <Product /> : null}
    </div>
  );
};
export default Main;
