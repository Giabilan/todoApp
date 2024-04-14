import PropTypes from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-neutral-600 text-white min-h-svh p-4 my-4 ">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
