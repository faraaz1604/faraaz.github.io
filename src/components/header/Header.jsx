import React, { useState, useEffect } from "react";
import { 
  UilEstate, 
  UilUser, 
  UilFileAlt, 
  UilBriefcaseAlt, 
  UilScenery, 
  UilMessage, 
  UilTimes, 
  UilApps,
  UilArrowUp
} from '@iconscout/react-unicons';
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      const scrollY = window.pageYOffset;

      // Update active nav item
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav("#" + sectionId);
        }
      });

      // Show/hide scroll-to-top
      if (scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Faraaz
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { href: "#home", icon: UilEstate, text: "Home" },
              { href: "#about", icon: UilUser, text: "About" },
              { href: "#skills", icon: UilFileAlt, text: "Skills" },
              { href: "#services", icon: UilBriefcaseAlt, text: "Services" },
              { href: "#portfolio", icon: UilScenery, text: "Portfolio" },
              { href: "#contact", icon: UilMessage, text: "Contact" },
            ].map(({ href, icon: Icon, text }) => (
              <li className="nav__item" key={href}>
                <a 
                  href={href} 
                  onClick={() => setActiveNav(href)}
                  className={`nav__link ${activeNav === href ? "active-link" : ""}`}
                >
                  <Icon className="nav__icon nav__icon-desktop" /> {text}
                </a>
              </li>
            ))}
          </ul>
          <UilTimes className="nav__close" onClick={() => showMenu(false)} />
        </div>
        
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <UilApps className="nav__icon nav__icon-desktop" />
        </div>
      </nav>

      <div 
        className={`scroll-top ${showScroll ? "show-scroll" : ""}`} 
        onClick={scrollToTop}
      >
        <UilArrowUp className="scroll-icon" />
      </div>
    </header>
  );
};

export default Header;