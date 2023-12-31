// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import AboutUs from './pages/about-us';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/about-us.html': AboutUs,
  '/auth/register.html': Register,
  '/auth/login.html': Login,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
