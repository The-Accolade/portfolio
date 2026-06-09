import { useEffect, useState } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <ul className="site-header__links">
      {NAV_LINKS.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={activeId === id ? 'active' : ''}
            onClick={closeMenu}
            aria-current={activeId === id ? 'page' : undefined}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header
        className={[
          'site-header',
          isSticky && 'site-header--sticky',
          menuOpen && 'site-header--menu-open',
        ].filter(Boolean).join(' ')}
      >
        <a href="#hero" className="site-header__logo" aria-label="Akolade Olusola — Home">
          Akolade<span>.</span>
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {navLinks}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>

          <button
            type="button"
            className="site-header__menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav__backdrop" onClick={closeMenu} aria-hidden="true" />
        <nav id="mobile-nav" className="mobile-nav__panel" aria-label="Primary mobile">
          {navLinks}
        </nav>
      </div>
    </>
  );
};

export default Header;
