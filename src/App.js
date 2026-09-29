import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Lets keyboard users jump past the header straight to the page content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;