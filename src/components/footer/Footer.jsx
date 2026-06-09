import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        &copy; {year} Akolade Olusola. All rights reserved.
      </p>
      <a href="#hero" className="site-footer__top" aria-label="Back to top">
        <HiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
};

export default Footer;
