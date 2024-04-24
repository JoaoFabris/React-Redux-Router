import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import NavBar from '../nav-bar';

function Layout() {
  return (
    <>
      {/* Classe wrapper é para fixar/centralizar o footer */}
      <div className="wrapper">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
