import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Layout;